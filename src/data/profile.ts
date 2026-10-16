export const profile = {
  name: 'Bartomeu Mut Vidal',
  shortName: 'Bartomeu Mut',
  portrait: '/images/bartomeu-mut.jpg',
  email: 'tomeumutvidal@gmail.com',
  github: 'https://github.com/TomeuMut',
  linkedin: 'https://www.linkedin.com/in/bartomeu-mut-vidal-61774aa0/',
  fermentsInstagram: 'https://www.instagram.com/tomeuferments/',
  location: 'Mallorca, España',
  title: 'Frontend Developer',
  headline: 'Desarrollo de software y gestión de proyectos',
  description: 'Bartomeu Mut Vidal. Desarrollo web desde 2017 y gestión de proyectos desde 2019. Experiencia full stack, coordinación de equipos y comunicación con clientes.',
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
    summary: 'Gestión integral de proyectos de software con equipos pequeños, combinando la relación con clientes, la coordinación del desarrollo y el trabajo full stack cuando era necesario.',
    points: [
      'Contacto directo con clientes, análisis y definición de requisitos.',
      'Preparación de presupuestos, planificación y organización de los proyectos.',
      'Coordinación del desarrollo, seguimiento de plazos y gestión de entregas.',
      'Desarrollo full stack con Symfony y Angular; integración de APIs, MySQL y SQL Server.',
      'Interfaces con HTML5, CSS3, TailwindCSS, Bootstrap, JavaScript y jQuery.',
      'Git y Git Flow, Scrum y Agile, e integración y entrega continuas (CI/CD).',
    ],
    tags: ['Gestión de proyectos', 'Clientes', 'Symfony', 'Angular'],
  },
  {
    company: 'Refineria Web',
    role: 'Desarrollador de aplicaciones web',
    period: 'Mar. 2017 — dic. 2024',
    location: 'Palma de Mallorca',
    summary: 'Desarrollo web a medida en equipos pequeños. A partir de 2019, también asumí responsabilidades de gestión de algunos clientes y proyectos, junto con el trabajo de desarrollo.',
    points: [
      'Comunicación directa con clientes, recogida y análisis de requisitos y participación en la planificación de soluciones.',
      'Coordinación con otros desarrolladores, seguimiento de tareas y entregas, y resolución y comunicación de incidencias.',
      'Desarrollo con PHP, Laravel y OctoberCMS; frontend con Vue y Nuxt.',
      'Formación y mentoría de desarrolladores junior, compartiendo buenas prácticas.',
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
    summary: 'Soporte informático en centros de salud: configuración y mantenimiento de equipos, atención a usuarios y resolución de incidencias.',
    points: [],
    tags: ['Soporte técnico', 'Atención a usuarios'],
  },
];

export const strengths = [
  { number: '01', title: 'Analizar antes de construir', text: 'Escucho las necesidades, analizo el problema y valoro alternativas antes de proponer una solución. Mi experiencia full stack me ayuda a tomar decisiones técnicas teniendo en cuenta el contexto del proyecto.', label: 'Análisis y criterio técnico' },
  { number: '02', title: 'Construir confianza', text: 'Trabajo con clientes y equipos para aclarar necesidades, acordar expectativas y mantener una comunicación cercana. Cuando surge un problema, busco soluciones y explico los siguientes pasos con claridad.', label: 'Comunicación y gestión de expectativas' },
  { number: '03', title: 'Aprender y trabajar en equipo', text: 'Comparto conocimientos, acompaño a desarrolladores junior y aprendo de las personas con las que trabajo. Valoro la colaboración y las buenas prácticas que nos ayudan a mejorar juntos.', label: 'Colaboración y mentoría' },
];

export const stack = [
  { label: 'Backend', items: ['PHP', 'Symfony', 'Laravel', 'NestJS', 'OctoberCMS', 'APIs'] },
  { label: 'Frontend', items: ['Vue 3', 'Nuxt', 'Svelte', 'Angular', 'HTML5 / CSS3', 'JavaScript / jQuery', 'SASS', 'TailwindCSS', 'Vuetify', 'Bootstrap'] },
  { label: 'Datos', items: ['MySQL', 'SQL Server', 'SQLite'] },
  { label: 'Entrega y colaboración', items: ['Git', 'GitLab', 'Git Flow', 'Jira', 'Scrum', 'Agile', 'CI/CD', 'Docker'] },
  { label: 'IA aplicada', items: ['Claude Code', 'Agents', 'Skills', 'Make', 'Zapier'] },
];

export const education = [
  { title: 'Grado Superior en Desarrollo de Aplicaciones Web', school: 'IES Manacor', year: '2017' },
  { title: 'Grado Medio en Sistemas Microinformáticos y Redes', school: 'IES Francesc de Borja Moll', year: '2014' },
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Catalán', level: 'Nativo' },
  { name: 'Inglés', level: 'A2' },
];

type Project = {
  name: string;
  description: Record<'en' | 'es' | 'ca', string>;
  technologies: string[];
  repositories: { label: string; url: string }[];
  instagram?: string;
  paused: boolean;
};

export const projects: Project[] = [
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
      en: 'My personal project exploring fermentation, maceration, and traditional recipes. I share this interest on Instagram, alongside a website built with Nuxt 4, Vue 3, TypeScript and TailwindCSS.',
      es: 'Mi proyecto personal de fermentación, maceración y recetas tradicionales. Comparto esta afición en Instagram y la acompaño con una web desarrollada con Nuxt 4, Vue 3, TypeScript y TailwindCSS.',
      ca: 'El meu projecte personal de fermentació, maceració i receptes tradicionals. Compartesc aquesta afició a Instagram i l’acompany amb una web desenvolupada amb Nuxt 4, Vue 3, TypeScript i TailwindCSS.',
    },
    technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'TailwindCSS'],
    repositories: [{ label: '', url: 'https://github.com/TomeuMut/tomeuferments' }],
    instagram: profile.fermentsInstagram,
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
