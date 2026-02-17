// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'nuxt-delay-hydration',
    '@nuxtjs/i18n',
    'nuxt-typed-router',
    '@nuxt/icon',
    '@nuxtjs/eslint-module',
  ],
  tailwindcss: {
    exposeConfig: true,
    config: ['./tailwind.config.ts'],
  },
  i18n: {
    locales: [
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'ms', name: 'Bahasa Melayu', file: 'ms.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'uz', name: 'Oʻzbekcha', file: 'uz.json' },
      { code: 'zh', name: '中文', file: 'zh.json' },
    ],
    defaultLocale: 'en',
    langDir: './locales/',
  },
  app: {
    head: {
      title: 'Tab Limiter - Reclaim your focus',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Stop tab-overload from killing your productivity. Tab Limiter helps developers and students stay in the flow by intelligently managing browser clutter.',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
        },
      ],
    },
  },
});
