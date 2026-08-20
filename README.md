# leri-

Customer service agent Product.

Leri is an AI customer service agent — voice, chat and email channels over one
shared policy set, with tooling to build, test, optimize and monitor it.

## Repository layout

- `app/` — the Next.js site (App Router, TypeScript)
- `project/` — the original HTML/CSS prototypes exported from Claude Design,
  including the `_ds/nocturne-*` design system the pages are built against
- `chats/` — design conversation transcripts, kept for intent and context
- `HANDOFF.md` — the original Claude Design handoff brief

## Running the site

```bash
cd app
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Stack

Next.js 15.5, React 19.1, TypeScript 5.8.

## Site structure

- **Products** — Voice, Chat, Email; Assist, Playbooks, Integrations;
  Experiments, Testing & QA; Insights & reporting, Monitor, Suggestions
- **Industries** — Retail, Travel & hospitality, Technology, Health,
  Financial services, Media, Telecommunications
- **Company** — About, Careers, Contact

Shared navigation and copy live in `app/lib/` (`nav.ts`, `home-content.ts`,
`tokens.ts`).
