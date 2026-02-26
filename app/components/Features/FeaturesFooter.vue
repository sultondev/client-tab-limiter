<script setup lang="ts">
  import { computed } from 'vue';

  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  interface FooterLink {
    label: string;
    to: string;
  }

  interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }

  const footerLinks = computed<FooterLink[]>(() => [
    { label: t('features.footer.links.privacy'), to: '/privacy' },
    { label: t('features.footer.links.terms'), to: '/terms' },
    { label: t('features.footer.links.changelog'), to: '/changelog' },
    { label: t('features.footer.links.contact'), to: '/contact' },
  ]);

  const socialLinks: SocialLink[] = [
    { name: 'Twitter', url: '#', icon: 'mdi:twitter' },
    { name: 'Email', url: 'mailto:hello@tablimiter.com', icon: 'mdi:email' },
  ];
</script>

<template>
  <footer
    class="flex flex-col gap-10 px-6 md:px-20 py-16 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800"
  >
    <div class="flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-3">
        <div class="size-6 bg-primary rounded text-white flex items-center justify-center">
          <Icon name="mdi:layers" class="text-sm" />
        </div>
        <span class="font-bold text-lg text-slate-900 dark:text-white">Tab Limiter</span>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-8">
        <NuxtLink
          v-for="link in footerLinks"
          :key="link.to"
          :to="link.to"
          class="text-slate-500 hover:text-primary text-sm font-medium transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="flex gap-4">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          :aria-label="social.name"
          class="size-10 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-primary transition-all"
        >
          <IconifyIcon :icon="social.icon" class="text-[20px]" />
        </a>
      </div>
    </div>

    <div class="text-center pt-8 border-t border-slate-50 dark:border-slate-800/50">
      <p class="text-slate-400 text-sm">
        {{ t('footer.copyright', { year: currentYear }) }}
      </p>
    </div>
  </footer>
</template>
