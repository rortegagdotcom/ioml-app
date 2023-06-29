<script setup>
import { ref } from 'vue';

const props = defineProps({
  action: Function,
  icon: String,
  altText: String,
});

const action = ref(props.action);
const icon = ref(props.icon);
const altText = ref(props.altText);
</script>
<template>
  <button
    class="bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-full p-5"
    @click.prevent="action"
  >
    <img class="h-10" :src="icon" :alt="altText" />
  </button>
</template>
