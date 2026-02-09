<script setup lang="ts">
  import type { FeatureCardPropTypes } from '~/types/interfaces/components/feature-card.types';

  const { iconName, title, description } = defineProps<FeatureCardPropTypes>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <Icon :name="iconName" class="text-3xl" />
    </div>
    <h4 class="text-base font-bold">{{ title }}</h4>
    <p class="text-[#617589]">
      {{ description }}
    </p>
  </div>
</template>
