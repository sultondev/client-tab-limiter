<script setup lang="ts">
  // Features call-to-action section
  function openExtensionPage() {
    window.open(
      'https://chromewebstore.google.com/detail/tab-limiter-%E2%80%93-tab-manager/cefponhjhdndnnbjjhmdplbhbpopblbc',
      '_blank'
    );
  }
</script>

<template>
  <section class="w-full py-20 bg-primary/5 dark:bg-primary/10">
    <div class="max-w-[1200px] mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
        {{ $t('features.cta.title') }}
      </h2>
      <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
        {{ $t('features.cta.description') }}
      </p>
      <button
        @click="openExtensionPage()"
        class="h-12 px-10 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all"
      >
        {{ $t('features.cta.button') }}
      </button>
    </div>
  </section>
</template>
