<template>
  <div class="flex flex-col gap-4">
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
      <span class="material-symbols-outlined text-3xl">{{ icon }}</span>
    </div>
    <h4 class="text-base font-bold">{{ title }}</h4>
    <p class="text-[#617589]">
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
