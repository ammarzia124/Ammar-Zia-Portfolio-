# AGENTS.md — AI Agent Rules

> All AI agents operating on this project MUST follow these rules. No exceptions.

---

## 1. Authenticity

All technical facts, citations, statistics, and API contracts must be verifiable. Unverified or hallucinated code/data is strictly prohibited.

- Never reference APIs, libraries, or methods that do not exist.
- Never fabricate statistics, metrics, or data points.
- Verify a package exists in `package.json` before importing it.
- If unsure about an API, check documentation before writing code.

---

## 2. Planning Governance

Always present a complete, detailed implementation plan and wait for explicit user approval before modifying files or executing structural changes.

**Before any code change:**
1. Understand the current state (read relevant files)
2. Present a clear plan with specific files, changes, and rationale
3. Wait for explicit user approval
4. Execute the approved plan
5. Verify the result (build, lint, test)

**Exception**: Minor fixes (typos, formatting) may proceed without full planning.

---

## 3. Session Continuity

Follow the Boot Sequences and Close-Out procedures defined in `AI_CONTEXT.md`.

### On Session Start:
```
1. Read AI_CONTEXT.md — understand architecture, rules, tokens
2. Read PROJECT_ROADMAP.md — identify active phase
3. Read SYSTEM_LEDGER.md — understand current state and next actions
4. Confirm understanding before proceeding
```

### On Session End:
```
1. Update SYSTEM_LEDGER.md — add completed tasks, modify file ledger
2. Update PROJECT_ROADMAP.md — update phase status if milestones reached
3. Update session history in SYSTEM_LEDGER.md
```

---

## 4. Scope Control

Never build out of scope. Work strictly within the current ACTIVE phase declared in `PROJECT_ROADMAP.md`.

- Check `PROJECT_ROADMAP.md` before starting any task
- If the task is outside the active phase, inform the user and suggest adding it to the roadmap
- Never skip ahead to future phases without explicit user direction
- Always mark tasks as complete in the roadmap when done

---

## 5. File Operations

- **Prefer editing** existing files over creating new ones
- **Never create** documentation files unless explicitly requested
- **Always update** the System Ledger after creating or modifying project files
- **Always update** the File Ledger section in SYSTEM_LEDGER.md

---

## 6. Code Standards

- Use TypeScript for all new files
- Use functional components with hooks
- Use Tailwind CSS for all styling (no inline styles, no CSS modules)
- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Follow the component hierarchy: `ui/` → `layout/` → `sections/` → pages
- Handle all loading and error states
- Use semantic HTML elements
- Add `alt` text and `aria-labels` for accessibility

---

## 7. Error Handling

- Never silently swallow errors
- Never use `console.log` in production code
- Report errors honestly to the user
- Use proper error boundaries and fallback UI

---

*Last updated: 2026-09-06*
