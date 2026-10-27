# Ramees Sahlu | The Paper Edition

An e-ink-inspired Angular portfolio: warm paper, monochrome typography, chapter navigation, and adjustable reading preferences.

## Development

Use Node.js 24 LTS (24.15.0 or newer). Angular also supports Node.js ^22.22.3 or >=26.0.0.

On Windows, install the full Node.js LTS distribution, which includes npm, and ensure its directory is on PATH. Restart PowerShell and any editor that was open during installation. Check `node --version` and `npm --version` before running the commands below.

```sh
npm ci
npm start
```

Open http://localhost:4200. Routes are /about, /experience, /blogs, and /contact. The old /projects URL redirects to /experience.

## Build and checks

```sh
npm run build
npm test
```

The production site is generated in `dist/me/browser`. `netlify.toml` sets the build command, publish directory, and Node version for Netlify. Angular copies `src/_redirects` into the published folder, where its `/* /index.html 200` rewrite lets direct links and page refreshes reach the Angular router. Commit and push these files, then redeploy on Netlify to apply the routing fix. For manual uploads, deploy the contents of `dist/me/browser`, including `_redirects`.

The app uses Angular 22.2, standalone components, lazy chapter routes, zoneless change detection, and Vitest. Node and TypeScript versions follow Angular's compatibility requirements: https://angular.dev/reference/versions.

## Content and appearance

- Introduction: `src/app/components/home/home.component.html`
- Professional experience and volunteering: `src/app/models/experience.model.ts`
- Timeline layout: `src/app/components/experience/experience.component.html`
- Blog posts: `src/app/models/blogs.model.ts`
- Contact links: `src/app/components/contact/contact.component.html`
- Logo and favicon source: `src/assets/logo.svg`
- Shared paper theme: `src/styles.scss`
- Reader shell: `src/app/app.component.scss`

The Aa control adjusts text size and contrast; the paper control switches warm/cool tone. Preferences are stored locally in the visitor's browser. The prototype has been integrated into the app; no temporary site is needed.
