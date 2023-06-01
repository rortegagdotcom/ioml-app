<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Covers from '../Covers/Covers.vue';

const router = useRouter();
const route = useRoute();

const albumName = ref('');
const coverName = ref('wave-1');
const activeTab = ref(1);

const albumId = route.params.albumid;

async function createOrEditAlbum() {
  if (albumId) {
    await axios.put(
      `http://192.168.100.82:5748/api/albums/${albumId}`,
      {
        name: albumName.value,
        cover: coverName.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } else {
    await axios
      .post(
        'http://192.168.100.82:5748/api/albums',
        {
          name: albumName.value,
          cover: coverName.value,
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
  }

  albumName.value = '';
  coverName.value = '';

  router.push('/');
}

function setActiveTab(index) {
  activeTab.value = index;
}

function handleCoverClicked(cover) {
  coverName.value = cover;
}
</script>

<template>
  <h1 class="text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
    {{ albumId ? 'Update Album' : 'Create Album' }}
  </h1>
  <form
    class="flex justify-center items-center flex-col"
    id="create-or-edit-album"
    @submit.prevent="createOrEditAlbum"
  >
    <div class="m-5">
      <div>
        <label
          class="inline-block text-lg font-bold text-black dark:text-white mb-2"
          for="album-name"
          >Album Name</label
        >
        <input
          class="block w-full p-5 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="text"
          id="album-name"
          name="album-name"
          v-model="albumName"
          maxlength="50"
          required
        />
      </div>
      <label
        class="inline-block text-lg mt-5 mb-2 font-bold text-black dark:text-white"
        >Select a Cover</label
      >
      <Covers
        :activeTab="activeTab"
        :setActiveTab="setActiveTab"
        @cover-clicked="handleCoverClicked"
      />
      <div class="flex justify-center items-center pt-5">
        <button
          class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          {{ albumId ? 'Update Album' : 'Create Album' }}
        </button>
      </div>
    </div>
  </form>
</template>

<style></style>
