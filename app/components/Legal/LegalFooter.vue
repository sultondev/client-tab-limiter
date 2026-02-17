<template>
  <div
    class="mt-24 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400"
  >
    <p>{{ copyright }}</p>
    <div class="flex gap-6">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        class="hover:text-primary transition-colors"
        :href="link.url"
        :aria-label="link.name"
      >
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    copyright: {
      type: String,
      default: '© 2024 Tab Limiter Extension. All rights reserved.',
    },
    socialLinks: {
      type: Array,
      default: () => [
        { name: 'Twitter', url: '#' },
        { name: 'GitHub', url: '#' },
        { name: 'LinkedIn', url: '#' },
      ],
    },
  });
</script>
