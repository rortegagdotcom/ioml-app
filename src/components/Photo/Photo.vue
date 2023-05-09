<script setup>
const props = defineProps({
  photo: Object,
});
</script>

<template>
  <div>
    <img class="p-2 rounded-2xl" :src="`${photo.filename}`" />
    <div class="flex flex-nowrap flex-row justify-around mt-2"></div>
  </div>
</template>

<style></style>
