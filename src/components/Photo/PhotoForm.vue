<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import imageCompression from 'browser-image-compression';

import IOMLFormButton from '../Buttons/IOMLFormButton.vue';

const route = useRoute();
const router = useRouter();

const { t } = useI18n();

const albumId = route.params.albumid;
const photoId = route.params.photoid;
const photoFile = ref(null);

async function compressImage(file) {
  try {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error('Error al comprimir la imagen:', error);
    return null;
  }
}

async function createOrEditPhoto() {
  if (photoId) {
    const formData = new FormData();

    const originalFile = photoFile.value.files[0];
    const compressedFile = await compressImage(originalFile);

    if (!compressedFile) formData.append('photo', photoFile.value.files[0]);
    else formData.append('photo', compressImage);
    formData.append('photoId', photoId);

    await axios
      .put(`http://localhost:5748/api/photos/${photoId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success(t('toastPhotoUpdated'));
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
      const originalFile = photoFile.value.files[i];
      const compressedFile = await compressImage(originalFile);
      if (!compressedFile) formData.append('photo', compressedFile);
      else formData.append('photo', photoFile.value.files[i]);
    }
    formData.append('albumId', albumId);

    await axios
      .post('http://localhost:5748/api/photos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success(t('toastPhotosAdded'));
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
    {{ photoId ? t('updatePhoto') : t('addPhotos') }}
  </h1>
  <form
    class="flex justify-center items-center flex-col"
    id="add-or-edit-photo"
    @submit.prevent="createOrEditPhoto"
  >
    <div class="m-5">
      <label
        class="inline-block text-lg font-bold text-gray-900 dark:text-gray-50 mt-5 mb-2"
        for="photo-file"
      >
        {{ photoId ? t('selectEditPhoto') : t('selectAddPhotos') }}
      </label>
      <input
        class="block w-full p-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 file:mr-5 file:p-3 file:rounded-full file:border-0 file:font-semibold file:text-pink-500 dark:file:text-orange-500"
        type="file"
        name="photo-file"
        id="photo-file"
        ref="photoFile"
        accept="image/*"
        :multiple="!photoId"
        required
      />
      <div class="flex justify-center items-center pt-5">
        <IOMLFormButton
          :id="photoId"
          :updateText="'updatePhoto'"
          :createText="'addPhotos'"
        />
      </div>
    </div>
  </form>
</template>

<style></style>
