<script setup lang="ts">
const currentYear = new Date().getFullYear();
const {t} = useI18n();
</script>

<template>
  <footer class="border-t border-[#137fec]/10 bg-white pt-12 pb-6 dark:bg-background-dark">
    <div
      class="mx-auto mb-6 flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10"
    >
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-primary">tab_unselected</span>
        <span class="font-bold text-[#111418] dark:text-white">{{ t('appName') }}</span>
      </div>
      <div class="flex gap-8">
        <a class="text-sm font-medium text-[#617589] hover:text-primary" href="#terms">
          {{ t('footer.terms') }}
        </a>
        <a class="text-sm font-medium text-[#617589] hover:text-primary" href="#privacy">
          {{ t('footer.privacyPolicy') }}
        </a>
        <a class="text-sm font-medium text-[#617589] hover:text-primary" href="#contact">
          {{ t('footer.contact') }}
        </a>
      </div>
      <p class="text-sm text-[#617589]">{{ t('footer.copyright', {year: currentYear}) }}</p>
    </div>

    <div class="text-center text-sm text-[#617589]">
        Developed by <a href="https://sulton.dev/" target="_blank" class="text-green-500 hover:underline">sultondev</a>
    </div>
    </footer>
</template>

