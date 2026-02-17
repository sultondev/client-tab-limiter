<template>
  <div class="p-5 rounded-xl border border-primary/10 bg-primary/5 dark:bg-primary/10">
    <h4 class="font-bold text-[#111418] dark:text-white mb-2 flex items-center gap-2">
      <Icon :name="icon" class-name="text-primary text-xl" />
      {{ title }}
    </h4>
    <p class="text-sm text-slate-700 dark:text-slate-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    icon: {
      type: String,
      required: true,
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
