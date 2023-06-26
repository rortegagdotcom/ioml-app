<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';

const router = useRouter();
const route = useRoute();
const albums = ref(null);
const albumId = route.params.albumid;

watchEffect(async () => {
  if (albumId) {
    await axios
      .get(`http://192.168.100.82:5748/api/albums/${albumId}`)
      .then((res) => {
        albums.value = res.data[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

function goBack() {
  router.go(-1);
}

async function handleDeleteAlbum() {
  await axios
    .delete(`http://192.168.100.82:5748/api/albums/${albumId}`)
    .then(() => {
      toast.success('Album deleted');
      console.log('Album deleted');
    })
    .catch((error) => {
      console.log('Error when deleting the album', error);
      toast.error('Error when deleting the album');
    });

  setTimeout(() => {
    router.go(-1);
  }, 1000);
}
</script>

<template>
  <div class="text-black dark:text-white">
    <h1 class="text-center text-xl pb-2">Are you sure to delete?</h1>
    <h2 class="text-center text-xl pb-5">
      All photos in this album will be deleted
    </h2>
    <div class="flex justify-center pb-10">
      <div
        :class="`bg-${albums[0].cover}`"
        class="block w-80 h-96 p-5 border-gray-200 rounded-lg shadow dark:border-gray-700"
        v-if="albums"
      >
        <div class="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl">
          <h3 class="mb-2 text-2xl font-bold text-center">
            {{ albums[0].name }}
          </h3>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap flex-row justify-evenly">
      <button
        class="text-white bg-gradient-to-br from-red-500 to-red-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg p-5 text-center mr-2 mb-2"
        @click.prevent="goBack()"
      >
        <img class="h-12" src="/cancel.svg" alt="Cancel delete album" />
      </button>
      <button
        class="text-white bg-gradient-to-br from-green-500 to-green-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg p-5 text-center mr-2 mb-2"
        @click.prevent="handleDeleteAlbum()"
      >
        <img class="h-12" src="/accept.svg" alt="Accept delete album" />
      </button>
    </div>
  </div>
</template>

<style></style>
