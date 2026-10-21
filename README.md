# Jang, Jang, Jang
Jang is a web magazine that archives tabooed hobbies and their surrounding stories.

## Apps

- `studio/` is the standalone Sanity Studio for the `3f5m4htk` project and `production` dataset.
- `web/` is the statically exported Next.js frontend. It contains the experimental magazine homepage and post routes.
- The hosted Studio is available at [jang.sanity.studio](https://jang.sanity.studio).
- The homepage uses a Yale School of Art-inspired experimental layout with placeholder content and locally hosted Pyeojin Gothic. The font license is in `web/public/fonts/OFL.txt`.
- GitHub Actions deploys the site to GitHub Pages at `https://hannah-yoo.github.io/jang/` when changes reach `main`.

Enable deployment once in GitHub: open **Settings → Pages** and set the build source to **GitHub Actions**. Do not select `main` as a branch source.

## Local development

Run each app in a separate terminal:

```bash
cd studio && npm run dev
cd web && npm run dev
```

The frontend reads Sanity project settings from `web/.env.local`. Copy `web/.env.example` to create it.

Create and publish posts in Sanity Studio. GitHub Pages rebuilds on pushes to `main`; published Sanity content appears on the next build. Run the workflow manually to publish content changes without a code push.

After changing the Studio schema or frontend GROQ queries, regenerate frontend types:

```bash
npm --prefix studio run typegen
```
