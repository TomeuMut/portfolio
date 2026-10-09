# Portfolio · Bartomeu Mut Vidal

A multilingual professional portfolio for a Frontend Developer at OmniAccess growing toward Project Manager roles, building on project management and client communication experience at Refineria and IT2b. Built with Vue 3, Nuxt, TypeScript, and TailwindCSS. All three language versions are prerendered as static HTML for Vercel.

## Local development

Use a compatible Node.js 22 LTS release (22.12 or later).

```sh
npm ci
npm run dev
```

To validate and preview the production build:

```sh
npm run check
npm run build
npm run preview
```

## Languages and content

The website supports English (`/en/`), Spanish (`/es/`), and Catalan (`/ca/`). The root URL redirects to Spanish. Each page provides a language selector and localized HTML language and metadata.

- `src/data/profile.ts`: resume-based professional information, GitHub profile, and selected public projects with translated descriptions.
- `src/data/i18n.ts`: translated interface, career, education, and language content.
- `app/components/PortfolioPage.vue`: shared Vue page layout.
- `app/pages/[lang].vue`: language routing and validation.
- `src/styles/global.css`: TailwindCSS and the visual theme.
- `public/favicon.svg`: site identity.

The original resume PDF, phone number, and postal address are excluded. No projects, metrics, or credentials have been invented. Future case studies should include real projects, personal contributions, and verifiable outcomes.

## GitHub projects

The projects section links to the [GitHub profile](https://github.com/TomeuMut) and highlights Ferment SaaS (frontend and API), Tomeu Ferments, and Librewrary. Descriptions and technologies were checked against their public repositories and README files. Librewrary is explicitly marked as on hold, following its README.

Project information is curated locally and rendered in English, Spanish, and Catalan. The website does not call the GitHub API at runtime or require an API token. Edit the `projects` array in `src/data/profile.ts` to change the selection or update its descriptions.

Tomeu Ferments also links to its [Instagram profile](https://www.instagram.com/tomeuferments/) from its project card and the About section. Its fermentation, maceration, and traditional recipe focus is based on the user's description. Instagram posts were not accessible during review; the site uses a direct link without embeds or automatic synchronization.

## Icons and professional profiles

Icons use `@phosphor-icons/vue` with explicit component imports, size props, and theme colors. Decorative icons are hidden from assistive technology; icon-only links have accessible names.

The layout uses a desktop sidebar, a collapsible mobile menu, a portrait-led introduction, and a featured project. The theme combines coral (`#F67280`), rose (`#C06C84`), violet (`#6C5B7B`), and blue (`#355C7D`) with light neutral backgrounds. The optimized portrait is `public/images/bartomeu-mut.jpg` (960 × 1440, approximately 123 KB); the original camera file stays local and is excluded from Git.

The contact area links to the supplied LinkedIn profile. Publicly indexed LinkedIn information was reconciled manually with the supplied resume, including the AI automation workshop at Refineria using Make and Zapier. Employment dates and job titles remain based on the user-provided resume. There is no automatic LinkedIn synchronization or runtime scraping.

Source: [AI automation workshop at Refineria](https://es.linkedin.com/posts/bartomeu-mut-vidal-61774aa0_hoy-ha-sido-un-d%C3%ADa-muy-interesante-junto-activity-7267264878040543233-mtcU).

## Git Flow

- `main`: releasable versions; `develop`: integration.
- `feature/*`: changes from `develop`, reviewed through pull requests to `develop`.
- `release/*`: release preparation from `develop`.
- `hotfix/*`: urgent production fixes from `main`, then integrated into both `main` and `develop`.
- Use annotated SemVer tags for released versions.
- Write all commit messages and README content in English.

```sh
 git switch develop
 git pull --ff-only origin develop
 git switch -c feature/change-name
 # Implement, validate, and commit.
 git fetch origin
 git rebase origin/develop
 git push -u origin feature/change-name
 # Open a pull request targeting develop.
```

Rebase only your own unshared work. Never rewrite shared branches. For a release, create `release/0.1.0` from `develop`, validate it, and open a pull request targeting `main`. After merging, create `git tag -a v0.1.0 -m "Release 0.1.0"`, push that tag explicitly, and synchronize `develop` with `main`. Hotfixes follow the same review and tagging process, starting from `main`.

## Vercel deployment

1. Connect this GitHub repository to a Vercel project.
2. Select the Nuxt preset, `npm run build` as the build command, and `.output/public` as the output directory. These are defined in `vercel.json`. Use Node.js 22.x.
3. Choose `main` as the production branch. Use working branches and `develop` for previews. Publish the first version after its release has been merged into `main`.
4. Add the domain under Settings → Domains. The domain can stay registered with its current provider.
5. Add the exact DNS records displayed by Vercel in the external DNS provider's dashboard. Preserve existing email records. A domain transfer is unnecessary.
6. Once the production domain is known, add canonical URLs, absolute alternate-language links, and a sitemap using that actual domain.

No database or secret environment variables are required. Preparing the repository does not automatically publish the website to Vercel.

References: [Nuxt prerendering](https://nuxt.com/docs/4.x/getting-started/prerendering), [TailwindCSS with Vite](https://tailwindcss.com/docs/installation/using-vite), [external domains on Vercel](https://vercel.com/docs/domains/set-up-custom-domain).

## Codex instructions

`AGENTS.md` defines repository rules. `docs/codex-user-AGENTS.md` records the user's global preferences, installed in the Codex home directory, normally `~/.codex/AGENTS.md`, while preserving existing instructions. A global `AGENTS.override.md` takes precedence when present.

Reference: [Codex instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md/).

## Validation notes

Type checking and static generation passed for English, Spanish, and Catalan. The redesigned page was visually reviewed in desktop and mobile Chrome after the integrated browser proved unavailable. At a 390 px mobile viewport, the document had no horizontal overflow, the portrait loaded, and the menu expanded with the expected accessible state. Previous content checks covered language metadata, navigation targets, contact links, asset paths, and exclusion of the private phone number.

The dependency audit still reports advisories in transitive Nuxt tooling dependencies after compatible fixes. Do not use a forced downgrade as an automatic remedy. Development tools are disabled in the site configuration; Vercel serves the generated static files, not a Nuxt development server.
