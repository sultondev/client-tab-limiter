<template>
  <div
    class="lg:col-span-2 bg-white dark:bg-[#1a242f] rounded-xl border border-primary/10 p-8 shadow-sm"
  >
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-semibold" for="full-name">
            {{ $t('contact.form.fullName') }}
          </label>
          <input
            id="full-name"
            v-model="formData.fullName"
            class="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            :placeholder="$t('contact.form.fullNamePlaceholder')"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-semibold" for="email">
            {{ $t('contact.form.email') }}
          </label>
          <input
            id="email"
            v-model="formData.email"
            class="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            :placeholder="$t('contact.form.emailPlaceholder')"
            type="email"
            required
          />
        </div>
      </div>

      <CustomDropdown
        id="subject"
        v-model="formData.subject"
        :label="$t('contact.form.subject')"
        :options="subjectOptions"
        :placeholder="$t('contact.form.subject')"
        :required="true"
      />

      <div class="flex flex-col gap-2">
        <label class="text-sm font-semibold" for="message">
          {{ $t('contact.form.message') }}
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          class="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
          :placeholder="$t('contact.form.messagePlaceholder')"
          rows="5"
          required
        />
      </div>

      <button
        class="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
        type="submit"
      >
        {{ $t('contact.form.submit') }}
        <Icon name="mdi:send" class-name="text-sm group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import CustomDropdown from '../Form/CustomDropdown.vue';

  const { t } = useI18n();

  const formData = ref({
    fullName: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const subjectOptions = computed(() => [
    { value: 'general', label: t('contact.form.subjects.general') },
    { value: 'support', label: t('contact.form.subjects.support') },
    { value: 'feedback', label: t('contact.form.subjects.feedback') },
    { value: 'other', label: t('contact.form.subjects.other') },
  ]);

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData.value);
    // Add your form submission logic here
  };
</script>
