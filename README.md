# Portfolio (Next.js static export)

A simple portfolio built with Next.js (App Router) that exports to static HTML/CSS/JS, making it friendly for GitHub Pages or any static host.

## Local development

```bash
npm install
npm run dev
```

## Production build (static)

```bash
# If you publish to a repo path on GitHub Pages, set the base path first:
# export NEXT_PUBLIC_BASE_PATH="/your-repo-name"

npm run build
npm run start   # serves the pre-rendered build locally
```

The static output lives in `out/` after `npm run build`.

## Deploying to GitHub Pages

1) If you are publishing to `https://<username>.github.io/<repo>`, set the base path:
```bash
export NEXT_PUBLIC_BASE_PATH="/<repo>"
npm run build
```
2) Push the repo and publish the `out/` folder (e.g., with a GH Action or by copying it to the `gh-pages` branch).
3) For a custom domain or root GitHub Pages site (`<username>.github.io`), you can skip `NEXT_PUBLIC_BASE_PATH`.

## Customizing

- Update the hero, projects, and experience data in `src/app/page.tsx`.
- Adjust colors and spacing in `src/app/globals.css`.
- Set metadata (title/description) in `src/app/layout.tsx`.