<template>
  <main class="flex-grow">
    <div class="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {{ $t('contact.title') }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <!-- Contact Form -->
        <ContactForm />

        <!-- Sidebar Cards -->
        <ContactSidebar />
      </div>
    </div>
  </main>
</template>

<script setup>
  // Contact page main component
</script>
