<script setup>
import { ref } from 'vue';

const props = defineProps({
  icon: String,
  altText: String,
});

const icon = ref(props.icon);
const altText = ref(props.altText);
</script>
<template>
  <button
    class="p-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
  >
    <img class="h-10" :src="icon" :alt="altText" />
  </button>
</template>
