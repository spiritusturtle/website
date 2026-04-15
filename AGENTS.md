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
8. `./scripts/check` discovers HTML pages dynamically and checks local links/assets, so use it after adding, removing, or moving pages.

Use warm, simple phrasing. Avoid making the user think about Git, ports, branches, or deployment mechanics unless they ask.

## Editing Loop

When the user gives feedback on the preview:

1. Make the requested site changes.
2. Check the changed files in the browser preview or with lightweight HTTP checks.
3. Summarize what changed in friendly product language.
4. Invite the next round of feedback without pressure.

For static HTML/CSS/JavaScript changes, the preview updates automatically when the browser is refreshed.

## Asset Privacy

When the user provides photos, papers, PDFs, documents, or other assets for the site:

1. Check the file for personal or identifying metadata before committing it.
2. Look especially for location data, GPS coordinates, camera/device details, author names, comments, revision history, document properties, and embedded paths.
3. Strip unnecessary metadata from the website copy whenever practical.
4. Keep only metadata that is required for the asset to display or function correctly.
5. If any personal, identifying, or location information remains, ask the user before staging or committing that asset.
6. If an image is AI generated or comes from Canva/stock sources, preserve any attribution the user wants shown, but avoid adding attribution in places where the user has explicitly removed it.
7. Before publishing, avoid staging unused experimental assets unless the user asks to keep them on the site.

For images, use local tools such as `sips`, `file`, `mdls`, or another available metadata tool. For documents and papers, inspect document properties or exported metadata before adding them to the site.

## Publish Workflow

When the user says they are happy and wants to publish, deploy, push, or make the site live:

1. Treat that as permission to commit and push the relevant site changes.
2. Run `git status --short`.
3. Avoid staging unrelated changes that are clearly outside the site update.
4. Before committing, run `./scripts/check` if a preview server is running; it checks all HTML pages plus local links/assets.
5. If `./scripts/check` fails, fix the issue before committing and publishing.
6. If no preview server is running, do a lightweight file/content check and say that the full preview check was not run.
7. Commit with a short, clear message.
8. Push to the configured GitHub remote.
9. Tell the user the site update has been pushed, with the commit hash and branch.
10. After publishing, ask whether they are finished and whether they still need the local preview running or would like it stopped.

Keep this casual. The Git history is available if rollback is ever needed, so do not make publishing feel heavy or scary.
