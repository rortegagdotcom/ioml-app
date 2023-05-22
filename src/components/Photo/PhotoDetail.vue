<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
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
</script>

<template>
  <div class="text-gray-900 dark:text-gray-200">
    <h1 class="text-center text-xl pb-5" v-if="photos">{{ photos[0].name }}</h1>
    <div className="flex relative justify-center" v-if="photos">
      <img
        class="object-cover rounded-xl w-full 2xl:w-1/2"
        :src="`${photos[0].filename}`"
        :alt="`${photos[0].name}`"
      />
    </div>
  </div>
</template>

<style></style>
