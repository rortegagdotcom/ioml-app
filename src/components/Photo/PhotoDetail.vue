<script setup>
import { ref, inject, onMounted, onUnmounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const photos = ref(null);
const albumId = route.params.albumid;
const photoId = route.params.photoid;

watchEffect(async () => {
  if (albumId && photoId) {
    await axios
      .get(`http://localhost:5748/api/albums/${albumId}/photo/${photoId}`)
      .then((res) => {
        photos.value = res.data[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

const showComponents = inject('showComponents');

onMounted(() => {
  showComponents.value = false;
});

onUnmounted(() => {
  showComponents.value = true;
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full z-50">
    <div class="flex justify-center items-center w-full h-screen" v-if="photos">
      <img
        class="max-w-full max-h-full"
        :src="photos[0].filename"
        :alt="photos[0].name"
      />
    </div>
  </div>
</template>

<style></style>
