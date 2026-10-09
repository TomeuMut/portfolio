<script setup lang="ts">
import { isLanguage } from '../../src/data/i18n';
const route = useRoute();
const language = computed(() => {
  if (!isLanguage(route.params.lang)) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found' });
  }
  return route.params.lang;
});
</script>

<template><PortfolioPage :language="language" /></template>
