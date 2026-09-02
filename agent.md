# Agent notes

Working memory for sessions on this repo; `git log` has what shipped.
Keep under 100 lines: cut, don't append.

## Current state

**Live at https://leri.cx** (Cloudflare Workers, free plan) and still at
https://leri.nsukka-ai.workers.dev too. 24 pages + robots/sitemap/llms.txt;
1002KB of the 3MB Worker limit, 29ms cold start.

**The demo form works end to end.** `RESEND_API_KEY` is set on the Worker; a
live submission arrived at nsukka.ai@gmail.com on 2026-09-01.

**Pushed but not yet live:** the success-state rewrite (257fb6d), so leri.cx
serves the form without its confirmation panel. Token scope fixed 2026-09-02
(see gotchas) but **no deploy has yet succeeded with it** — the last try died on
the intermittent timeout below, before the upload. Retry freely; a failed deploy
changes nothing. Ifeanyi runs `npm run cf:deploy` himself: auto mode blocks the
sandbox-disabled command, and Claude's shell has no CLOUDFLARE_API_TOKEN.

## Environment gotchas (all cost time — don't rediscover)

- **Node 22 required** (Wrangler refuses 20); nvm loads per shell:
  `export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 22`
- **Wrangler needs the sandbox disabled** — its requests fail with a bare
  `fetch failed` otherwise, though plain Node `fetch` reaches Cloudflare fine.
- **`Workers R2 Storage` must be `Edit`, not `Read`** — assets go to R2 behind
  the scenes. The row sat at Read, so the list looked complete while deploys
  died at `assets-upload-session` with `Authentication error [10000]`, meaning
  *unauthorized*, not *unauthenticated*. Check the level, not just the row.
  "Super Administrator" describes Ifeanyi, not the token, and misleads.
- **A separate intermittent fault** hangs the pre-flight
  `GET workers/services/leri` until wrangler's hardcoded `timeout = 10000` (no
  env var raises it). Alternates with success, so just retry. Not bandwidth:
  that endpoint answered in ~0.5s from another shell mid-timeout. Possibly
  specific to the authenticated request — untested.
- **`dig` is not installed.** Check DNS with Cloudflare's DoH endpoint:
  `fetch("https://cloudflare-dns.com/dns-query?name=X&type=NS", {headers:{accept:"application/dns-json"}})`
- **Exit code 0 lies** when piped to `tail` — that is `tail`'s status. Write
  build output to a file and read it.
- `next/font` fetches Google Fonts at build time and intermittently fails;
  retrying works. Worth `next/font/local` eventually.

## Decisions that aren't obvious from the code

- **No public email or postal address anywhere.** The registered Nigerian
  address is residential, so contact lists four city names only; the
  `contact@nskai.org` cards went too — an unwatched inbox is worse than none.
  The form is the only route in; JSON-LD `ContactPoint` carries just `/contact`.
- **The form must never lie.** It was decorative, promising a reply while
  discarding the details. Now a Server Action emailing via Resend to
  nsukka.ai@gmail.com; `action={formAction}` not `onSubmit`, so it works without
  JS. Errors are shown, and the confirmation claims nothing untrue — notably it
  never says "check your spam", as the visitor is sent no mail.
- **No offers/ratings in the SoftwareApplication JSON-LD** — would be fabricated.
- **No Neon DB yet.** An inbox is a record; add one when submissions need query.
- `leri.cx`'s Namecheap defaults (parking A/CNAME, 5 eforward MX, SPF TXT, none
  used) were deleted at import: broken MX accepts mail and silently drops it,
  while no MX bounces visibly. `contact@nskai.org` is on `nskai.org`, untouched.

## To do

### Phase 0 — Ifeanyi's own changes: still undescribed as of 2026-09-02. Ask.
### Phase A — Credentials — DONE. CLOUDFLARE_API_TOKEN is exported from
Ifeanyi's `~/.bashrc`, outside the repo so it cannot be committed.
### Phase B — Put the site on leri.cx. Reversible: Namecheap is still the
registrar and can point back.
- [x] 2026-09-02: leri.cx on Cloudflare, records deleted, nameservers moved to
      clara/drew.ns.cloudflare.com, Active.
- [x] 2026-09-02: Custom Domain attached to the `leri` Worker; Cloudflare issued
      the DNS record and TLS cert, and https://leri.cx serves the real site. Cert
      issuance takes minutes and *times out* until it lands — not breakage.
- [ ] Deploy 257fb6d so leri.cx serves the success panel. Do this before the
      two below — one change at a time while the connection is flaky.
- [ ] Disable the workers.dev URL — two addresses split search ranking.
- [ ] Add the www redirect (`www.leri.cx` is currently ENOTFOUND) and verify.

### Phase C — Mail and search. Needs Phase B first.
- [ ] Verify leri.cx in Resend (adds DNS records), then swap `FROM` in
      `app/contact/actions.ts` to @leri.cx. Until then it sends from
      `onboarding@resend.dev`, which reaches only the Resend account owner.
- [ ] Submit the sitemap to Google Search Console.
- [ ] Optional: Cloudflare Email Routing (free) if @leri.cx mail is wanted.

### Not doing, on purpose
- Meta descriptions and OG tags — Ifeanyi's call.
- WebMCP — last. A W3C Community Group draft, not standards-track; Chrome-only
  origin trial; renamed Aug 2026, so most tutorials are wrong.

### Known wart: `lib/nav.ts` points Company overview and its About link at `/about`.

## Log — dated, one line, newest last. Cap 15; fold the oldest 5 into a summary.
- 2026-08-21 to 08-27: Created agent.md; audited the repo; replaced dead @leri.example addresses; researched WebMCP and queued it last.
- 2026-08-31: Addressless contact page; robots/sitemap/JSON-LD/llms.txt; chose Cloudflare Workers over full Vercel and Netlify and deployed live; cut all public emails and made the fake form a real Resend Server Action; fixed an app/.gitignore missing .env patterns that would have committed the API key.
- 2026-09-01: Resend secret set; live submission received. The form is real.
- 2026-09-01: Success now swaps the form for a confirmation panel; deploy pending.
- 2026-09-02: API token replaces OAuth; leri.cx on Cloudflare, Namecheap defaults deleted, nameservers switched.
- 2026-09-02: leri.cx live on HTTPS via Custom Domain. Token had R2 at Read not Edit, now fixed; 257fb6d still undeployed, last blocked by the intermittent pre-flight timeout.
