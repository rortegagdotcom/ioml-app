<script setup>
const date = new Date();
const year = date.getFullYear();
</script>

<template>
  <footer
    class="flex justify-center sticky top-[100vh] w-full bg-gray-100 dark:bg-gray-900"
  >
    <p class="text-black dark:text-white">
      <router-link to="/about">{{ year }} IOML App</router-link>
    </p>
  </footer>
</template>

<style></style>
