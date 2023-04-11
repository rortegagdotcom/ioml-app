<script setup>
const date = new Date();
const year = date.getFullYear();
</script>

<template>
  <footer
    class="flex justify-center sticky w-full bg-gray-200 dark:bg-gray-900"
  >
    <p class="text-gray-900 dark:text-gray-200">
      <router-link to="/about">{{ year }} IOML App</router-link>
    </p>
  </footer>
</template>

<style></style>
