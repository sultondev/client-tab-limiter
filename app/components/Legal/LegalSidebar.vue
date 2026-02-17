<template>
  <aside
    class="w-full md:w-80 p-6 md:p-10 md:sticky md:top-16 md:h-[calc(100vh-64px)] overflow-y-auto hide-scrollbar flex flex-col gap-8 border-r border-primary/5"
  >
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-3">
        <div class="bg-primary/10 p-2 rounded-lg">
          <Icon name="mdi:gavel" class-name="text-primary text-xl" />
        </div>
        <div>
          <h3 class="text-sm font-bold text-[#111418] uppercase tracking-wider">
            {{ title }}
          </h3>
          <p class="text-xs text-primary/60 font-medium">{{ version }}</p>
        </div>
      </div>
      <nav class="flex flex-col gap-2">
        <NuxtLink
          v-for="item in navItems"
          :key="item.id"
          :to="item.to"
          :href="item.href"
          class="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-primary/5"
          :class="{
            'bg-primary/10 border border-primary/20': isActive(item.id),
          }"
        >
          <Icon
            :name="item.icon"
            :class-name="
              isActive(item.id) ? 'text-primary' : 'text-slate-400 group-hover:text-primary'
            "
          />
          <span
            class="text-sm font-semibold"
            :class="isActive(item.id) ? 'text-primary' : 'text-slate-600 group-hover:text-primary'"
          >
            {{ item.label }}
          </span>
        </NuxtLink>
      </nav>
    </div>

    <!-- Reading Progress (Optional) -->
    <div v-if="showProgress" class="pt-6 border-t border-primary/5">
      <div class="bg-white dark:bg-[#1a242f] p-4 rounded-xl shadow-sm border border-primary/5">
        <div class="flex justify-between items-end mb-2">
          <span class="text-xs font-bold text-slate-500">READING PROGRESS</span>
          <span class="text-xs font-bold text-primary">{{ readingProgress }}%</span>
        </div>
        <div class="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full bg-primary" :style="{ width: `${readingProgress}%` }"></div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      default: 'Legal Center',
    },
    version: {
      type: String,
      default: 'Version 1.2.0',
    },
    navItems: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(
          (item) =>
            'id' in item && 'label' in item && 'icon' in item && ('to' in item || 'href' in item)
        );
      },
    },
    activeItem: {
      type: String,
      default: '',
    },
    showProgress: {
      type: Boolean,
      default: true,
    },
  });

  const readingProgress = ref(0);

  const isActive = (itemId) => {
    return props.activeItem === itemId;
  };

  // Calculate reading progress based on scroll position
  const updateReadingProgress = () => {
    const article = document.querySelector('article');
    if (!article) return;

    const scrollTop = window.scrollY;
    const docHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

    readingProgress.value = Math.min(Math.max(Math.round(scrollPercent), 0), 100);
  };

  onMounted(() => {
    if (props.showProgress) {
      window.addEventListener('scroll', updateReadingProgress);
      updateReadingProgress();
    }
  });

  onUnmounted(() => {
    if (props.showProgress) {
      window.removeEventListener('scroll', updateReadingProgress);
    }
  });
</script>

<style scoped>
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
