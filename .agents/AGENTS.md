# Workspace Rules

- **Do NOT run `pnpm build` or `next build` for verification.** Running production build overwrites `.next` and breaks the active dev server (`pnpm dev`).
- **Use lightweight verification commands instead:** Use `pnpm lint`, `pnpm format:check`, or `pnpm exec tsc --noEmit` to verify code changes.
