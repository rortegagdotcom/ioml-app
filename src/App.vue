<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />

  <main class="min-h-screen px-12 py-5 bg-gray-50 dark:bg-gray-800">
    <router-view />
  </main>

  <Footer />
</template>

<style></style>
