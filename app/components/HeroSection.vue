<script setup lang="ts">
  // Hero section with main CTA
  const { t } = useI18n();
</script>

<template>
  <main class="flex-1 pt-24 text-base">
    <div
      class="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 py-16 md:flex-row md:px-10 lg:py-22"
    >
      <!-- Left Content -->
      <div class="flex flex-1 flex-col items-start gap-8 text-left">
        <div
          class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary"
        >
          <Icon name="mdi:lightning-bolt" class="text-sm" />
          {{ t('hero.badge') }}
        </div>
        <div class="flex flex-col gap-4">
          <h1
            class="font-display text-5xl font-black leading-[1] tracking-[-0.04em] text-[#111418] dark:text-white lg:text-7xl"
          >
            <i18n-t keypath="hero.title" tag="span">
              <template #highlight>
                <span class="text-primary">
                  {{ $t('hero.titleHighlight') }}
                </span>
              </template>
            </i18n-t>
          </h1>
          <p class="max-w-[540px] text-lg font-medium leading-relaxed text-[#617589] lg:text-base">
            {{ t('hero.subtitle') }}
          </p>
        </div>
        <div class="flex flex-wrap gap-4">
          <button
            class="cta-shadow flex min-w-[200px] items-center justify-center gap-3 rounded-xl bg-primary px-8 py-5 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Icon name="mdi:puzzle" />
            {{ t('hero.addToChrome') }}
          </button>
          <!-- <button
            class="flex items-center justify-center gap-2 rounded-xl border-2 border-primary/20 bg-white/50 px-8 py-5 text-lg font-bold text-[#111418] hover:bg-white transition-colors"
          >
            {{ t('hero.viewDemo') }}
          </button> -->
        </div>
        <div class="flex items-center gap-6 pt-4 text-[#617589]">
          <div class="flex items-center gap-2">
            <Icon name="mdi:check-circle" class="text-green-500 text-xl" />
            <span class="text-sm font-medium">{{ t('hero.freeForever') }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:check-circle" class="text-green-500 text-xl" />
            <span class="text-sm font-medium">{{ t('hero.noTracking') }}</span>
          </div>
        </div>
      </div>

      <!-- Right Visual: Browser Mockup -->
      <BrowserMockup />
    </div>
  </main>
</template>
