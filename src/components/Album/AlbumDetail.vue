<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Photo from '../Photo/Photo.vue';

const route = useRoute();
const albums = ref(null);
const photos = ref(null);
const albumId = route.params.albumid;

watchEffect(async () => {
  if (albumId) {
    await axios
      .get(`http://localhost:5748/api/albums/${albumId}`)
      .then((res) => {
        albums.value = res.data[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

watchEffect(async () => {
  if (albums) {
    await axios
      .get(`http://localhost:5748/api/albums/${albumId}/photos`)
      .then((res) => {
        photos.value = res.data[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
</script>

<template>
  <h1
    class="text-center text-2xl font-bold text-gray-900 m-5 dark:text-gray-100"
    v-if="albums"
  >
    {{ albums[0].name }}
  </h1>
  <h2
    class="text-center text-2xl font-bold text-gray-900 m-5 dark:text-gray-100"
    v-if="photos < 1"
  >
    There are no photos available
  </h2>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    v-else
  >
    <Photo
      v-for="photo in photos"
      :albumId="`${albums[0].id}`"
      :photo="photo"
      :key="photo.id"
    />
  </div>
</template>

<style></style>
