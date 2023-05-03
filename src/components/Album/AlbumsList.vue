<script setup>
import { ref, watchEffect } from 'vue';
import axios from 'axios';
import Album from './Album.vue';

const albums = ref(null);

watchEffect(async () => {
  await axios
    .get('http://localhost:5748/api/albums')
    .then((res) => {
      albums.value = res.data[0];
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <div class="flex flex-wrap justify-center gap-5 text-black dark:text-white">
    <Album v-for="album in albums" :album="album" :key="album.id" />
  </div>
</template>
