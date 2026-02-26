<script setup lang="ts">
  // Features hero section with main CTA
  function openExtensionPage() {
    window.open(
      'https://chromewebstore.google.com/detail/tab-limiter-%E2%80%93-tab-manager/cefponhjhdndnnbjjhmdplbhbpopblbc',
      '_blank'
    );
  }
</script>

<template>
  <section class="w-full max-w-[1200px] px-6 py-16 md:py-24 text-center">
    <div
      class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-6"
    >
      <Icon name="mdi:check-decagram" class="text-sm" />
      {{ $t('features.hero.badge') }}
    </div>
    <h1
      class="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-[1.1]"
    >
      {{ $t('features.hero.title') }} <br />
      <span class="text-primary">{{ $t('features.hero.titleHighlight') }}</span>
    </h1>
    <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
      {{ $t('features.hero.description') }}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        @click="openExtensionPage()"
        class="h-12 px-8 bg-primary cursor-pointer text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
      >
        {{ $t('features.hero.primaryButton') }}
        <Icon name="mdi:arrow-right" class="text-xl" />
      </button>
      <!-- <button
        class="h-12 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
      >
        {{ $t('features.hero.secondaryButton') }}
      </button> -->
    </div>
  </section>
</template>
