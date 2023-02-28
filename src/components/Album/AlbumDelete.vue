<script setup>
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const albumId = route.params.id;

function goBack() {
  router.push('/');
}

async function handleDeleteAlbum() {
  await axios
    .delete(`http://localhost:5748/api/albums/${albumId}`)
    .then(() => {
      console.log('Album deleted');
    })
    .catch((error) => {
      console.log('Error when deleting album', error);
    });

  router.push('/');
}
</script>

<template>
  <div class="text-black dark:text-white">
    <h1 class="text-center">Are you sure to delete {{ albumId }}?</h1>
    <div class="flex flex-wrap flex-row justify-around">
      <button
        class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
        @click.prevent="goBack()"
      >
        No
      </button>
      <button
        class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
        @click.prevent="handleDeleteAlbum()"
      >
        Yes
      </button>
    </div>
  </div>
</template>

<style></style>
