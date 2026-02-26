<template>
  <div
    class="group flex flex-col p-8 rounded-xl bg-background-light dark:bg-background-dark border border-slate-200/60 dark:border-slate-800 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
  >
    <div
      class="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors"
    >
      <Icon :name="icon" class="text-3xl" />
    </div>
    <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
      {{ title }}
    </h3>
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    icon: string;
    title: string;
    description: string;
  }

  defineProps<Props>();
</script>
