<script setup>
import { ref, watchEffect } from 'vue';
import axios from 'axios';
import Album from './Album.vue';

const albums = ref(null);

watchEffect(async () => {
  await axios
    .get('http://192.168.100.82:5748/api/albums')
    .then((res) => {
      albums.value = res.data[0];
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <h1
    class="text-center text-2xl font-bold text-gray-900 dark:text-gray-50"
    v-if="albums < 1"
  >
    There are no albums available
  </h1>
  <div class="flex flex-wrap justify-center gap-12" v-else>
    <Album v-for="album in albums" :album="album" :key="album.id" />
  </div>
</template>
