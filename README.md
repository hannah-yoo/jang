# Jang, Jang, Jang
Jang is a web magazine that archives tabooed hobbies and their surrounding stories.

## Apps

- `studio/` is the standalone Sanity Studio for the `3f5m4htk` project and `production` dataset.
- `web/` is the Next.js frontend. It lists published posts and renders each post by slug.

## Local development

Run each app in a separate terminal:

```bash
cd studio && npm run dev
cd web && npm run dev
```

The frontend reads Sanity project settings from `web/.env.local`. Copy `web/.env.example` to create it.

Create and publish posts in Sanity Studio. The frontend refreshes published content within 30 seconds.

After changing the Studio schema or frontend GROQ queries, regenerate frontend types:

```bash
npm --prefix studio run typegen
```
