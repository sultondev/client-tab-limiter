<template>
  <div class="mb-12">
    <div
      class="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4"
    >
      <Icon name="mdi:history" class-name="text-xs mr-1" />
      {{ badge }}
    </div>
    <h1
      class="text-4xl md:text-5xl font-black text-[#111418] dark:text-white tracking-tight leading-tight mb-6"
    >
      {{ title }}
    </h1>
    <p class="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    badge: {
      type: String,
      default: 'LAST UPDATED: OCTOBER 24, 2023',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
</script>
