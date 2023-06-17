<script setup>
import { inject } from 'vue';
import Navbar from './Navbar.vue';

const showComponents = inject('showComponents');
</script>

<template>
  <header v-show="showComponents">
    <Navbar />
  </header>
</template>

<style></style>
