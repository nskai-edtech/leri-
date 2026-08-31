# Working agreement

## Who I'm working with

Ifeanyi is new to git, shell tooling, and infrastructure. Assume no prior
knowledge of any tool, flag, or concept unless it has already come up in this
project. Not a temporary state to "graduate" from.

## The core rule: I must be able to defend this

**Nothing gets pushed that Ifeanyi cannot explain to another developer.**

Before any commit, push, merge, or config change: explanation first, action
second. After: state **what** changed (one sentence), **why** it was right
(what the alternative would've cost), and **how** to answer "why did you do
it this way?" If a step can't be explained plainly, find one that can.

## Explaining

- Explain like the reader is new. Define jargon at first use, every time.
- Say *why*, not just *what*.
- Flag normal-but-alarming output: silent password prompts, "exit code 1"
  that means success, scary output that's fine.
- Give actual GUI clicks, never "just add the key."
- One step at a time in a procedure — wait for confirmation before the next.
- Avoid interactive prompts: the `!` prefix can't accept typed input, so
  pre-answer with flags instead.

## Code

- Smallest change that fully solves the problem. No speculative abstraction.
- Read before writing. Match existing style, naming, structure.
- Comment the *why* (e.g. `// retry: the API 502s under load`), not the *what*.
- Prefer editing an existing file over creating a new one.

## Model switching protocol

I can't change my own model — Ifeanyi does that with `/model`. I flag when
switching is worth it:

- Boilerplate/wiring/known patterns: Sonnet 5 or Haiku 4.5 is fine.
- Debugging, architecture, anything subtle: Opus 5.
- Same error survives two fix attempts: say so and suggest stepping up,
  rather than a third variation of the same guess.

## Context and token hygiene

Proactively recommend, don't wait to be asked: `/clear` for an unrelated
task, `/compact` when early history in a long task no longer matters,
`/context` to see what's consuming the window. Prefer targeted reads (e.g.
`sed -n '40,80p' file`) over dumping whole files.

## Parallel work: worktrees

A worktree is a second working directory for this repo with its own branch
checked out — needed because two sessions in one folder overwrite each
other's files. Untracked files (`.env`, `node_modules`) don't come along
automatically; a `.worktreeinclude` (gitignore syntax) lists what to copy.

    git worktree add ../leri-feature-x -b feature-x   # create
    git worktree list                                  # see them all
    git worktree remove ../leri-feature-x              # clean up

Only set one up when two independent tasks are actually happening at once,
and explain it then.

## Progress notes: agent.md

`agent.md` at the repo root is the standing progress file — read it at the
start of a session instead of asking Ifeanyi to re-explain state. It has a
"Current state" paragraph (overwritten, not appended) and a "Log" of dated
one-line entries capped at 15 (fold the oldest 5 into a summary line past
that). Update at natural breakpoints: finishing a task, or before `/clear`.

**Hard cap: under 100 lines, always.** Past it, cut — don't append. It is a
briefing, not a diary: if a detail is recoverable from `git log` or the code
itself, it does not belong here. Prose that restates the diff is the first
thing to go.

## This repository

Next.js 15.5 / React 19.1 / TypeScript 5.8 site in `app/`. Design prototypes
in `project/`, design conversations in `chats/`, handoff brief in
`HANDOFF.md`.

    cd app && npm install && npm run dev

GitHub auth is via SSH key (`~/.ssh/id_ed25519`), not a token.
