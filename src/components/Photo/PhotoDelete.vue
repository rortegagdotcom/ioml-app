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
      .get(`http://192.168.100.82:5748/api/albums/${albumId}/photo/${photoId}`)
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
    .delete(`http://192.168.100.82:5748/api/photos/${photoId}`)
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
  <div class="text-gray-900 dark:text-gray-200">
    <h1 class="text-center text-xl pb-5">Are you sure to delete?</h1>
    <div className="flex relative justify-center" v-if="photos">
      <img
        class="rounded-xl w-full 2xl:w-1/2"
        :src="`${photos[0].filename}`"
        :alt="`${photos[0].id}`"
      />
    </div>
    <div class="flex flex-wrap flex-row justify-evenly pt-10">
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
