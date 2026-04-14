---
name: python-site-preview
description: Preview static websites locally with Python's built-in HTTP server. Use when the user asks to preview, serve, run, view, open, test, or locally inspect a static HTML/CSS/JavaScript site and no project-specific dev server is required, especially for repositories with index.html files and no package.json framework setup.
---

# Python Site Preview

## Overview

Use Python's standard library to serve a static site from the correct directory and give the user a local URL. Keep the server process alive when the user needs to interact with the preview.

## Workflow

1. Identify the site root:
   - Prefer the directory containing the relevant `index.html`.
   - For a whole static site, use the repository root when it contains `index.html`.
   - For a subpage-only preview, serve from the nearest common parent so relative links and assets resolve.

2. Choose a port:
   - Start with `8000`.
   - If it is busy, try `8001`, then the next nearby open port.
   - If the user requested a specific port, use that port unless it is unavailable.

3. Start the server in a long-running terminal session:

```bash
python3 -m http.server 8000
```

Run it with the working directory set to the site root. Do not background the process with shell tricks; keep the tool session open so it can be stopped or polled later.

4. Report the preview URL:

```text
http://localhost:8000/
```

For a specific page, include the path, for example `http://localhost:8000/blog/`.

## Port Check

When a port may already be in use, check it before starting the server:

```bash
lsof -i :8000
```

If the command returns a listener, choose another port. If `lsof` is unavailable, try starting the server and use the next port if Python reports that the address is already in use.

## Verification

After starting the server, verify the page responds before telling the user it is ready:

```bash
curl -I http://localhost:8000/
```

For a specific page, verify that path instead. A `200`, `301`, or `302` response is usually enough for a preview URL; investigate `404` or server errors before handing it back.

## When Not To Use

Use a project-specific dev command instead when the repo clearly depends on a framework or build tool, such as Vite, Next.js, Astro, Rails, Django, or a documented `npm run dev`. Python's server is best for static files that can be served as-is.
