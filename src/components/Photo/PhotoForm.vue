<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const albumId = route.params.albumid;
const photoId = route.params.photoId;
const photoName = ref('');
const photoFile = ref('');

async function createOrEditPhoto() {
  if (photoId) {
  } else {
    await axios
      .post('http://localhost:5748/api/photos', {
        albumId: albumId,
        name: photoName.value,
        filename: photoFile.value,
      })
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.error('Error when sending data:', error);
      });
  }

  photoName.value = '';
  photoFile.value = '';
}
</script>

<template>
  <h1 class="text-center text-2xl font-bold text-black dark:text-white">
    Add Photos
  </h1>
  <form
    class="flex justify-center items-center flex-col"
    id="add-photo"
    enctype="multipart/form-data"
    @submit.prevent="createOrEditPhoto"
  >
    <div class="m-5">
      <div>
        <label
          class="inline-block text-lg font-bold text-black dark:text-white mb-2"
          for="photo-name"
        >
          Photo Name
        </label>
        <input
          class="block w-full p-5 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="text"
          id="photo-name"
          name="photo-name"
          v-model="photoName"
          maxlength="50"
          required
        />
      </div>
      <p class="mb-5 text-gray-900 dark:text-gray-200">
        You can add more photos with that name
      </p>
      <label
        class="inline-block text-lg font-bold text-black dark:text-white mb-2"
        for="photo-file"
      >
        Select your photo
      </label>
      <input
        class="block w-full p-5 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white file:mr-5 file:p-3 file:rounded-full file:border-0 file:font-semibold file:text-pink-500 dark:file:text-orange-500"
        type="file"
        name="filename"
        id="filename"
        v-memo="photoFile"
        accept="image/*"
      />
      <div class="flex justify-center items-center pt-5">
        <button
          class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          {{ photoId ? 'Update photo' : 'Add photo' }}
        </button>
      </div>
    </div>
  </form>
</template>

<style></style>
