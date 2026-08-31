# Agent notes

Working memory for Claude Code sessions on this repo. Read this instead of
replaying old conversation; `git log` has the full history of what shipped.
Keep under 100 lines — cut, don't append.

## Current state

**The site is live and current at https://leri.nsukka-ai.workers.dev**
(Cloudflare Workers, free plan). Everything through 2026-08-31 is committed,
pushed, and deployed; working tree clean. 24 pages + robots/sitemap/llms.txt.
Bundle 1002KB of the 3MB Worker limit, 29ms cold start.

Verified live: no email addresses anywhere, four city names on /contact, all
six form fields carry `name` attributes, llms.txt points at the demo form.

**Ifeanyi has further changes he wants to make — ask what they are before
assuming the queue below is the next thing.**

**The one thing left to finish the form:** `RESEND_API_KEY` is not set on the
Worker, so submissions correctly show an error instead of sending. Ifeanyi
must run this himself (it prompts for typed input, which a session cannot
provide); it takes effect immediately, no redeploy:

    cd app && npx wrangler secret put RESEND_API_KEY

## Environment gotchas (all cost time this session — don't rediscover)

- **Node 22 required.** Wrangler refuses to run on 20. `.nvmrc` pins it, but
  nvm must be loaded per shell:
  `export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 22`
- **Wrangler needs the sandbox disabled.** Node `fetch` reaches
  api.cloudflare.com fine from a sandboxed shell but Wrangler's own requests
  fail with a bare `fetch failed`. Deploys work with sandbox off.
- **OAuth expires within hours** and cannot refresh non-interactively. Re-run
  `npx wrangler login` in the background and hand Ifeanyi the fresh URL to
  click. A CLOUDFLARE_API_TOKEN would end this permanently — recommended, not
  yet done.
- **Exit code 0 lies** when a command is piped to `tail` — the status is
  `tail`'s. Write build output to a file and read it.
- `next/font` fetches Google Fonts at build time and intermittently fails.
  Retrying works. Worth switching to `next/font/local` eventually.

## Decisions that aren't obvious from the code

- **No public email anywhere, and no postal address.** The registered
  Nigerian address is residential; the contact page lists four city names
  only (London, Lagos, Addis Ababa, Nairobi) with no street or hours. The
  four `contact@nskai.org` cards were cut too — an inbox nobody watches is
  worse than none. The demo form is the only route in, so `ContactPoint` in
  the JSON-LD carries just the `/contact` URL.
- **The contact form was decorative** and told every visitor an engineer
  would reply while discarding their details. Now a Server Action
  (`app/app/contact/actions.ts`) emailing via Resend to
  **nsukka.ai@gmail.com**. `action={formAction}` not `onSubmit`, so it works
  without JS. Errors are shown, never a false thank-you.
- **No offers/ratings in SoftwareApplication** — would be fabricated.
- **No Neon DB yet.** Email alone solves "the request should reach us"; an
  inbox is already a record. Add a DB when submissions need querying.
- `leri.cx` bought on Namecheap. No DNS records, no mail. `contact@nskai.org`
  is on the separate `nskai.org` domain, so moving leri.cx nameservers to
  Cloudflare cannot break it.

## Queue (not yet approved — Ifeanyi has his own changes first)

1. **CLOUDFLARE_API_TOKEN** at dash.cloudflare.com/profile/api-tokens, "Edit
   Cloudflare Workers" template. Ends the OAuth expiry interruptions before
   Phase 5 adds more Cloudflare commands.
2. **Phase 5 — point leri.cx at the Worker.** Namecheap: Domain List >
   Manage > Domain tab > Nameservers > Custom DNS > paste Cloudflare's two >
   green checkmark. A Worker custom domain needs the zone on Cloudflare.
   Propagation usually <1hr, officially up to 48. Then Workers & Pages >
   leri > Settings > Domains & Routes > Add > Custom Domain; Cloudflare
   issues DNS + TLS itself. Then disable the workers.dev URL so the site is
   not reachable at two addresses (splits search ranking).
3. **Verify leri.cx in Resend** — needs DNS records, so easiest right after
   Phase 5. Until then mail sends from `onboarding@resend.dev` and can only
   reach the Resend account owner.
4. **Phase 6** — www redirect, verify HTTPS, submit sitemap to Search
   Console. Then Cloudflare Email Routing (free) if @leri.cx mail is wanted.

Deliberately skipped: meta descriptions and OG tags (Ifeanyi's call).
Deliberately last: WebMCP — W3C Community Group draft, not standards-track,
Chrome-only origin trial, API renamed Aug 2026 so most tutorials are wrong.

Known wart: `lib/nav.ts` points the Company menu overview and its About link
both at `/about`. sitemap and llms.txt both dedupe around it.

## Log

Dated, one line, newest last. Cap 15 — fold the oldest 5 into a summary line.

- 2026-08-21 to 08-27: Created agent.md; audited repo (24 pages, build clean); replaced dead @leri.example addresses; researched WebMCP and queued it last.
- 2026-08-31: Contact page — four city names, no addresses (registered one is residential).
- 2026-08-31: Built robots/sitemap/site.ts, JSON-LD (Organization + SoftwareApplication), llms.txt.
- 2026-08-31: Vercel and Netlify full; chose Cloudflare Workers via OpenNext. Node 22 via nvm.
- 2026-08-31: Deployed live to leri.nsukka-ai.workers.dev. Bundle 958KB of the 3MB limit.
- 2026-08-31: Cut all public emails; rewrote the fake contact form as a real Resend Server Action.
- 2026-08-31: Found app/.gitignore had no .env patterns — would have committed the API key. Fixed.
- 2026-08-31: OAuth token expired; redeploy of the form rewrite still pending a credential.
- 2026-08-31: Re-authed, deployed the form rewrite, verified live. Only the Resend secret is left.
