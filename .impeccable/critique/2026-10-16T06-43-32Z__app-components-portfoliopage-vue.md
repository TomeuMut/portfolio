---
target: Initial design review before refinements
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:C:\\laragon\\www\\portfolio\\app\\components\\PortfolioPage.vue"
target_fingerprint: "sha256:67211d2c67003e914599b095875c9dd56fb7bb7c6624bacd637918722c128d5f"
target_path: "C:\\laragon\\www\\portfolio\\app\\components\\PortfolioPage.vue"
timestamp: 2026-10-16T06-43-32Z
slug: app-components-portfoliopage-vue
---
# Design review

Initial independent design assessment: **25/32** across eight applicable Nielsen heuristics. Flexibility and help/documentation were not scored for this portfolio surface.

## Strengths

- A consistent blue identity, authentic portrait and detailed professional history.
- Current employment and the ambition to grow into project management remain distinct.
- Localized EN, ES and CA content, semantic sections and reduced-motion support.

## Applied improvements

- Allow the desktop sidebar to scroll independently on short screens, with reduced vertical spacing where needed.
- Give mobile language, social and menu controls 44 px targets and let the control row wrap.
- Return keyboard focus to the menu toggle on Escape; focus the selected section after anchor navigation.
- Reset the mobile menu on language changes and preserve the current section in language links.
- Make the main content and destination sections focusable for skip and section navigation.
- Correct the Tomeu Ferments project stack to Nuxt 4, Vue 3, TypeScript and TailwindCSS in all three languages, preserving historical OctoberCMS experience.
- Keep the document title factual: Frontend Developer. Project Manager remains an explicitly stated aspiration in the existing content.
- Remove the portrait's hard offset shadow and decorative thick borders on the direction banner and strength cards, retaining the established palette, photography and layout.

## Validation and limits

`npm run check` and `npm run build` passed, including generated EN, ES and CA routes. The build emitted Nitro dependency-resolution and unused-import warnings, without failing generation. `git diff --check` passed. Browser inventory returned no available browsers or applications, so rendered responsive behavior, computed contrast and the complete keyboard journey still require visual verification. No replacement images, new career claims or invented project metrics were introduced.


### Final checks

- `npm run check`: passed.
- `npm run build`: passed; ES, EN and CA generated successfully.
- Generated HTML: document languages, one h1 per page, unique IDs, internal section/language links and local image assets validated.
- Final Impeccable detector (`app src`): zero findings. This is a mechanical scan, not a browser accessibility certification.
- Independent bounded diff review: no new navigation, menu or localization regressions found.
- Browser inventory empty; no browser server or overlay started, and no temporary review files retained.
- Initial scores describe the pre-change source, not a new score after implementation.
