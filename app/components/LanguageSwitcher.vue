<template>
  <div ref="dropdownRef" class="relative">
    <button
      class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#617589] hover:text-primary hover:bg-primary/5 transition-colors"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click="toggleDropdown"
    >
      <span class="material-symbols-outlined text-lg">language</span>
      <span class="hidden md:inline">{{ currentLanguage.name }}</span>
      <span class="material-symbols-outlined text-sm transition-transform" :class="{ 'rotate-180': isOpen }">
        expand_more
      </span>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-[#1a242f] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      >
        <div class="py-1" role="menu">
          <button
            v-for="lang in languages"
            :key="lang.code"
            class="flex w-full items-center gap-3 px-4 py-2.5 text-sm hover:bg-primary/10 transition-colors"
            :class="{
              'bg-primary/5 text-primary font-semibold': currentLocale === lang.code,
              'text-[#617589]': currentLocale !== lang.code
            }"
            role="menuitem"
            @click="switchLanguage(lang.code)"
          >
            <span class="text-xl">{{ lang.flag }}</span>
            <span>{{ lang.name }}</span>
            <span
              v-if="currentLocale === lang.code"
              class="material-symbols-outlined ml-auto text-primary text-lg"
            >
              check
            </span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale, setLocale } = useI18n()

const isOpen = ref(false)
const dropdownRef = ref(null)

// Language options with flags
const languages = computed(() => [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: 'O‘zbekcha', flag: '🇺🇿' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
])
const currentLocale = computed(() => locale.value)

const currentLanguage = computed(() => {
  return languages.value.find(lang => lang.code === currentLocale.value) || languages.value[0]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = (code) => {
  setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
