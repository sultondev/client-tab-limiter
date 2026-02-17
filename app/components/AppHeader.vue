<script setup lang="ts">
  import LanguageSwitcher from './LanguageSwitcher.vue';

  // Header component with navigation
  const { t } = useI18n();
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-solid border-[#137fec]/10 bg-white/80 backdrop-blur-md dark:bg-background-dark/80"
  >
    <div class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
          <Icon name="mdi:tab-unselected" class="text-2xl" />
        </div>
        <NuxtLinkLocale to="/" class="text-base font-bold tracking-tight text-primary">{{
          t('appName')
        }}</NuxtLinkLocale>
      </div>
      <nav class="hidden flex-1 justify-center gap-10 md:flex">
        <NuxtLinkLocale
          class="text-sm font-semibold text-[#617589] hover:text-primary transition-colors"
          to="/"
        >
          {{ t('nav.features') }}
        </NuxtLinkLocale>
        <a
          class="text-sm font-semibold text-[#617589] hover:text-primary transition-colors"
          href="#how-it-works"
        >
          {{ t('nav.howItWorks') }}
        </a>
        <NuxtLinkLocale
          class="text-sm font-semibold text-[#617589] hover:text-primary transition-colors"
          to="/privacy"
        >
          {{ t('nav.privacy') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale
          to="/contact"
          class="text-sm font-semibold text-[#617589] hover:text-primary transition-colors"
        >
          {{ t('footer.contact') }}
        </NuxtLinkLocale>
      </nav>
      <div class="flex items-center gap-4">
        <LanguageSwitcher />
        <!-- <button
          class="flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90"
        >
          {{ t('nav.getStarted') }}
        </button> -->
      </div>
    </div>
  </header>
</template>
