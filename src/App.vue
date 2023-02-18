<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />

  <main class="px-12 py-5">
    <router-view />
  </main>

  <Footer />
</template>

<style></style>
