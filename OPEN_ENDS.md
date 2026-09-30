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
- [x] `lib/site.ts` `previewImage` still points at `https://teamtronix-nine.vercel.app/og.png` instead of the live domain/`/og.png` #high #seo
- [x] `lib/site.ts` `url` is `https://www.teamtronix.in` while Plesk preferred domain is apex `teamtronix.in` — canonicals/sitemap/schema can disagree with the live host #high #seo
- [x] `components/ContactForm.tsx` resolves WhatsApp product labels only from `inquiryOptions`, so brand picks (Luminous/Amaron/Microtek/Amaze) become "a power solution" #high #forms
- [x] `TODO(owner)` notes were leaking into live area/FAQ/product/brand copy; stripped from user-facing strings #high #content
- [x] Footer "Areas we serve" listed duplicate labels (HBR Layout ×2, Thanisandra ×2) #medium #nav
- [ ] `app/privacy/page.tsx` says the form opens email or a form endpoint; the live form opens WhatsApp via `whatsappHref` #medium #content
- [ ] Root `index.html` is a stale static duplicate of the site and can confuse deploys/reviews vs the Next `app/` source #low

## SEO
- [x] Homepage title / meta / H1 updated for local Bangalore UPS dealer keywords #medium #homepage
- [x] Product page titles use local Bangalore modifiers via `lib/product-seo.ts` #medium #products
- [x] JSON-LD LocalBusiness updated to ElectronicsStore with areaServed places, openingHours, brands; Product offers omitted without price #high #seo
- [x] OG/Twitter image serves from the live domain `/og-v2.png` #high #seo
- [x] No Google Search Console verification meta/DNS token present in `app/layout.tsx` or DNS docs #high #seo
- [x] GA4 snippet wired via `components/Analytics.tsx` reading `SITE.ga4Id` (empty until owner fills) #high #analytics
- [ ] In Google Search Console: submit sitemap `https://teamtronix.in/sitemap.xml` and Request indexing for `/`, `/products/`, area pages, and key product URLs #high #seo
- [ ] Homepage product grid images in `components/sections/Products.tsx` are PNG without `width`/`height`/`loading` attributes #medium #performance
- [ ] Hero/Featured cutouts (`Hero.tsx`, `Featured.tsx`) still use PNG product shots; prefer WebP/AVIF with dimensions like product posters #medium #performance
- [ ] Brand logos include JPEG/PNG (`public/assets/brands/amaron.jpg`, `amaze.png`) — convert to SVG/WebP where possible #low #brands
- [x] Client logo marquee alts + aria-hidden duplicates #medium #a11y
- [x] Thin support pages expanded: `/service/`, `/downloads/`, `/faq/` #medium #content
- [x] Dedicated `/about/` and `/contact/` pages #medium #seo
- [x] Area (location) pages, brand pages, guides scaffold shipped #high #seo
- [x] Confirm apex↔www 301 and HTTPS stay consistent with `metadataBase`/`site.url` after DNS changes #high #infra

## Client inputs needed
- [x] Confirm final preferred public URL (www vs non-www) and keep DNS + `lib/site.ts` aligned #high
- [ ] Provide business hours for the R.T. Nagar office (`SITE.openingHours`) #high
- [ ] Provide Google Business Profile share link (`SITE.googleMapsUrl`) and review link (`SITE.googleReviewUrl`) #high
- [ ] Provide lat/long for the showroom (`SITE.geo`) #medium
- [ ] Confirm Facebook/LinkedIn/Instagram URLs in `SITE.social` are the live profiles #medium
- [ ] Confirm GA4 measurement ID (`SITE.ga4Id`) and Search Console property ownership #high #analytics
- [ ] Confirm whether Frazer Town branch still operates (`SITE.hasFrazerTownBranch`) #high
- [ ] Confirm ISO renewed to 9001:2015 (`SITE.isoVersion`) #medium
- [ ] Confirm old-battery exchange (`SITE.offersOldBatteryExchange`) #medium
- [ ] Confirm BESCOM net-metering paperwork support (`SITE.handlesBescomNetMetering`) #medium
- [ ] Confirm AMC visit frequency and service response time #medium
- [ ] Confirm authorised-dealer status per brand in `lib/brands.ts` #medium
- [ ] Fill product kVA/Ah/wattage ratings and any “from ₹” prices in `lib/product-seo.ts` #medium #products
- [ ] Fill warranty periods and set `SITE.showWarrantyTable` #medium
- [ ] Supply founders’ names/photos for `/about/` #low
- [ ] Paste real Google review quotes into `lib/reviews.ts` #medium
- [ ] Add installation photos to area `jobs` arrays in `lib/areas.ts` #medium
- [ ] Supply product datasheet PDFs for `/downloads` (WhatsApp request flow is live) #medium
- [ ] Supply corporate video file/URL if a Watch Video CTA is added back later #low #homepage
- [ ] Confirm open job roles/copy if Careers should list openings instead of resume-only #low #careers
- [ ] Review privacy/terms legal text with their counsel (current copy is short website-only language) #medium #legal

## Features to build
- [x] Wire Hero video modal to a real embed/file instead of "Corporate video coming soon" (`components/sections/Hero.tsx`) #medium #homepage
- [x] Downloads WhatsApp datasheet request workflow #medium
- [ ] Optional email/API form endpoint so enquiries are stored if WhatsApp is unavailable #low #forms
- [x] Dedicated About and Contact pages linked from nav/footer #low #nav
- [x] Sticky mobile Call / WhatsApp CTA bar #medium #mobile
- [ ] Recreate `app/projects/[slug]/page.tsx` when first case study is added (static export needs generateStaticParams) #low

## Content
- [ ] Privacy policy delivery section still describes email/form-endpoint behaviour; rewrite to match WhatsApp quote flow #medium
- [x] `/downloads` clarifies WhatsApp datasheet request (no PDFs in repo yet) #medium
- [ ] Careers page has no open roles — add listings or an explicit "no openings" statement the client approves #low
- [x] Stronger Bengaluru / R.T. Nagar / UPS service internal links between product, service, FAQ, area, and home #medium #seo
- [ ] Client name strings vary ("Teamtronix", "Team Tech", "Team Tronix") — confirm legal display name for nav, schema `alternateName`, and footer #medium

## Performance & accessibility
- [ ] Convert homepage PNG product/hero images to WebP/AVIF and set explicit width/height + lazy-load below the fold #medium #performance
- [ ] Audit colour contrast for red brand text on light/dark themes in `app/globals.css` #medium #a11y
- [ ] Verify keyboard focus states on nav, theme toggle, form controls, and WhatsApp CTA #medium #a11y #mobile
- [ ] Client ticker images missing dimensions can contribute to CLS on `/` #medium #homepage
- [ ] Three Google fonts loaded in `app/layout.tsx` (Bebas Neue, DM Sans, JetBrains Mono) — confirm all are needed for LCP weight #low #performance

## Launch & infra
- [x] Site is live on Plesk (`teamtronix.in`) via GitHub Actions FTP; remove/replace leftover Vercel preview dependencies (`previewImage`, any docs assuming Vercel hosting) #high
- [ ] Turn off `dangerous-clean-slate: true` in `.github/workflows/deploy.yml` — it wipes `httpdocs` mid-deploy and takes the site offline for minutes #high #infra
- [ ] Document FTP/GitHub Actions secrets rotation and who owns Plesk + DNS (`ns7/ns8.internetworldwide.in`) #medium
- [ ] Ensure Let's Encrypt auto-renew stays enabled ("Keep websites secured") in Plesk SSL settings #medium
- [ ] Do not use Plesk Git "Deploy now" to `\httpdocs` — it would overwrite the static `out/` deploy with source #high #infra
- [ ] Add uptime monitoring on `https://teamtronix.in/` #low
- [ ] Confirm backups for `httpdocs` / Plesk webspace #low
- [ ] Quote "form" has no server email delivery — only WhatsApp deep link; document that for the client #medium #forms
