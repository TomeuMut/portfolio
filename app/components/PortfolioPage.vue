<script setup lang="ts">
import { PhBriefcase, PhCode, PhEnvelopeSimple, PhGithubLogo, PhKanban, PhLinkedinLogo, PhMapPin, PhUsersThree } from '@phosphor-icons/vue';
import { languageOptions, translations, type Language } from '../../src/data/i18n';
import { profile, projects } from '../../src/data/profile';

const props = defineProps<{ language: Language }>();
const t = computed(() => translations[props.language]);
const year = new Date().getFullYear();
const sections = ['experience', 'approach', 'projects', 'stack', 'contact'];
const strengthIcons = [PhCode, PhUsersThree, PhKanban];

function languagePath(language: Language) {
  return `/${language}/`;
}

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
  <div>
    <a href="#content" class="skip-link fixed top-3 left-3 z-50 -translate-y-24 bg-mint px-5 py-3 font-semibold focus:translate-y-0">{{ t.skip }}</a>
    <header class="sticky top-0 z-30 border-b border-slate-200 bg-paper/95 backdrop-blur-lg">
      <div class="shell flex min-h-20 flex-wrap items-center justify-between gap-x-5 gap-y-3 py-4">
        <a href="#home" class="flex items-center gap-3" :aria-label="`${profile.shortName}, ${t.home}`">
          <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-ink font-mono text-sm font-bold text-mint" aria-hidden="true">bm.</span>
          <span class="text-sm font-semibold tracking-tight">{{ profile.shortName }}<span class="ml-1 text-emerald-700">.</span></span>
        </a>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
          <nav :aria-label="t.home" class="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm sm:gap-x-6">
            <a v-for="(label, index) in t.nav" :key="label" :href="`#${sections[index]}`" class="nav-link" :class="{ 'font-semibold': sections[index] === 'contact' }">{{ label }}</a>
          </nav>
          <nav :aria-label="t.language" class="flex gap-1 border-l border-slate-300 pl-4 text-xs font-semibold">
            <a v-for="option in languageOptions" :key="option.code" :href="languagePath(option.code)" :lang="option.code" :hreflang="option.code" :aria-label="option.name" :aria-current="option.code === language ? 'page' : undefined" class="rounded px-2 py-2 transition-colors" :class="option.code === language ? 'bg-ink text-mint' : 'text-slate-600 hover:bg-slate-200'">{{ option.label }}</a>
          </nav>
        </div>
      </div>
    </header>

    <main id="content">
      <section id="home" aria-labelledby="hero-title" class="hero overflow-hidden text-white">
        <div class="shell grid gap-12 pt-16 pb-14 md:grid-cols-[1fr_240px] md:gap-10 md:pt-24 md:pb-20 xl:grid-cols-[1fr_285px]">
          <div>
            <p class="eyebrow mb-8 text-mint">{{ t.eyebrow }}</p>
            <h1 id="hero-title" class="text-[clamp(2.5rem,5.7vw,5.1rem)] leading-[1.06] font-semibold tracking-[-.055em]">{{ t.hero[0] }}<br /><span class="serif text-mint italic tracking-[-.045em]">{{ t.hero[1] }}</span></h1>
            <p class="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">{{ t.intro }} <strong class="font-medium text-white">{{ profile.shortName }}</strong>, {{ t.introAfter }}</p>
            <div class="hero-actions mt-9 flex flex-wrap gap-3">
              <a href="#experience" class="button button-primary gap-2"><PhBriefcase class="h-5 w-5 shrink-0" aria-hidden="true" focusable="false" />{{ t.cta[0] }}</a>
              <a href="#contact" class="button button-outline gap-2"><PhEnvelopeSimple class="h-5 w-5 shrink-0" aria-hidden="true" focusable="false" />{{ t.cta[1] }}</a>
            </div>
          </div>
          <aside :aria-label="t.nextStep" class="flex flex-col justify-end border-t border-white/20 pt-7 md:border-t-0 md:border-l md:pl-7 xl:pl-9">
            <div class="mb-7 hidden font-mono text-6xl font-light tracking-[-.12em] text-white/15 md:block" aria-hidden="true">&lt;bm /&gt;</div>
            <p class="eyebrow mb-3 text-slate-400">{{ t.nextStep }}</p>
            <p class="text-2xl leading-snug font-medium tracking-tight">Project Manager</p>
            <p class="mt-4 text-sm leading-relaxed text-slate-300">{{ t.ambition }}</p>
            <div class="mt-7 border-t border-white/15 pt-5">
              <p class="flex items-center gap-2 text-sm text-slate-300"><PhMapPin class="h-4 w-4 shrink-0" aria-hidden="true" focusable="false" />{{ t.location }}</p>
              <p class="mt-2 font-mono text-xs text-mint">{{ t.since }}</p>
            </div>
          </aside>
        </div>
        <div class="border-t border-white/10"><div class="shell flex flex-wrap justify-between gap-4 py-5 font-mono text-xs text-slate-400"><span>{{ t.profileLabel }}</span><span>{{ t.tagline }}</span></div></div>
      </section>

      <section id="approach" aria-labelledby="approach-title" class="shell py-20 md:py-28">
        <div class="grid gap-6 md:grid-cols-2 md:items-end">
          <div><p class="eyebrow mb-5 text-emerald-800">{{ t.approachLabel }}</p><h2 id="approach-title" class="section-heading">{{ t.approachTitle[0] }}<br /><span class="serif italic">{{ t.approachTitle[1] }}</span></h2></div>
          <p class="max-w-lg text-base leading-relaxed text-slate-600 md:justify-self-end">{{ t.approachText }}</p>
        </div>
        <div class="mt-12 grid border-t border-slate-300 md:grid-cols-3">
          <article v-for="strength in t.strengths" :key="strength.number" class="border-b border-slate-300 py-8 md:border-r md:border-b-0 md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <div class="flex items-center justify-between text-emerald-800"><span class="font-mono text-sm">/{{ strength.number }}</span><component :is="strengthIcons[Number(strength.number) - 1]" class="h-7 w-7" weight="duotone" aria-hidden="true" focusable="false" /></div>
            <h3 class="mt-6 text-2xl font-semibold tracking-tight">{{ strength.title }}</h3>
            <p class="mt-4 text-base leading-relaxed text-slate-600">{{ strength.text }}</p>
            <p class="mt-7 font-mono text-xs text-slate-500">{{ strength.label }}</p>
          </article>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-title" class="border-y border-slate-200 bg-white py-20 md:py-28">
        <div class="shell grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
          <div><p class="eyebrow mb-5 text-emerald-800">{{ t.experienceLabel }}</p><h2 id="experience-title" class="section-heading">{{ t.experienceTitle[0] }}<br /><span class="serif italic">{{ t.experienceTitle[1] }}</span></h2><p class="mt-6 max-w-xs text-base leading-relaxed text-slate-600">{{ t.experienceText }}</p></div>
          <div class="ml-2 border-l border-slate-200 pl-7">
            <article v-for="(job, index) in t.experience" :key="job.company" class="timeline-item relative" :class="{ 'mb-12 border-b border-slate-200 pb-12': index !== t.experience.length - 1 }">
              <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2"><h3 class="text-2xl font-semibold tracking-tight">{{ job.company }}</h3><p class="font-mono text-xs leading-relaxed text-slate-500">{{ job.period }}</p></div>
              <p class="mt-2 text-base font-medium text-emerald-800">{{ job.role }}</p><p class="mt-2 text-sm text-slate-500">{{ job.location }}</p>
              <p class="mt-5 text-base leading-relaxed text-slate-600">{{ job.summary }}</p>
              <ul v-if="job.points.length" class="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600 marker:text-emerald-700"><li v-for="point in job.points" :key="point">{{ point }}</li></ul>
              <div class="mt-5 flex flex-wrap gap-2"><span v-for="tag in job.tags" :key="tag" class="rounded-sm bg-slate-100 px-3 py-1.5 text-xs text-slate-600">{{ tag }}</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-title" class="border-b border-slate-200 py-20 md:py-28">
        <div class="shell">
          <div class="grid gap-6 md:grid-cols-2 md:items-end">
            <div><p class="eyebrow mb-5 text-emerald-800">{{ t.projectsLabel }}</p><h2 id="projects-title" class="section-heading">{{ t.projectsTitle[0] }}<br /><span class="serif italic">{{ t.projectsTitle[1] }}</span></h2></div>
            <div class="max-w-lg md:justify-self-end"><p class="text-base leading-relaxed text-slate-600">{{ t.projectsText }}</p><a :href="profile.github" class="mt-5 inline-flex items-center gap-2 border-b border-emerald-800 pb-1 text-sm font-semibold text-emerald-800 hover:text-ink"><PhGithubLogo class="h-5 w-5 shrink-0" aria-hidden="true" focusable="false" />{{ t.githubProfile }}</a></div>
          </div>
          <div class="mt-12 grid gap-5 lg:grid-cols-3">
            <article v-for="(project, index) in projects" :key="project.name" class="flex min-w-0 flex-col border border-slate-200 bg-white p-7">
              <div class="flex items-center justify-between gap-3"><span class="font-mono text-sm text-emerald-800" aria-hidden="true">0{{ index + 1 }} /</span><span v-if="project.paused" class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{{ t.pausedLabel }}</span></div>
              <h3 class="mt-7 text-2xl font-semibold tracking-tight">{{ project.name }}</h3>
              <p class="mt-4 text-base leading-relaxed text-slate-600">{{ project.description[language] }}</p>
              <ul :aria-label="t.stackLabel" class="mt-6 flex flex-wrap gap-2"><li v-for="technology in project.technologies" :key="technology" class="rounded-sm bg-slate-100 px-3 py-1.5 text-xs text-slate-600">{{ technology }}</li></ul>
              <div class="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-8"><a v-for="repository in project.repositories" :key="repository.url" :href="repository.url" :aria-label="`${t.repositoryLabel}: ${project.name}${repository.label ? ` · ${repository.label}` : ''}`" class="inline-flex items-center gap-2 border-b border-emerald-800 pb-1 text-sm font-semibold text-emerald-800 hover:text-ink"><PhCode class="h-4 w-4 shrink-0" aria-hidden="true" focusable="false" />{{ repository.label || t.repositoryLabel }}</a></div>
            </article>
          </div>
        </div>
      </section>

      <section id="stack" aria-labelledby="stack-title" class="shell py-20 md:py-28">
        <div class="flex flex-wrap items-end justify-between gap-6"><div><p class="eyebrow mb-5 text-emerald-800">{{ t.stackLabel }}</p><h2 id="stack-title" class="section-heading">{{ t.stackTitle[0] }}<br /><span class="serif italic">{{ t.stackTitle[1] }}</span></h2></div><p class="max-w-sm text-base leading-relaxed text-slate-600">{{ t.stackText }}</p></div>
        <div class="mt-12 border-t border-slate-300"><div v-for="group in t.stack" :key="group.label" class="grid gap-5 border-b border-slate-300 py-7 sm:grid-cols-[180px_1fr]"><h3 class="text-base font-semibold">{{ group.label }}</h3><ul class="flex flex-wrap gap-3"><li v-for="item in group.items" :key="item" class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm">{{ item }}</li></ul></div></div>
        <div class="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
          <div><h3 class="eyebrow mb-6 text-emerald-800">{{ t.educationLabel }}</h3><div class="space-y-6"><div v-for="item in t.education" :key="item.title" class="flex justify-between gap-4"><div><p class="text-base font-semibold">{{ item.title }}</p><p class="mt-1 text-sm text-slate-600">{{ item.school }}</p></div><span class="font-mono text-sm text-slate-500">{{ item.year }}</span></div></div></div>
          <div><h3 class="eyebrow mb-6 text-emerald-800">{{ t.languagesLabel }}</h3><ul class="space-y-4"><li v-for="item in t.languages" :key="item.name" class="flex justify-between gap-4 border-b border-slate-200 pb-3 text-base"><span>{{ item.name }}</span><span class="text-sm text-slate-600">{{ item.level }}</span></li></ul></div>
        </div>
      </section>
    </main>

    <footer id="contact" aria-labelledby="contact-title" class="bg-ink pt-16 text-white md:pt-24">
      <div class="shell">
        <p class="eyebrow mb-6 text-mint">{{ t.contactLabel }}</p>
        <div class="grid gap-8 md:grid-cols-[1fr_300px] md:items-end">
          <div><h2 id="contact-title" class="section-heading">{{ t.contactTitle[0] }}<br /><span class="serif text-mint italic">{{ t.contactTitle[1] }}</span></h2><a :href="`mailto:${profile.email}`" class="contact-email mt-8 inline-block border-b border-mint/50 pb-2 text-[clamp(1rem,3vw,1.7rem)] text-mint hover:border-mint">{{ profile.email }}</a></div>
          <p class="text-base leading-relaxed text-slate-300">{{ t.contactText }}</p>
        </div>
        <nav :aria-label="t.socialLinks" class="mt-8 flex flex-wrap gap-6 text-sm">
          <a :href="profile.linkedin" class="inline-flex min-h-11 items-center gap-2 text-white hover:text-mint"><PhLinkedinLogo class="h-5 w-5 shrink-0" aria-hidden="true" focusable="false" />LinkedIn</a>
          <a :href="profile.github" class="inline-flex min-h-11 items-center gap-2 text-white hover:text-mint"><PhGithubLogo class="h-5 w-5 shrink-0" aria-hidden="true" focusable="false" />GitHub</a>
        </nav>
        <div class="mt-12 flex flex-wrap justify-between gap-5 border-t border-white/15 py-7 text-xs text-slate-400"><p>© {{ year }} {{ profile.name }}</p><p>{{ t.location }}</p><a href="#home" class="text-white hover:text-mint">{{ t.backToTop }}</a></div>
      </div>
    </footer>
  </div>
</template>
