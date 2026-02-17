<template>
  <li class="flex gap-4" :class="{ 'text-slate-400': disabled }">
    <Icon :name="icon" :class-name="`mt-1 ${iconClass}`" />
    <div>
      <strong
        class="text-[#111418] dark:text-white"
        :class="{ 'text-slate-500 line-through': disabled }"
      >
        {{ title }}
      </strong>
      {{ description }}
    </div>
  </li>
</template>

<script setup>
  defineProps({
    icon: {
      type: String,
      default: 'mdi:check-circle',
    },
    iconClass: {
      type: String,
      default: 'text-primary',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });
</script>
