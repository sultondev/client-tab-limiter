<script setup lang="ts">
  import { computed } from 'vue';
  import FeatureCardGrid from './FeatureCardGrid.vue';

  const { t } = useI18n();

  interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
  }

  const features = computed<Feature[]>(() => [
    {
      id: 'tab-limits',
      icon: 'mdi:tab',
      title: t('features.grid.items.tabLimits.title'),
      description: t('features.grid.items.tabLimits.description'),
    },
    {
      id: 'per-domain',
      icon: 'mdi:web',
      title: t('features.grid.items.perDomain.title'),
      description: t('features.grid.items.perDomain.description'),
    },
    {
      id: 'countdown',
      icon: 'mdi:timer-outline',
      title: t('features.grid.items.countdown.title'),
      description: t('features.grid.items.countdown.description'),
    },
    {
      id: 'url-blocking',
      icon: 'mdi:block-helper',
      title: t('features.grid.items.urlBlocking.title'),
      description: t('features.grid.items.urlBlocking.description'),
    },
  ]);
</script>

<template>
  <section
    class="w-full bg-white dark:bg-slate-900/50 py-20 md:py-32 border-t border-slate-100 dark:border-slate-800"
  >
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          {{ $t('features.grid.title') }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          {{ $t('features.grid.subtitle') }}
        </p>
      </div>

      <!-- 2x2 Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <FeatureCardGrid
          v-for="feature in features"
          :key="feature.id"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>
