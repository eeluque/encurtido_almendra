# Dependency security overrides

Run `npm ci`, `npm audit`, `npm run lint`, `npx tsc --noEmit`, and
`npm run build` when changing dependencies. Run
`node --test scripts/dependency-smoke.test.mjs` to check the overridden APIs.

The overrides in `package.json` address these upstream dependency constraints:

- `@next/eslint-plugin-next` uses `fast-glob`, which brings in vulnerable
  `braces` (GHSA-vfj7-8cjw-p6xm). No patched braces release was available on
  October 17, 2026. Replace only this plugin's `fast-glob` with `tinyglobby`
  0.2.17, which supports its `globSync(pattern, { onlyDirectories: true })`
  call without depending on braces. This is an API substitution, so review
  the plugin's glob usage and rerun the smoke tests before upgrading it.
- `@esbuild-kit/core-utils`, pulled in by Drizzle Kit, pins vulnerable esbuild
  0.18.x (GHSA-67mh-4wv8-2f99). Resolve it to the project's direct esbuild
  version using `$esbuild`.
- `@tailwindcss/typography` pins selector parser 6.0.10. Use the patched
  `postcss-selector-parser` 7.1.6 (GHSA-rj75-hqrm-r3gf).

Remove each override when its parent package ships a compatible secure
dependency. Avoid `npm audit fix --force`: its suggested Next.js lint downgrade
to 14 is incompatible with this project's Next.js 16 flat ESLint configuration.

Drizzle Kit stays at 0.31.11 to support the existing `dialect` and
`dbCredentials.url` configuration. React type packages match React 19.
