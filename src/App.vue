<script setup>
import { ref, provide } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import 'vue3-toastify/dist/index.css';

const showComponents = ref(true);
provide('showComponents', showComponents);
</script>

<template>
  <Header />

  <main class="min-h-screen px-12 py-5 bg-gray-50 dark:bg-gray-800">
    <router-view />
  </main>

  <Footer />
</template>

<style></style>
