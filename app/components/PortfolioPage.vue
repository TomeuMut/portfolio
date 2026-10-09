<script setup lang="ts">
import { PhBriefcase, PhCode, PhEnvelopeSimple, PhGithubLogo, PhInstagramLogo, PhKanban, PhLinkedinLogo, PhList, PhMapPin, PhUsersThree, PhX } from '@phosphor-icons/vue';
import { languageOptions, translations, type Language } from '../../src/data/i18n';
import { profile, projects } from '../../src/data/profile';

const props = defineProps<{ language: Language }>();
const t = computed(() => translations[props.language]);
const year = new Date().getFullYear();
const menuOpen = ref(false);
const activeSection = ref('home');
const sectionOrder = [1, 3, 2, 0, 4, 5];
const sections = ['about', 'experience', 'approach', 'projects', 'stack', 'contact'];
const navigation = computed(() => sectionOrder.map(index => ({ id: sections[index]!, label: t.value.nav[index]! })));
const strengthIcons = [PhCode, PhUsersThree, PhKanban];
let sectionObserver: IntersectionObserver | undefined;

onMounted(() => {
  sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) activeSection.value = entry.target.id;
    }
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id], footer[id]').forEach(section => sectionObserver?.observe(section));
});
onBeforeUnmount(() => sectionObserver?.disconnect());

useHead(() => ({
  htmlAttrs: { lang: props.language },
  title: `${profile.name} · ${profile.title} · Project Manager`,
  meta: [
    { name: 'description', content: t.value.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: t.value.locale },
    { property: 'og:title', content: `${profile.name} · ${t.value.eyebrow}` },
    { property: 'og:description', content: t.value.description },
  ],
}));
</script>

<template>
  <div class="portfolio-layout">
    <a href="#content" class="skip-link">{{ t.skip }}</a>
    <header class="sidebar">
      <div class="sidebar-top">
        <a href="#home" class="brand" :aria-label="`${profile.shortName}, ${t.home}`" @click="menuOpen = false">
          <span class="brand-mark" aria-hidden="true">bm<span>.</span></span>
          <span class="brand-name">Bartomeu<br class="desktop-break" /> Mut Vidal</span>
        </a>
        <button class="menu-toggle" type="button" :aria-label="menuOpen ? t.menuClose : t.menuOpen" :aria-expanded="menuOpen" aria-controls="primary-navigation" @click="menuOpen = !menuOpen">
          <component :is="menuOpen ? PhX : PhList" :size="24" aria-hidden="true" focusable="false" />
        </button>
      </div>
      <p class="sidebar-role">{{ profile.title }}</p>
      <nav id="primary-navigation" class="side-navigation" :class="{ 'is-open': menuOpen }" :aria-label="t.home" @keydown.esc="menuOpen = false">
        <a v-for="(item, index) in navigation" :key="item.id" :href="`#${item.id}`" :aria-current="activeSection === item.id ? 'location' : undefined" @click="menuOpen = false; activeSection = item.id">
          <span class="nav-number" aria-hidden="true">0{{ index + 1 }}</span>{{ item.label }}
        </a>
      </nav>
      <div class="sidebar-bottom">
        <nav :aria-label="t.language" class="language-switcher">
          <a v-for="option in languageOptions" :key="option.code" :href="`/${option.code}/`" :lang="option.code" :hreflang="option.code" :aria-label="option.name" :aria-current="option.code === language ? 'page' : undefined">{{ option.label }}</a>
        </nav>
        <p class="sidebar-location"><PhMapPin :size="16" aria-hidden="true" focusable="false" />Mallorca</p>
        <nav :aria-label="t.socialLinks" class="sidebar-socials">
          <a :href="profile.linkedin" aria-label="LinkedIn"><PhLinkedinLogo :size="20" aria-hidden="true" focusable="false" /></a>
          <a :href="profile.github" aria-label="GitHub"><PhGithubLogo :size="20" aria-hidden="true" focusable="false" /></a>
          <a :href="`mailto:${profile.email}`" :aria-label="profile.email"><PhEnvelopeSimple :size="20" aria-hidden="true" focusable="false" /></a>
        </nav>
      </div>
    </header>

    <div class="main-column">
      <main id="content">
        <section id="home" aria-labelledby="hero-title" class="hero-section">
          <div class="page-shell hero-grid">
            <div class="hero-copy">
              <p class="eyebrow">{{ t.eyebrow }}</p>
              <h1 id="hero-title" class="hero-title">Bartomeu<br />Mut Vidal<span class="coral-dot">.</span></h1>
              <p class="hero-statement">{{ t.hero[0] }}<br /><span>{{ t.hero[1] }}</span></p>
              <p class="hero-intro">{{ t.introAfter }}</p>
              <div class="hero-actions">
                <a href="#experience" class="button button-primary"><PhBriefcase :size="19" aria-hidden="true" focusable="false" />{{ t.cta[0] }}</a>
                <a href="#contact" class="button button-secondary"><PhEnvelopeSimple :size="19" aria-hidden="true" focusable="false" />{{ t.cta[1] }}</a>
              </div>
              <p class="hero-since">{{ t.since }}</p>
            </div>
            <figure class="portrait-frame">
              <img :src="profile.portrait" :alt="t.portraitAlt" width="960" height="1440" fetchpriority="high" decoding="async" class="portrait-image" />
              <figcaption class="portrait-caption"><span>{{ profile.title }}</span><strong>{{ t.experience[0]?.company }}</strong></figcaption>
              <div class="palette-strip" aria-hidden="true"><span /><span /><span /><span /></div>
            </figure>
          </div>
          <div class="page-shell"><div class="direction-banner"><PhKanban :size="28" weight="duotone" aria-hidden="true" focusable="false" /><div><span class="eyebrow">{{ t.nextStep }}</span><p>Project Manager</p></div><p class="direction-description">{{ t.ambition }}</p></div></div>
        </section>

        <section id="experience" aria-labelledby="experience-title" class="section-block">
          <div class="page-shell">
            <div class="section-intro"><div><p class="eyebrow"><span>01 /</span> {{ t.experienceLabel }}</p><h2 id="experience-title">{{ t.experienceTitle[0] }} <em>{{ t.experienceTitle[1] }}</em></h2></div><p>{{ t.experienceText }}</p></div>
            <div class="career-list">
              <article v-for="job in t.experience" :key="job.company" class="career-row">
                <div class="career-meta"><p class="career-period">{{ job.period }}</p><h3>{{ job.company }}</h3><p class="career-location">{{ job.location }}</p></div>
                <div class="career-detail"><h4>{{ job.role }}</h4><p>{{ job.summary }}</p><ul v-if="job.points.length" class="career-points"><li v-for="point in job.points" :key="point">{{ point }}</li></ul><ul class="tags"><li v-for="tag in job.tags" :key="tag">{{ tag }}</li></ul></div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" class="section-block projects-section">
          <div class="page-shell">
            <div class="section-intro"><div><p class="eyebrow"><span>02 /</span> {{ t.projectsLabel }}</p><h2 id="projects-title">{{ t.projectsTitle[0] }}<br /><em>{{ t.projectsTitle[1] }}</em></h2></div><div><p>{{ t.projectsText }}</p><a :href="profile.github" class="text-link"><PhGithubLogo :size="20" aria-hidden="true" focusable="false" />{{ t.githubProfile }}</a></div></div>
            <div class="project-grid">
              <article v-for="(project, index) in projects" :key="project.name" class="project-card" :class="`project-card-${index + 1}`">
                <div class="project-cover" aria-hidden="true"><span class="project-code">0{{ index + 1 }} /</span><PhKanban v-if="index === 0" :size="76" weight="duotone" /><PhInstagramLogo v-else-if="index === 1" :size="76" weight="duotone" /><PhCode v-else :size="76" weight="duotone" /><span class="project-cover-name">{{ project.name }}</span></div>
                <div class="project-body"><div class="project-heading"><h3>{{ project.name }}</h3><span v-if="project.paused" class="status-label">{{ t.pausedLabel }}</span></div><p>{{ project.description[language] }}</p><ul class="tags" :aria-label="t.stackLabel"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul><div class="project-links"><a v-for="repository in project.repositories" :key="repository.url" :href="repository.url" :aria-label="`${t.repositoryLabel}: ${project.name}${repository.label ? ` · ${repository.label}` : ''}`" class="text-link"><PhCode :size="17" aria-hidden="true" focusable="false" />{{ repository.label || t.repositoryLabel }}</a><a v-if="project.instagram" :href="project.instagram" :aria-label="`${t.instagramProject}: ${project.name}`" class="text-link"><PhInstagramLogo :size="17" aria-hidden="true" focusable="false" />Instagram</a></div></div>
              </article>
            </div>
          </div>
        </section>

        <section id="approach" aria-labelledby="approach-title" class="section-block approach-section">
          <div class="page-shell">
            <div class="section-intro"><div><p class="eyebrow"><span>03 /</span> {{ t.approachLabel }}</p><h2 id="approach-title">{{ t.approachTitle[0] }}<br /><em>{{ t.approachTitle[1] }}</em></h2></div><p>{{ t.approachText }}</p></div>
            <div class="strength-grid"><article v-for="(strength, index) in t.strengths" :key="strength.number" class="strength-card"><div class="strength-top"><component :is="strengthIcons[index]" :size="28" weight="duotone" aria-hidden="true" focusable="false" /><span class="eyebrow">/{{ strength.number }}</span></div><h3>{{ strength.title }}</h3><p>{{ strength.text }}</p><span class="strength-label">{{ strength.label }}</span></article></div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" class="section-block about-section">
          <div class="page-shell about-grid"><div><p class="eyebrow"><span>04 /</span> {{ t.aboutLabel }}</p><h2 id="about-title">{{ t.aboutTitle[0] }}<br /><em>{{ t.aboutTitle[1] }}</em></h2><ul class="interest-list"><li v-for="interest in t.aboutInterests" :key="interest">{{ interest }}</li></ul></div><div class="about-copy"><p v-for="paragraph in t.aboutParagraphs" :key="paragraph">{{ paragraph }}</p><p>{{ t.personalProjectIntro }} <a :href="profile.fermentsInstagram" class="inline-link">Tomeu Ferments</a>.</p></div></div>
        </section>

        <section id="stack" aria-labelledby="stack-title" class="section-block">
          <div class="page-shell">
            <div class="section-intro"><div><p class="eyebrow"><span>05 /</span> {{ t.stackLabel }}</p><h2 id="stack-title">{{ t.stackTitle[0] }}<br /><em>{{ t.stackTitle[1] }}</em></h2></div><p>{{ t.stackText }}</p></div>
            <div class="stack-grid"><article v-for="group in t.stack" :key="group.label" class="stack-card"><h3>{{ group.label }}</h3><ul class="tags"><li v-for="item in group.items" :key="item">{{ item }}</li></ul></article></div>
            <div class="credentials-grid"><div><h3 class="eyebrow">{{ t.educationLabel }}</h3><div v-for="item in t.education" :key="item.title" class="credential-row"><div><h4>{{ item.title }}</h4><p>{{ item.school }}</p></div><span>{{ item.year }}</span></div></div><div><h3 class="eyebrow">{{ t.languagesLabel }}</h3><ul class="language-list"><li v-for="item in t.languages" :key="item.name"><span>{{ item.name }}</span><span>{{ item.level }}</span></li></ul></div></div>
          </div>
        </section>
      </main>

      <footer id="contact" aria-labelledby="contact-title" class="contact-section">
        <div class="page-shell"><p class="eyebrow"><span>06 /</span> {{ t.contactLabel }}</p><div class="contact-grid"><h2 id="contact-title">{{ t.contactTitle[0] }}<br /><em>{{ t.contactTitle[1] }}</em></h2><div><p>{{ t.contactText }}</p><a :href="`mailto:${profile.email}`" class="contact-email"><PhEnvelopeSimple :size="22" aria-hidden="true" focusable="false" />{{ profile.email }}</a></div></div><nav :aria-label="t.socialLinks" class="contact-socials"><a :href="profile.linkedin"><PhLinkedinLogo :size="20" aria-hidden="true" focusable="false" />LinkedIn</a><a :href="profile.github"><PhGithubLogo :size="20" aria-hidden="true" focusable="false" />GitHub</a></nav><div class="footer-bottom"><p>© {{ year }} {{ profile.name }}</p><p>{{ t.location }}</p><a href="#home">{{ t.backToTop }}</a></div></div>
      </footer>
    </div>
  </div>
</template>
