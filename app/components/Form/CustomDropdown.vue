<template>
  <div ref="dropdownRef" class="relative">
    <label v-if="label" class="text-sm font-semibold mb-2 block" :for="id">
      {{ label }}
    </label>

    <button
      :id="id"
      type="button"
      class="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all flex items-center justify-between"
      :class="{ 'border-primary ring-1 ring-primary': isOpen }"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggleDropdown"
    >
      <span class="text-left" :class="{ 'text-slate-400': !selectedOption }">
        {{ selectedOption ? selectedOption.label : placeholder }}
      </span>
      <Icon
        name="mdi:chevron-down"
        class-name="text-lg text transition-all duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
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
        class="absolute z-50 w-full mt-1 rounded-lg bg-white dark:bg-[#1a242f] shadow-lg ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto"
        role="listbox"
      >
        <div class="py-1">
          <button
            v-for="option in options"
            :key="option.value"
            type="button"
            class="w-full text-left px-4 py-2.5 text-sm hover:bg-primary/10 transition-colors flex items-center justify-between"
            :class="{
              'bg-primary/5 text-primary font-semibold': modelValue === option.value,
              'text-slate-700 dark:text-slate-300': modelValue !== option.value,
            }"
            role="option"
            :aria-selected="modelValue === option.value"
            @click="selectOption(option)"
          >
            <span>{{ option.label }}</span>
            <Icon
              v-if="modelValue === option.value"
              name="mdi:check"
              class-name="text-lg text-primary"
            />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  const props = defineProps({
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(
          (option) => typeof option === 'object' && 'value' in option && 'label' in option
        );
      },
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
    id: {
      type: String,
      default: () => `dropdown-${Math.random().toString(36).substr(2, 9)}`,
    },
    required: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const isOpen = ref(false);
  const dropdownRef = ref(null);

  const selectedOption = computed(() => {
    return props.options.find((option) => option.value === props.modelValue);
  });

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const selectOption = (option) => {
    emit('update:modelValue', option.value);
    isOpen.value = false;
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      isOpen.value = false;
    }
  };

  // Close dropdown on escape key
  const handleEscape = (event) => {
    if (event.key === 'Escape' && isOpen.value) {
      isOpen.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscape);
  });
</script>
