<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  id: String,
  updateText: String,
  createText: String,
});
</script>
<template>
  <button
    class="text-gray-50 bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
    type="submit"
  >
    {{ id ? t(updateText) : t(createText) }}
  </button>
</template>
