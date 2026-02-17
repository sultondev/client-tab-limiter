<script setup lang="ts">
  // Root component for the Tab Limiter landing page
  import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <NuxtLoadingIndicator color="blue" />
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
