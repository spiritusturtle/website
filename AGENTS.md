# AGENTS.md

## Site Workflow

This is a static HTML/CSS/JavaScript website for a non-technical user. Keep the interaction friendly, calm, and easy to follow.

When the user asks to preview, improve, edit, add pages to, or work interactively on the site:

1. Start or reuse a local preview server from the repository root.
2. Prefer `./scripts/preview`; if unavailable, run `python3 -m http.server 8000`.
3. If port 8000 is busy, try 8001 and nearby ports.
4. Give the user the preview URL in plain language.
5. Keep the server running while making edits.
6. After edits, tell the user they can refresh the browser to see the update.
7. Verify changed pages with `curl -I` or `./scripts/check` when available.

Use warm, simple phrasing. Avoid making the user think about Git, ports, branches, or deployment mechanics unless they ask.

## Editing Loop

When the user gives feedback on the preview:

1. Make the requested site changes.
2. Check the changed files in the browser preview or with lightweight HTTP checks.
3. Summarize what changed in friendly product language.
4. Invite the next round of feedback without pressure.

For static HTML/CSS/JavaScript changes, the preview updates automatically when the browser is refreshed.

## Publish Workflow

When the user says they are happy and wants to publish, deploy, push, or make the site live:

1. Treat that as permission to commit and push the relevant site changes.
2. Run `git status --short`.
3. Avoid staging unrelated changes that are clearly outside the site update.
4. Run `./scripts/check` if a preview server is running, or do a lightweight file/content check if it is not.
5. Commit with a short, clear message.
6. Push to the configured GitHub remote.
7. Tell the user the site update has been pushed, with the commit hash and branch.

Keep this casual. The Git history is available if rollback is ever needed, so do not make publishing feel heavy or scary.
