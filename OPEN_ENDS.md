# Open ends — Team Tronix Pvt. Ltd.

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
- [ ] `lib/site.ts` `previewImage` still points at `https://teamtronix-nine.vercel.app/og.png` instead of the live domain/`/og.png` #high #seo
- [ ] `lib/site.ts` `url` is `https://www.teamtronix.in` while Plesk preferred domain is apex `teamtronix.in` — canonicals/sitemap/schema can disagree with the live host #high #seo
- [ ] `components/ContactForm.tsx` resolves WhatsApp product labels only from `inquiryOptions`, so brand picks (Luminous/Amaron/Microtek/Amaze) become "a power solution" #high #forms
- [ ] `app/privacy/page.tsx` says the form opens email or a form endpoint; the live form opens WhatsApp via `whatsappHref` #medium #content
- [ ] Root `index.html` is a stale static duplicate of the site and can confuse deploys/reviews vs the Next `app/` source #low

## SEO
- [ ] Homepage title in `lib/site.ts` is 67 chars (target 50–60): "Teamtronix India | Total Power Solutions | UPS, Solar & Stabilizers" #medium #homepage
- [ ] Homepage meta description in `lib/site.ts` is 187 chars (target 140–160) #medium #homepage
- [ ] `/products/` meta description in `app/products/page.tsx` is ~169 chars — trim to 140–160 #medium
- [ ] Several page titles are short before the layout template (e.g. Careers, Service Request, Privacy, Terms, Downloads) — tighten unique 50–60 char titles per page #medium
- [ ] Product page titles use `product.name` only; several are long/short unevenly and lack Bangalore/UPS local modifiers #medium #products
- [ ] JSON-LD in `lib/schema.ts` lacks `openingHoursSpecification`, `geo` lat/long, and a confirmed Google Business Profile URL in `sameAs` #high #seo
- [ ] OG/Twitter image serves from the old Vercel preview host — browsers and crawlers should load `https://teamtronix.in/og.png` (or www) at 1200×630 #high #seo
- [ ] No Google Search Console verification meta/DNS token present in `app/layout.tsx` or DNS docs #high #seo
- [ ] No GA4 / GTM / other analytics snippet in `app/layout.tsx` #high #analytics
- [ ] Homepage product grid images in `components/sections/Products.tsx` are PNG without `width`/`height`/`loading` attributes #medium #performance
- [ ] Hero/Featured cutouts (`Hero.tsx`, `Featured.tsx`) still use PNG product shots; prefer WebP/AVIF with dimensions like product posters #medium #performance
- [ ] Brand logos include JPEG/PNG (`public/assets/brands/amaron.jpg`, `amaze.png`) — convert to SVG/WebP where possible #low #brands
- [ ] Client logo marquee in `components/sections/Clients.tsx` sets empty `alt` on the duplicated half of logos — give meaningful alts or mark decorative consistently #medium #a11y
- [ ] Thin support pages under ~300 words: `app/careers/page.tsx`, `app/downloads/page.tsx`, `app/service/page.tsx` — expand with R.T. Nagar / Bengaluru service keywords and internal links #medium #content
- [ ] No dedicated `/about` or `/contact` URL (only `/#about` `/#contact` hashes) — weaker for local SEO landing pages #medium #seo
- [ ] Confirm apex↔www 301 and HTTPS stay consistent with `metadataBase`/`site.url` after DNS changes #high #infra

## Client inputs needed
- [ ] Confirm final preferred public URL (www vs non-www) and keep DNS + `lib/site.ts` aligned #high
- [ ] Provide business hours for the R.T. Nagar office for LocalBusiness schema and the Contact section #high
- [ ] Provide Google Business Profile link (and access if Flaux should verify) #high
- [ ] Confirm Facebook/LinkedIn/Instagram URLs in `lib/site.ts` `sameAs` are the live profiles #medium
- [ ] Supply corporate video file/URL to replace "Corporate video coming soon" in `components/sections/Hero.tsx` #medium #homepage
- [ ] Supply product datasheet PDFs (or confirm email-only delivery) for `/downloads` #medium
- [ ] Confirm open job roles/copy if Careers should list openings instead of resume-only #low #careers
- [ ] Provide lat/long for the showroom/office for LocalBusiness `geo` #medium
- [ ] Confirm GA4 measurement ID and Search Console property ownership #high #analytics
- [ ] Review privacy/terms legal text with their counsel (current copy is short website-only language) #medium #legal

## Features to build
- [ ] Wire Hero video modal to a real embed/file instead of "Corporate video coming soon" (`components/sections/Hero.tsx`) #medium #homepage
- [ ] Add real downloadable datasheets on `/downloads` (or a request workflow that emails PDFs) #medium
- [ ] Optional email/API form endpoint so enquiries are stored if WhatsApp is unavailable #low #forms
- [ ] Consider dedicated About and Contact pages linked from nav/footer instead of hash-only sections #low #nav

## Content
- [ ] Privacy policy delivery section still describes email/form-endpoint behaviour; rewrite to match WhatsApp quote flow #medium
- [ ] `/downloads` has no actual files — only "request by email" copy; clarify or add assets #medium
- [ ] Careers page has no open roles — add listings or an explicit "no openings" statement the client approves #low
- [ ] Add stronger Bengaluru / R.T. Nagar / UPS service internal links between product, service, FAQ, and home sections #medium #seo
- [ ] Client name strings vary ("Teamtronix", "Team Tech", "Team Tronix") — confirm legal display name for nav, schema `alternateName`, and footer #medium

## Performance & accessibility
- [ ] Convert homepage PNG product/hero images to WebP/AVIF and set explicit width/height + lazy-load below the fold #medium #performance
- [ ] Audit colour contrast for red brand text on light/dark themes in `app/globals.css` #medium #a11y
- [ ] Verify keyboard focus states on nav, theme toggle, form controls, and WhatsApp CTA #medium #a11y #mobile
- [ ] Client ticker images missing dimensions can contribute to CLS on `/` #medium #homepage
- [ ] Three Google fonts loaded in `app/layout.tsx` (Bebas Neue, DM Sans, JetBrains Mono) — confirm all are needed for LCP weight #low #performance

## Launch & infra
- [ ] Site is live on Plesk (`teamtronix.in`) via GitHub Actions FTP; remove/replace leftover Vercel preview dependencies (`previewImage`, any docs assuming Vercel hosting) #high
- [ ] Document FTP/GitHub Actions secrets rotation and who owns Plesk + DNS (`ns7/ns8.internetworldwide.in`) #medium
- [ ] Ensure Let's Encrypt auto-renew stays enabled ("Keep websites secured") in Plesk SSL settings #medium
- [ ] Do not use Plesk Git "Deploy now" to `\httpdocs` — it would overwrite the static `out/` deploy with source #high #infra
- [ ] Add uptime monitoring on `https://teamtronix.in/` #low
- [ ] Confirm backups for `httpdocs` / Plesk webspace #low
- [ ] Quote "form" has no server email delivery — only WhatsApp deep link; document that for the client #medium #forms
