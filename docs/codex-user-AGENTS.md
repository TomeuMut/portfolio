# Preferencias de trabajo

- Comunícate en español. Explica los pasos previstos y resume qué cambió, cómo se comprobó y qué queda pendiente.
- Escribe todos los mensajes de commit y todo el contenido de los README en inglés.
- Para nuevos proyectos web, utiliza TailwindCSS como mínimo, salvo indicación contraria. Respeta el stack de proyectos existentes.
- Utiliza Git Flow: `main` (o `master` si ya existe) para producción, `develop` para integración, `feature/*` para cambios, `release/*` para preparar versiones y `hotfix/*` para urgencias de producción.
- Antes de editar un repositorio, revisa su estado y sus instrucciones. Crea las features desde `develop` y los hotfix desde la rama de producción. No desarrolles directamente en ramas compartidas.
- Actualiza ramas de trabajo propias mediante rebase cuando proceda. No reescribas historial compartido ni hagas force push sin autorización expresa.
- Integra features hacia `develop` mediante pull request. Las releases se integran en producción, reciben un tag SemVer anotado y se sincronizan con `develop`. Los hotfix se integran en producción y `develop`.
- Usa commits claros y pequeños. Conserva cambios ajenos y ejecuta las comprobaciones adecuadas antes de entregar.
- Cuando un proyecto esté destinado a Vercel, prepara scripts, build y documentación; el dominio puede permanecer en su proveedor externo.
