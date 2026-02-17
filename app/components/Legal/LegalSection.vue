<template>
  <section :id="sectionId">
    <h2 class="text-2xl font-bold text-[#111418] dark:text-white mb-4 flex items-center gap-2">
      <span v-if="number" class="text-primary/40">{{ number }}.</span>
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup>
  defineProps({
    sectionId: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
  });
</script>
