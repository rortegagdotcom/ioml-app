<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const photos = ref(null);
const albumId = route.params.albumid;
const photoId = route.params.photoId;

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

function goBack() {
  router.go(-1);
}

async function handleDeletePhoto() {
  await axios
    .delete(`http://localhost:5748/api/photos/${photoId}`)
    .then(() => {
      console.log('Photo deleted');
    })
    .catch((error) => {
      console.log('Error when deleting photo', error);
    });

  router.go(-1);
}
</script>

<template>
  <div class="text-black dark:text-white">
    <h1 class="text-center text-xl pb-2">Are you sure to delete?</h1>
    <div class="flex justify-center pb-10" v-if="photos">
      <img
        class="w-full h-full object-cover rounded-xl"
        @click="toggleOverlay"
        :src="`${photos[0].filename}`"
      />
      <p class="text-center">{{ photos[0].name }}</p>
    </div>
    <div class="flex flex-wrap flex-row justify-evenly">
      <button
        class="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg p-5 text-center mr-2 mb-2"
        @click.prevent="goBack()"
      >
        <img class="h-12" src="/cancel-dark.svg" alt="Cancel delete photo" />
      </button>
      <button
        class="text-white bg-gradient-to-br from-green-500 to-green-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg p-5 text-center mr-2 mb-2"
        @click.prevent="handleDeletePhoto()"
      >
        <img class="h-12" src="/accept-dark.svg" alt="Accept delete photo" />
      </button>
    </div>
  </div>
</template>

<style></style>
