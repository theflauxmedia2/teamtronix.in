/**
 * Crawl exported HTML under out/ and assert SEO basics from the local-SEO brief.
 * Run after `npm run build`: node scripts/seo-checks.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "out");
const errors = [];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === "index.html") files.push(full);
  }
  return files;
}

function textBetween(html, start, end) {
  const i = html.indexOf(start);
  if (i < 0) return null;
  const j = html.indexOf(end, i + start.length);
  if (j < 0) return null;
  return html.slice(i + start.length, j);
}

function countH1(html) {
  return (html.match(/<h1\b/gi) || []).length;
}

function metaContent(html, name) {
  const re = new RegExp(`<meta[^>]+name=["']${name}["'][^>]*>`, "i");
  const tag = html.match(re)?.[0];
  if (!tag) return null;
  return tag.match(/content=["']([^"']*)["']/i)?.[1] ?? "";
}

function ogContent(html, property) {
  const re = new RegExp(`<meta[^>]+property=["']${property}["'][^>]*>`, "i");
  const tag = html.match(re)?.[0];
  if (!tag) return null;
  return tag.match(/content=["']([^"']*)["']/i)?.[1] ?? "";
}

function canonical(html) {
  const tag = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i)?.[0];
  return tag?.match(/href=["']([^"']+)["']/i)?.[1] ?? null;
}

function checkJsonLd(html, file) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  for (const block of blocks) {
    try {
      JSON.parse(block[1]);
    } catch (err) {
      errors.push(`${file}: invalid JSON-LD (${err.message})`);
    }
  }
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function checkImgs(html, file) {
  // Drop duplicated marquee copies and any aria-hidden subtrees (non-greedy per element is unreliable for deep trees)
  const cleaned = html
    .replace(/aria-hidden=["']true["'][^>]*>[\s\S]*?<\/span>/gi, ">")
    .replace(/<div[^>]*aria-hidden=["']true["'][^>]*>[\s\S]*?<\/div>/gi, "");
  const imgs = [...cleaned.matchAll(/<img\b[^>]*>/gi)];
  for (const [tag] of imgs) {
    if (/aria-hidden=["']true["']/i.test(tag) || /role=["']presentation["']/i.test(tag)) continue;
    const alt = tag.match(/\balt=["']([^"']*)["']/i);
    if (!alt || alt[1].trim() === "") {
      if (/\balt=["']["']/i.test(tag) || !/\balt=/i.test(tag)) {
        errors.push(`${file}: img missing non-empty alt: ${tag.slice(0, 120)}`);
      }
    }
  }
}

if (!fs.existsSync(root)) {
  console.error("out/ missing — run npm run build first");
  process.exit(1);
}

const files = walk(root);
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);

  const titleRaw = textBetween(html, "<title>", "</title>");
  const title = titleRaw ? decodeEntities(titleRaw) : null;
  if (!title) errors.push(`${rel}: missing <title>`);
  else if (title.length > 70) errors.push(`${rel}: title length ${title.length} > 70 ("${title}")`);

  const descRaw = metaContent(html, "description") ?? ogContent(html, "og:description");
  const desc = descRaw ? decodeEntities(descRaw) : null;
  if (!desc) errors.push(`${rel}: missing meta description`);
  else if (desc.length > 170) errors.push(`${rel}: description length ${desc.length} > 170`);

  const h1 = countH1(html);
  if (h1 !== 1) errors.push(`${rel}: expected 1 h1, found ${h1}`);

  const canon = canonical(html);
  if (!canon && !rel.startsWith("404")) errors.push(`${rel}: missing canonical`);

  if (metaContent(html, "keywords") != null) errors.push(`${rel}: keywords meta still present`);
  if (html.includes("26+")) errors.push(`${rel}: contains "26+"`);
  if (/Battery Misery/i.test(html)) errors.push(`${rel}: contains Battery Misery`);
  if (!html.includes("Adi Kabeer Ashram Road") && !rel.includes("privacy") && !rel.includes("terms") && !rel.includes("careers") && !rel.includes("guides/") && rel !== "404/index.html" && !rel.startsWith("guides/")) {
    // many pages should include NAP; soft-check homepage, contact, about, products, service, areas
    if (
      rel === "index.html" ||
      rel.startsWith("contact/") ||
      rel.startsWith("about/") ||
      rel.startsWith("service/") ||
      rel.startsWith("ups-") ||
      rel.startsWith("inverter-") ||
      rel.startsWith("lift-") ||
      rel.startsWith("online-ups")
    ) {
      errors.push(`${rel}: missing address string Adi Kabeer Ashram Road`);
    }
  }

  checkJsonLd(html, rel);
  checkImgs(html, rel);
}

// Internal link existence (href starting with /)
const existing = new Set(
  files.map((f) => {
    let p = "/" + path.relative(root, path.dirname(f)).replace(/\\/g, "/");
    if (p === "/.") p = "/";
    if (!p.endsWith("/")) p += "/";
    return p;
  }),
);
existing.add("/");

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  const hrefs = [...html.matchAll(/href=["'](\/[^"'#?]*)/gi)].map((m) => m[1]);
  for (let href of hrefs) {
    if (href.startsWith("//")) continue;
    if (!href.endsWith("/")) href += "/";
    // static assets
    if (/\.[a-z0-9]+\/$/i.test(href) && !href.endsWith(".html/")) continue;
    if (href.includes(".")) continue;
    if (!existing.has(href) && !href.startsWith("/assets/") && href !== "/favicon.ico/") {
      // allow hash-only sections on home
      if (["/#", "/"].some(() => false)) {
        /* noop */
      }
      const knownMissingOk = href === "/projects/" || existing.has(href);
      if (!existing.has(href) && !fs.existsSync(path.join(root, href.replace(/^\//, ""), "index.html"))) {
        // ignore asset-like
        if (!href.match(/\.(png|jpg|svg|webp|ico|xml|txt|webmanifest)\/$/)) {
          errors.push(`${rel}: internal link 404 ${href}`);
        }
      }
    }
  }
}

if (errors.length) {
  console.error(`SEO checks failed (${errors.length}):\n` + errors.slice(0, 80).join("\n"));
  if (errors.length > 80) console.error(`... and ${errors.length - 80} more`);
  process.exit(1);
}

console.log(`SEO checks passed on ${files.length} pages.`);
