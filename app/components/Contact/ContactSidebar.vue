<template>
  <div class="flex flex-col gap-6">
    <!-- General Inquiries Card -->
    <div class="bg-white dark:bg-[#1a242f] p-6 rounded-xl border border-primary/10 shadow-sm">
      <div class="flex items-center gap-4 mb-4">
        <div class="bg-primary/10 p-3 rounded-lg text-primary">
          <Icon name="mdi:forum" />
        </div>
        <h3 class="font-bold text-lg">{{ $t('contact.sidebar.general.title') }}</h3>
      </div>
      <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
        {{ $t('contact.sidebar.general.description') }}
      </p>
      <a
        class="text-primary font-semibold flex items-center gap-2 text-sm hover:underline"
        href="mailto:hello@tablimiter.com"
      >
        hello@tablimiter.com
        <span class="material-symbols-outlined text-xs">arrow_forward_ios</span>
      </a>
    </div>

    <!-- Technical Support Card -->
    <div class="bg-white dark:bg-[#1a242f] p-6 rounded-xl border border-primary/10 shadow-sm">
      <div class="flex items-center gap-4 mb-4">
        <div class="bg-primary/10 p-3 rounded-lg text-primary">
          <Icon name="mdi:bug" class="text-xl" />
        </div>
        <h3 class="font-bold text-lg">{{ $t('contact.sidebar.support.title') }}</h3>
      </div>
      <p class="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">
        {{ $t('contact.sidebar.support.description') }}
      </p>
      <a
        class="text-primary font-semibold flex items-center gap-2 text-sm hover:underline"
        href="mailto:support@tablimiter.com"
      >
        support@tablimiter.com
        <span class="material-symbols-outlined text-xs">arrow_forward_ios</span>
      </a>
    </div>

    <!-- FAQ CTA -->
    <div class="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20">
      <p class="text-sm font-medium mb-3">
        {{ $t('contact.sidebar.faq.question') }}
      </p>
      <a
        class="inline-flex items-center gap-2 text-sm text-primary font-bold hover:gap-3 transition-all"
        href="#"
      >
        {{ $t('contact.sidebar.faq.link') }}
        <Icon name="mdi:open-in-new" class="text-xl" />
      </a>
    </div>
  </div>
</template>

<script setup>
  // Contact sidebar with support cards
</script>
