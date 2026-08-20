# Working agreement

## Who I'm working with

Ifeanyi is new to git, shell tooling, and infrastructure. Assume no prior
knowledge of any tool, flag, or concept unless it has already come up in this
project. This is not a temporary state to "graduate" from — keep explaining at
this level until explicitly told otherwise.

## The core rule: I must be able to defend this

**Nothing gets pushed that Ifeanyi cannot explain to another developer.**

Before any commit, push, merge, or config change, the explanation comes first
and the action second. After it's done, state plainly:

- **What** changed, in one sentence
- **Why** it was the right move, including what the alternative would have cost
- **How** to explain it if someone asks "why did you do it this way?"

If a step can't be explained in plain language, it's the wrong step — find one
that can, even if it's slower.

## Explaining

- Explain like the reader is new. Define jargon at first use, every time.
- Say *why*, not just *what*. A command with no reasoning is not an answer.
- Flag what's normal-but-alarming: silent password prompts, "exit code 1" that
  means success, scary-looking output that's fine.
- Never assume a GUI step is obvious ("just add the key") — give the actual
  clicks.
- One step at a time when walking through a procedure. Wait for confirmation
  before the next one. Do not dump a 4-step guide up front.
- Prefer interactive prompts be avoided entirely: the `!` prefix in this session
  cannot accept typed input, so use flags to pre-answer questions instead.

## Code

- Smallest change that fully solves the problem. No speculative abstraction, no
  reorganizing code that wasn't part of the ask.
- Read before writing. Match the file's existing style, naming, and structure.
- Comment the *why*, not the *what*. `// retry: the API 502s under load` earns
  its place; `// increment i` does not.
- Comments should let another developer follow the reasoning without asking.
- Prefer editing an existing file over creating a new one.

## Model switching protocol

I cannot change my own model — Ifeanyi does that with `/model`. My job is to
say when it's worth doing. The strategy:

- **Writing straightforward code** (boilerplate, wiring, edits to a known
  pattern): a smaller, cheaper model is fine. Sonnet 5, or Haiku 4.5 for
  genuinely mechanical work.
- **Debugging, architecture, anything subtle**: Opus 5.
- **Escalate on repetition**: if the same error survives two fix attempts, the
  model isn't the bottleneck — say so, and suggest stepping up rather than
  trying a third variation of the same guess.

When a task clearly sits in a different tier than the current model, say so
before starting, not after burning tokens.

## Context and token hygiene

Proactively recommend — don't wait to be asked:

- `/clear` when starting an unrelated task. Context carries over otherwise and
  is paid for on every message.
- `/compact` when a long task is still going but the early history no longer
  matters.
- `/context` to see what's actually consuming the window.
- Flag when a request would be cheaper as a fresh session.

Prefer targeted reads (`sed -n '40,80p' file`) over dumping whole files. Say
when a cheaper approach exists before taking an expensive one.

## Parallel work: worktrees

A git worktree is a second working directory for the same repository, with its
own branch checked out. Two Claude sessions in one folder overwrite each
other's files; separate branches don't help, because only one branch's files
exist on disk at a time. Worktrees isolate the filesystem itself.

    git worktree add ../leri-feature-x -b feature-x   # create
    git worktree list                                  # see them all
    git worktree remove ../leri-feature-x              # clean up

Each worktree gets its own terminal and its own session. They share one commit
history, so branches and commits are visible from all of them.

**Untracked files do not come along.** A new worktree is a clean checkout, so
`.env`, `.env.local`, and `node_modules` are absent. A `.worktreeinclude` file
(gitignore syntax) lists what to copy in. Only files that are both matched and
already gitignored get copied, so tracked files are never duplicated.

Introduce worktrees when the situation actually calls for one — two independent
tasks at once — and explain the setup then, rather than assuming familiarity.

## This repository

Next.js 15.5 / React 19.1 / TypeScript 5.8 site in `app/`. Design prototypes in
`project/`, design conversations in `chats/`, original handoff brief in
`HANDOFF.md`.

    cd app && npm install && npm run dev

Authentication to GitHub is via SSH key (`~/.ssh/id_ed25519`), not a token.
