<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const albumId = computed(() => route.params.id);
</script>

<template>
  <div class="text-black dark:text-white">
    <h1 class="text-center">Are you sure to delete {{ albumId }}?</h1>
    <div class="flex flex-wrap flex-row justify-around">
      <button
        class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
      >
        No
      </button>
      <button
        class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
      >
        Yes
      </button>
    </div>
  </div>
</template>

<style></style>
