<script>
import { ref, watchEffect } from 'vue';
import axios from 'axios';
import Album from './Album.vue';

export default {
  setup() {
    const albums = ref(null);

    watchEffect(async () => {
      await await axios
        .get('http://localhost:5748/api/albums')
        .then((res) => {
          albums.value = res.data[0];
        })
        .catch((error) => {
          console.error(error);
        });
    });
  },
};
</script>

<template>
  <div class="grid grid-auto-columns gap-4 justify-items-center">
    <Album v-for="album in albums" :album="album" :key="album.id" />
  </div>
</template>
