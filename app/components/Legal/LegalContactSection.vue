<template>
  <section
    class="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl border border-primary/20"
    :id="sectionId"
  >
    <h2 class="text-2xl font-bold text-[#111418] dark:text-white mb-4">
      {{ title }}
    </h2>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      {{ description }}
    </p>
    <div class="flex flex-col sm:flex-row gap-4">
      <button
        @click="handlePrimaryAction"
        class="flex items-center justify-center gap-2 bg-[#111418] text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-all"
      >
        <Icon :name="primaryIcon" class="text-sm" />
        {{ primaryLabel }}
      </button>
      <button
        @click="handleSecondaryAction"
        class="flex items-center justify-center gap-2 bg-white dark:bg-[#1a242f] border border-slate-200 dark:border-slate-700 text-[#111418] dark:text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
      >
        <Icon :name="secondaryIcon" class="text-sm" />
        {{ secondaryLabel }}
      </button>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    sectionId: {
      type: String,
      default: 'contact',
    },
    title: {
      type: String,
      default: 'Questions?',
    },
    description: {
      type: String,
      required: true,
    },
    primaryLabel: {
      type: String,
      default: 'Email Legal Team',
    },
    primaryIcon: {
      type: String,
      default: 'mdi:email',
    },
    secondaryLabel: {
      type: String,
      default: 'Contact Support',
    },
    secondaryIcon: {
      type: String,
      default: 'mdi:headset',
    },
    primaryAction: {
      type: Function,
      default: null,
    },
    secondaryAction: {
      type: Function,
      default: null,
    },
  });

  const handlePrimaryAction = () => {
    if (props.primaryAction) {
      props.primaryAction();
    } else {
      window.location.href = 'mailto:legal@tablimiter.com';
    }
  };

  const handleSecondaryAction = () => {
    if (props.secondaryAction) {
      props.secondaryAction();
    } else {
      window.location.href = '/contact';
    }
  };
</script>
