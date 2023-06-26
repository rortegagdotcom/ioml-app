<script setup>
import { inject } from 'vue';

const showComponents = inject('showComponents');

const date = new Date();
const year = date.getFullYear();
</script>

<template>
  <footer
    class="flex justify-center sticky w-full bg-gray-100 dark:bg-gray-900"
    v-show="showComponents"
  >
    <p class="text-gray-900 dark:text-gray-50">
      <router-link to="/about">{{ year }} IOML App</router-link>
    </p>
  </footer>
</template>

<style></style>
