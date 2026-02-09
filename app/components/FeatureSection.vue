<script setup lang="ts">
  import FeatureCard from './FeatureCard.vue';
  const { t } = useI18n();
  // Features section showcasing key product benefits
</script>

<template>
  <section id="features" class="bg-white py-20 dark:bg-background-dark/50">
    <div class="mx-auto max-w-[1200px] px-6 md:px-10">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-3">
        <FeatureCard
          icon-name="mdi:auto-mode"
          :title="t('features.intelligentGuard.title')"
          :description="t('features.intelligentGuard.description')"
        />
        <FeatureCard
          icon-name="mdi:clock-outline"
          :title="t('features.focusSchedules.title')"
          :description="t('features.focusSchedules.description')"
        />
        <FeatureCard
          icon-name="mdi:shield-lock"
          :title="t('features.privacyCentric.title')"
          :description="t('features.privacyCentric.description')"
        />
      </div>
    </div>
  </section>
</template>
