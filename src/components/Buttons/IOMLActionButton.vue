<script setup>
import { ref } from 'vue';

const props = defineProps({
  action: Function,
  icon: String,
  altText: String,
  color: String,
});

const action = ref(props.action);
const icon = ref(props.icon);
const altText = ref(props.altText);
const color = ref(props.color);
</script>
<template>
  <button
    :class="`bg-gradient-to-br from-${color}-500 to-${color}-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-${color}-200 dark:focus:ring-${color}-800 font-medium rounded-full p-5`"
    @click.prevent="action"
  >
    <img class="h-10" :src="icon" :alt="altText" />
  </button>
</template>
