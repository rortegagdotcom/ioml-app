<script setup>
const props = defineProps({
  album: Object,
});
</script>

<template>
  <div
    class="block w-80 h-80 p-5 bg-domino-1 first:border border-gray-200 rounded-lg shadow dark:border-gray-700 cursor-pointer"
  >
    <h3 class="mb-2 text-2xl font-bold text-center">
      {{ album.name }}
    </h3>
  </div>
</template>

<style></style>
