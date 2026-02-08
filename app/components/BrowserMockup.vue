<script setup lang="ts">
  // Browser mockup visualization component
  const { t } = useI18n();
</script>

<template>
  <div class="relative w-full flex-1 md:w-auto">
    <!-- Decorative Background Element -->
    <div class="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
    <div class="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

    <!-- Browser Window Mockup -->
    <div
      class="relative overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#1a242f]"
    >
      <!-- Toolbar -->
      <div
        class="flex items-center gap-3 border-b border-primary/5 bg-[#f8fafc] px-4 py-3 dark:bg-[#111922]"
      >
        <div class="flex gap-1.5">
          <div class="h-3 w-3 rounded-full bg-red-400" />
          <div class="h-3 w-3 rounded-full bg-yellow-400" />
          <div class="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div class="flex flex-1 items-center justify-center">
          <div
            class="h-6 w-full max-w-[300px] rounded-md bg-white border border-primary/5 dark:bg-background-dark"
          />
        </div>
      </div>

      <!-- Browser Tabs -->
      <div class="flex h-10 items-end bg-[#f1f5f9] px-2 dark:bg-[#0d141c]">
        <div
          class="flex h-8 w-32 items-center justify-center gap-2 rounded-t-lg bg-white px-3 text-[10px] font-semibold text-primary dark:bg-[#1a242f]"
        >
          <span class="material-symbols-outlined text-xs">code</span>
          {{ t('browser.projectBeta') }}
        </div>
        <div
          class="flex h-8 w-32 items-center justify-center gap-2 px-3 text-[10px] font-medium text-[#617589]"
        >
          <span class="material-symbols-outlined text-xs">description</span>
          {{ t('browser.docs') }}
        </div>
        <div class="ml-2 flex h-8 items-center px-2 text-[#137fec]">
          <span class="material-symbols-outlined text-lg">add</span>
        </div>
      </div>

      <!-- Main Product Feature Highlight (Overlay) -->
      <div class="flex aspect-[4/3] flex-col items-center justify-center p-10">
        <div
          class="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10"
        >
          <span class="material-symbols-outlined text-5xl text-primary">do_not_disturb_on</span>
          <div
            class="absolute -right-2 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-xs ring-4 ring-white"
          >
            5/5
          </div>
        </div>
        <h3 class="mb-2 text-base font-bold">
          {{ t('browser.limitReached') }}
        </h3>
        <p class="text-center text-sm text-[#617589]">
          {{ t('browser.limitDescription') }}
        </p>
        <div class="mt-8 grid w-full grid-cols-2 gap-4">
          <div class="h-20 rounded-lg bg-primary/5 border border-primary/10" />
          <div class="h-20 rounded-lg bg-primary/5 border border-primary/10" />
        </div>
      </div>
    </div>

    <!-- Floating Stat Badge -->
    <div
      class="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl dark:bg-[#1a242f]"
    >
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600"
      >
        <span class="material-symbols-outlined">trending_up</span>
      </div>
      <div>
        <div class="text-xs font-bold text-[#617589]">
          {{ t('stats.productivityBoost') }}
        </div>
        <div class="text-lg font-black text-[#111418] dark:text-white">
          {{ t('stats.focusIncrease') }}
        </div>
      </div>
    </div>
  </div>
</template>
