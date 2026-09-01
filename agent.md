# Agent notes

Working memory for sessions on this repo — read instead of replaying old
conversation; `git log` has what shipped. Keep under 100 lines: cut, don't append.

## Current state

**The site is live and current at https://leri.nsukka-ai.workers.dev**
(Cloudflare Workers, free plan). 24 pages + robots/sitemap/llms.txt; bundle
1002KB of the 3MB Worker limit, 29ms cold start.

**The demo form works end to end.** `RESEND_API_KEY` is set on the Worker
and a live submission was received at nsukka.ai@gmail.com on 2026-09-01.

**Pushed but not yet live:** the success-state rewrite (257fb6d). Ifeanyi runs
`npm run cf:deploy` himself — auto mode blocks both the sandbox-disabled command
Wrangler needs and any attempt by Claude to write .claude/settings.json to
permit it. Permission rule not added; Ifeanyi can add it via `/permissions`.

## Environment gotchas (all cost time this session — don't rediscover)

- **Node 22 required** (Wrangler refuses 20). `.nvmrc` pins it, but nvm loads
  per shell: `export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 22`
- **Wrangler needs the sandbox disabled.** Node `fetch` reaches
  api.cloudflare.com fine from a sandboxed shell but Wrangler's own requests
  fail with a bare `fetch failed`. Deploys work with sandbox off.
- **OAuth is no longer used** — CLOUDFLARE_API_TOKEN is in Ifeanyi's ~/.bashrc,
  so Wrangler needs no browser login. Claude's shell does not see it.
- **Exit code 0 lies** when a command is piped to `tail` — that is `tail`'s
  status. Write build output to a file and read it.
- `next/font` fetches Google Fonts at build time and intermittently fails;
  retrying works. Worth `next/font/local` eventually.

## Decisions that aren't obvious from the code

- **No public email or postal address anywhere.** The registered Nigerian
  address is residential, so contact lists four city names only. The
  `contact@nskai.org` cards went too — an unwatched inbox is worse than none.
  The form is the only route in; JSON-LD `ContactPoint` carries just `/contact`.
- **The form must never lie.** It was decorative, promising a reply while
  discarding the details. Now a Server Action emailing via Resend to
  nsukka.ai@gmail.com; `action={formAction}` not `onSubmit`, so it works without
  JS. Errors are shown, and the confirmation claims nothing untrue — notably it
  never says "check your spam", as the visitor is sent no mail.
- **No offers/ratings in SoftwareApplication** — would be fabricated.
- **No Neon DB yet.** An inbox is already a record; add a DB when submissions
  need querying.
- `leri.cx` had Namecheap's default records — a parking A/CNAME, 5 eforward MX
  and an SPF TXT for their free forwarding, none of it ever used. All deleted at
  import on 2026-09-02: broken MX would accept mail and silently drop it, while
  no MX bounces visibly. `contact@nskai.org` is on the separate `nskai.org`
  domain, so the nameserver move cannot touch it.

## To do

### Phase 0 — Ifeanyi's own changes
Not yet described. These come before anything below. Ask; don't assume.

### Phase A — Stop the credential interruptions — DONE 2026-09-01
- [x] CLOUDFLARE_API_TOKEN ("Edit Cloudflare Workers" scope) exported from
      Ifeanyi's `~/.bashrc`. Outside the repo, so it cannot be committed. Claude's
      shell does not inherit it, so deploys run from Ifeanyi's terminal.

### Phase B — Put the site on leri.cx
Sequential. Reversible: Namecheap stays the registrar and can point back.

- [x] 2026-09-02: leri.cx added to Cloudflare (free), imported records all
      deleted. Nameservers clara/drew.ns.cloudflare.com given to Namecheap;
      awaiting the flip from Pending Nameserver Update to Active.
- [ ] Cloudflare: Workers & Pages > leri > Settings > Domains & Routes > Add >
      Custom Domain. Cloudflare issues the DNS record and the TLS certificate.
- [ ] Disable the workers.dev URL — two addresses split search ranking.
- [ ] Add the www redirect and verify HTTPS.

### Phase C — Mail and search. Needs DNS on Cloudflare, so Phase B first.

- [ ] Verify leri.cx in Resend (adds DNS records), then swap `FROM` in
      `app/contact/actions.ts` to @leri.cx. Until then it sends from
      `onboarding@resend.dev`, which reaches only the Resend account owner.
- [ ] Submit the sitemap to Google Search Console.
- [ ] Optional: Cloudflare Email Routing (free) if @leri.cx mail is wanted.

### Not doing, on purpose
- Meta descriptions and OG tags — Ifeanyi's call.
- WebMCP — last. A W3C Community Group draft, not standards-track;
  Chrome-only origin trial; renamed Aug 2026, so most tutorials are wrong.

### Known wart
`lib/nav.ts` points the Company overview and its About link both at `/about`;
sitemap and llms.txt dedupe around it.

## Log

Dated, one line, newest last. Cap 15 — fold the oldest 5 into a summary.

- 2026-08-21 to 08-27: Created agent.md; audited repo (24 pages, build clean); replaced dead @leri.example addresses; researched WebMCP and queued it last.
- 2026-08-31: Addressless contact page; robots/sitemap/JSON-LD/llms.txt; chose Cloudflare Workers over full Vercel and Netlify and deployed live; cut all public emails and made the fake form a real Resend Server Action; fixed an app/.gitignore missing .env patterns that would have committed the API key.
- 2026-09-01: Resend secret set; live submission received. The form is real.
- 2026-09-01: Success now swaps the form for a confirmation panel; deploy pending.
