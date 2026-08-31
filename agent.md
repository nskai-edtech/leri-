# Agent notes

Working memory for Claude Code sessions on this repo. Read this instead of
replaying old conversation; `git log` has the full history of what shipped.
Keep under 100 lines — cut, don't append.

## Current state

24 pages built from the `project/` prototypes. `npm run build` passes: 27
static routes (24 pages + robots/sitemap/llms.txt). Not deployed anywhere.
**main is 1 commit ahead of origin, plus ~8 uncommitted files** — the SEO and
structured-data work below, all reviewed by Ifeanyi, none committed.

Uncommitted: `lib/site.ts` (SITE_URL + ORG), `app/robots.ts`, `app/sitemap.ts`
(both nav-derived), `components/JsonLd.tsx`, Organization JSON-LD on
`app/layout.tsx`, SoftwareApplication in `components/ProductPage.tsx` (covers
all 11 product pages), `app/llms.txt/route.ts`, and `app/contact/page.tsx`.

## Decisions that aren't obvious from the code

- **No postal address anywhere, deliberately.** The registered Nigerian
  address is residential. Contact page lists four city names only — London,
  Lagos, Addis Ababa, Nairobi — with no street or hours, because those are
  checkable claims. Same reason `areaServed` in the JSON-LD carries cities
  and no address. It replaced two invented offices (NYC, London).
- **No offers/ratings in SoftwareApplication** — would be fabricated.
- **One inbox, `contact@nskai.org`** (parent company, hosted on `nskai.org`
  at Namecheap), with per-topic mailto subject lines instead of four boxes.
- **Meta descriptions and OG tags skipped** — Ifeanyi's call, not needed.
- `leri.cx` bought on Namecheap, no DNS records on it, no mail.

## Deploy plan (approved; Vercel and Netlify both full, Cloudflare, free)

All 27 routes are static, so visitors never invoke the Worker — Workers free
gives 100k req/day and **10ms CPU**, which SSR would blow but static assets
don't count against. The Worker runs only for form submits later, and
Cloudflare bills CPU not wall-clock, so DB/API waiting is free.

- **P0** Commit in 3 parts (contact page / SEO plumbing / structured data),
  push. Nothing deploys that isn't in git first.
- **P1** In `app/`: install `@opennextjs/cloudflare` + `wrangler` (dev). Add
  `wrangler.jsonc` (`nodejs_compat`, `global_fetch_strictly_public`, compat
  date >= 2024-09-23), `open-next.config.ts` (R2 stays commented — it costs),
  `public/_headers`. Strip any `export const runtime = "edge"`.
- **P2 GO/NO-GO** `opennextjs-cloudflare build`, check bundle vs the **3MB
  Worker limit** — the likeliest failure. Then `preview` locally. Fallback if
  oversized: static export + forms in a separate small Worker. Still free.
- **P3** Ifeanyi creates a free Cloudflare account, runs `wrangler login`
  himself (interactive, needs his credentials).
- **P4** `opennextjs-cloudflare deploy`. Verify everything on the
  `*.workers.dev` URL *before* touching the domain.
- **P5** Namecheap: Domain List > Manage > Domain tab > Nameservers dropdown
  > Custom DNS > paste Cloudflare's two > green checkmark. A Worker custom
  domain needs the zone on Cloudflare. Wait for propagation (usually <1hr,
  officially up to 48). Then Workers & Pages > Worker > Settings > Domains &
  Routes > Add > Custom Domain. Cloudflare issues DNS + TLS itself.
- **P6** www redirect, verify HTTPS, submit sitemap to Search Console.

Open: manual `wrangler deploy` (assumed) vs connecting the GitHub repo for
push-to-deploy. Node is 20.19.3 — fine for Wrangler; check OpenNext wants it.

## Queue after deploy

1. **Forms.** Contact/Careers/EmailCapture fake a "sent" state and discard
   input. Neon DB and Resend account both exist. Plan:
   `@neondatabase/serverless`, a `submissions` table, one Server Action per
   form (works without JS), Resend notification to contact@nskai.org on
   insert. Needs `DATABASE_URL` + `RESEND_API_KEY` in `.env.local` and in the
   Cloudflare env. This is why P1 picks a host with a server runtime.
2. **WebMCP** — last, on purpose. Verified 2026-08-27: W3C Community Group
   draft, NOT standards-track; Chrome-only origin trial (149→156); Edge
   support claimed but absent from Microsoft's release notes. Renamed
   `navigator.modelContext` -> `document.modelContext` Aug 2026, so most
   tutorials are already wrong. Good credibility fit, near-zero reach today.

Known wart: `lib/nav.ts` has the Company menu overview and its About link
both pointing at `/about`. sitemap and llms.txt both dedupe around it.

## Log

Dated, one line, newest last. Cap 15 — fold the oldest 5 into a summary line.

- 2026-08-21: Created agent.md as the standing progress file for this repo.
- 2026-08-27: Audited repo — all 24 prototype pages built, build passes, 1 commit unpushed.
- 2026-08-27: Replaced dead @leri.example addresses with contact@nskai.org mailto links.
- 2026-08-27: Researched WebMCP maturity; queued it last.
- 2026-08-31: Contact page — four city names, no addresses (registered one is residential).
- 2026-08-31: Built robots/sitemap/site.ts, JSON-LD (Organization + SoftwareApplication), llms.txt.
- 2026-08-31: Vercel and Netlify both full; chose Cloudflare Workers via OpenNext. Plan above.
