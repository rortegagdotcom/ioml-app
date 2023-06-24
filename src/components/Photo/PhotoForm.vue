<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

const route = useRoute();
const router = useRouter();

const albumId = route.params.albumid;
const photoId = route.params.photoid;
const photoFile = ref(null);

async function createOrEditPhoto() {
  if (photoId) {
    const formData = new FormData();
    formData.append('photo', photoFile.value.files[0]);
    formData.append('photoId', photoId);

    await axios
      .put(`http://192.168.100.82:5748/api/photos/${photoId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success('Photo updated');
      })
      .catch((error) => {
        console.error('Error when sending data:', error);
      });

    setTimeout(() => {
      router.go(-1);
    }, 1000);
  } else {
    const formData = new FormData();
    for (let i = 0; i < photoFile.value.files.length; i++) {
      formData.append('photo', photoFile.value.files[i]);
    }
    formData.append('albumId', albumId);

    await axios
      .post('http://192.168.100.82:5748/api/photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success('Photos added');
      })
      .catch((error) => {
        console.error('Error when adding photos: ', error);
        toast.error('Error when adding photos');
      });
  }

  photoFile.value.value = null;
}
</script>

<template>
  <h1 class="text-center text-2xl font-bold text-black dark:text-white">
    {{ photoId ? 'Edit Photo' : 'Add Photos' }}
  </h1>
  <form
    class="flex justify-center items-center flex-col"
    id="add-or-edit-photo"
    @submit.prevent="createOrEditPhoto"
  >
    <div class="m-5">
      <label
        class="inline-block text-lg font-bold text-black dark:text-white mt-5 mb-2"
        for="photo-file"
      >
        {{ photoId ? 'Select your photo' : 'Select your photos' }}
      </label>
      <input
        class="block w-full p-5 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white file:mr-5 file:p-3 file:rounded-full file:border-0 file:font-semibold file:text-pink-500 dark:file:text-orange-500"
        type="file"
        name="photo-file"
        id="photo-file"
        ref="photoFile"
        accept="image/*"
        :multiple="!photoId"
        required
      />
      <div class="flex justify-center items-center pt-5">
        <button
          class="text-white bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          {{ photoId ? 'Update photo' : 'Add photos' }}
        </button>
      </div>
    </div>
  </form>
</template>

<style></style>
