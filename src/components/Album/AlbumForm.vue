<script setup>
import axios from 'axios';
import { ref } from 'vue';

import IOMLTab from '../IOMLTab/IOMLTab.vue';

const albumName = ref('');

async function createAlbum() {
  await axios
    .post(
      'http://localhost:5748/api/albums',
      {
        name: albumName.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.error('Error when sending data:', error);
    });

  albumName.value = '';
}
</script>

<template>
  <form
    class="flex justify-center items-center flex-col"
    id="create-album"
    @submit.prevent="createAlbum"
  >
    <div class="m-5">
      <div>
        <label
          class="block mb-2 font-medium text-black dark:text-white"
          for="album-name"
          >Album Name</label
        >
        <input
          class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="text"
          id="album-name"
          name="album-name"
          v-model="albumName"
          required
        />
      </div>

      <IOMLTab />

      <div class="flex justify-center items-center pt-5">
        <button
          class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          Create Album
        </button>
      </div>
    </div>
  </form>
</template>

<style></style>
