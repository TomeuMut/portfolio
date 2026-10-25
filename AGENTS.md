# Portfolio de Bartomeu Mut Vidal

- Hablar en español y explicar brevemente los pasos y comprobaciones.
- Hacer commits locales con mensajes en inglés conforme avance el trabajo. No hacer push, merges ni tags sin indicación expresa del usuario. Trabajar en la rama activa autorizada mientras se revisa el rediseño.
- Escribir commits y README íntegramente en inglés. El portfolio está disponible en EN, ES y CA mediante rutas independientes.
- Stack: Vue 3 con Nuxt, generación estática, TypeScript y TailwindCSS. Preparado para Vercel. Idiomas: EN, ES y CA.
- Crear cada cambio en una rama `feature/*` desde `develop`; usar `hotfix/*` desde `main` para correcciones urgentes en producción.
- No desarrollar directamente en `main` ni `develop`. Rebase solo sobre ramas propias sin colaboradores; nunca reescribir ramas compartidas.
- Integrar features mediante pull request hacia `develop`. Preparar releases en `release/*`, integrar en `main`, crear tags SemVer anotados y sincronizar `develop`.
- Comprobar `npm run check` y `npm run build` antes de entregar cambios de código. Conservar package-lock.json.
- Mantener semántica HTML, accesibilidad, navegación con teclado, diseño responsive y respeto a reduced-motion.
- El CV es la fuente de los hechos: no inventar empresas, métricas, proyectos, títulos ni enlaces. Distinguir aspiraciones de experiencia demostrada.
- Centralizar el contenido editable en `src/data/profile.ts`.
- El PDF original está fuera del repositorio y no se publica: contiene datos personales. Publicar solo el contenido profesional seleccionado para la web.

## CI/CD

- Read `docs/ci-cd.md` before modifying the pipeline. Workflow: `.github/workflows/ci.yml`; stable jobs: **Quality** and **Build and smoke**.
- Validate with `npm ci`, `npm run lint`, `npm run check`, existing unit tests when applicable, `npm run build`, `npx playwright install chromium`, and `npm run test:smoke`. Use the Node version in `.nvmrc`.
- There is no unit-test suite. Smoke tests cover ES/EN/CA pages, language metadata, local image delivery, project navigation, the mobile menu and the default Spanish redirect.
- Build before smoke tests. Playwright starts the built application on its own test port and checks Chromium desktop/mobile emulation with at most two workers. Failure reports and traces are retained as the `smoke-report` Actions artifact for seven days.
- Keep read-only workflow permissions, pinned official Actions, timeouts, cancellation of superseded runs and credential-free checkout. No Vercel or administrative database token is required by CI.
- After an authorized push, verify the Actions run matches the pushed commit and both jobs pass. Do not treat local tests or Vercel deployment status as proof of Actions success.
- Vercel Git integration provides deployment independently from CI. Do not claim that CI blocks production unless branch/deployment enforcement has been configured and verified separately. Do not change protections or secrets without authorization.
