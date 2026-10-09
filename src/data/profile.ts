export const profile = {
  name: 'Bartomeu Mut Vidal',
  shortName: 'Bartomeu Mut',
  email: 'tomeumutvidal@gmail.com',
  github: 'https://github.com/TomeuMut',
  linkedin: 'https://www.linkedin.com/in/bartomeu-mut-vidal-61774aa0/',
  location: 'Mallorca, España',
  title: 'Frontend Developer',
  description: 'Frontend Developer en OmniAccess con experiencia full stack, gestión de proyectos y comunicación con clientes. Mi siguiente paso: Project Manager.',
};

export const experience = [
  {
    company: 'OmniAccess',
    role: 'Frontend Developer',
    period: 'Nov. 2025 — actualidad',
    location: 'Palma de Mallorca · Híbrido',
    summary: 'Desarrollo frontend en un entorno de trabajo ágil, con integración de APIs, herramientas de entrega continua y tecnologías full stack.',
    points: [
      'Desarrollo con Vue 3, Nuxt, Svelte, TailwindCSS y Vuetify; JavaScript y jQuery.',
      'Trabajo con NestJS, Laravel, APIs, MySQL y SQLite.',
      'Git, GitLab y Git Flow; Jira, Scrum y Agile; CI/CD y Docker.',
      'Uso de IA, Claude Code, agentes y skills en el desarrollo.',
    ],
    tags: ['Vue 3 / Nuxt', 'Svelte', 'Jira / Scrum', 'CI/CD', 'Docker'],
  },
  {
    company: 'IT2B',
    role: 'Senior Software Developer / Project Manager',
    period: 'Ene. — oct. 2025',
    location: 'Palma de Mallorca',
    summary: 'Desarrollo web full stack y colaboración con clientes y equipos para dar respuesta a las necesidades de cada proyecto.',
    points: [
      'Desarrollo de backend con Symfony y frontend con Angular.',
      'Atención directa a clientes y colaboración entre departamentos.',
      'Interfaces con HTML5, CSS3, TailwindCSS, Bootstrap, JavaScript y jQuery.',
      'Integración de APIs y trabajo con MySQL y SQL Server.',
      'Git y Git Flow, Scrum y Agile, e integración y entrega continuas (CI/CD).',
    ],
    tags: ['Symfony', 'Angular', 'TailwindCSS', 'Clientes'],
  },
  {
    company: 'Refineria Web',
    role: 'Desarrollador de aplicaciones web',
    period: 'Mar. 2017 — dic. 2024',
    location: 'Palma de Mallorca',
    summary: 'Una etapa de desarrollo, gestión de proyectos y acompañamiento a nuevos talentos, trabajando en contacto directo con clientes.',
    points: [
      'Desarrollo con PHP, Laravel y OctoberCMS; frontend con Vue y Nuxt.',
      'Gestión de proyectos y comunicación directa con clientes.',
      'Formación y mentoría de nuevos talentos, promoviendo buenas prácticas.',
      'Coimpartición de un taller de automatización con IA en Refineria, con Make y Zapier.',
      'Gestión de datos y documentación con MySQL y Microsoft SQL.',
    ],
    tags: ['Laravel', 'Vue / Nuxt', 'Gestión de proyectos', 'Mentoría'],
  },
  {
    company: 'Fundació BIT',
    role: 'Técnico de mantenimiento · Prácticas',
    period: 'Mar. — jun. 2014',
    location: 'Palma de Mallorca',
    summary: 'Soporte informático en centros de salud de IB Salut: configuración y mantenimiento de equipos, atención a usuarios y resolución de incidencias.',
    points: [],
    tags: ['Soporte técnico', 'Atención a usuarios'],
  },
];

export const strengths = [
  { number: '01', title: 'Analizar antes de construir', text: 'Antes de empezar, analizo el problema y busco una forma eficiente de resolverlo sin perder calidad. Mi experiencia full stack me ayuda a valorar las decisiones técnicas con una mentalidad abierta a nuevas soluciones.', label: 'Criterio técnico y eficiencia' },
  { number: '02', title: 'Construir confianza', text: 'He gestionado proyectos en contacto directo con clientes, también en situaciones difíciles. Escuchar, comunicar con claridad y buscar soluciones me ha ayudado a construir relaciones de confianza a largo plazo.', label: 'Gestión de proyectos y clientes' },
  { number: '03', title: 'Aprender en equipo', text: 'He liderado formaciones de frontend para becarios, compartiendo buenas prácticas y ayudándoles a construir una base sólida. Disfruto de un entorno cercano donde podamos aprender y mejorar juntos.', label: 'Formación y colaboración' },
];

export const stack = [
  { label: 'Backend', items: ['PHP', 'Symfony', 'Laravel', 'NestJS', 'OctoberCMS', 'APIs'] },
  { label: 'Frontend', items: ['Vue 3', 'Nuxt', 'Svelte', 'Angular', 'HTML5 / CSS3', 'JavaScript / jQuery', 'SASS', 'TailwindCSS', 'Vuetify', 'Bootstrap'] },
  { label: 'Datos', items: ['MySQL', 'SQL Server', 'SQLite'] },
  { label: 'Entrega y colaboración', items: ['Git', 'GitLab', 'Git Flow', 'Jira', 'Scrum', 'Agile', 'CI/CD', 'Docker'] },
  { label: 'IA aplicada', items: ['Claude Code', 'Agents', 'Skills', 'Make', 'Zapier'] },
];

export const education = [
  { title: 'Desarrollo de Aplicaciones Web', school: 'IES Manacor', year: '2017' },
  { title: 'Sistemas Microinformáticos y Redes', school: 'IES Francesc de Borja Moll', year: '2014' },
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Catalán', level: 'Nativo' },
  { name: 'Inglés', level: 'A2' },
];

export const projects = [
  {
    name: 'Ferment SaaS',
    description: {
      en: 'A fermentation management application with recipes, categories, fermenters, and production batches. A Nuxt frontend connected to a Laravel API.',
      es: 'Aplicación para gestionar recetas de fermentación, categorías, fermentadores y lotes de producción. Un frontend Nuxt conectado a una API Laravel.',
      ca: 'Aplicació per gestionar receptes de fermentació, categories, fermentadors i lots de producció. Un frontend Nuxt connectat a una API Laravel.',
    },
    technologies: ['Nuxt 4', 'Vue 3', 'TailwindCSS', 'Laravel', 'Docker'],
    repositories: [
      { label: 'Frontend', url: 'https://github.com/TomeuMut/Ferment-Saas-Frontend' },
      { label: 'API', url: 'https://github.com/TomeuMut/Ferment-Saas-API' },
    ],
    paused: false,
  },
  {
    name: 'Tomeu Ferments',
    description: {
      en: 'A digital presentation of Tomeu Ferments: a space for sharing handmade fermentation recipes, infusions, and other living preparations.',
      es: 'Presentación digital de Tomeu Ferments: un espacio para compartir recetas artesanales de fermentados, macerados y otras preparaciones vivas.',
      ca: 'Presentació digital de Tomeu Ferments: un espai per compartir receptes artesanals de fermentats, macerats i altres preparacions vives.',
    },
    technologies: ['OctoberCMS', 'PHP', 'TailwindCSS'],
    repositories: [{ label: '', url: 'https://github.com/TomeuMut/tomeuferments' }],
    paused: false,
  },
  {
    name: 'Librewrary',
    description: {
      en: 'An open-source Laravel project for creating and sharing beer recipes, with a shared ingredient library. Development is currently on hold.',
      es: 'Proyecto de código abierto con Laravel para crear y compartir recetas de cerveza, con una biblioteca de ingredientes. Su desarrollo está actualmente en pausa.',
      ca: 'Projecte de codi obert amb Laravel per crear i compartir receptes de cervesa, amb una biblioteca d’ingredients. El desenvolupament està actualment en pausa.',
    },
    technologies: ['Laravel', 'PHP', 'Blade'],
    repositories: [{ label: '', url: 'https://github.com/TomeuMut/librewrary' }],
    paused: true,
  },
];
