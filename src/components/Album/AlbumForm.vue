<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useI18n } from 'vue-i18n';

import Covers from '../Covers/Covers.vue';

const router = useRouter();
const route = useRoute();

const { t } = useI18n();

const albumName = ref('');
const coverName = ref('wave-1');
const activeTab = ref(1);

const albumId = route.params.albumid;

async function createOrEditAlbum() {
  if (albumId) {
    await axios
      .put(
        `http://localhost:5748/api/albums/${albumId}`,
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
      .then((response) => {
        console.log(response.data);
        toast.success(t('toastAlbumUpdated'));
      })
      .catch((error) => {
        console.error('Error when sending data: ', error);
        toast.error('Error when updating the album');
      });
  } else {
    await axios
      .post(
        'http://localhost:5748/api/albums',
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
      .then((response) => {
        console.log(response.data);
        toast.success(t('toastAlbumAdded'));
      })
      .catch((error) => {
        console.error('Error when sending data: ', error);
        toast.error('Error when creating the album');
      });
  }

  albumName.value = '';
  coverName.value = '';

  setTimeout(() => {
    router.push('/');
  }, 1000);
}

function setActiveTab(index) {
  activeTab.value = index;
}

function handleCoverClicked(cover) {
  coverName.value = cover;
}
</script>

<template>
  <h1 class="text-center text-2xl font-bold text-gray-900 dark:text-gray-50">
    {{ albumId ? t('updateAlbum') : t('createAlbum') }}
  </h1>
  <form
    class="flex justify-center items-center flex-col"
    id="create-or-edit-album"
    @submit.prevent="createOrEditAlbum"
  >
    <div class="m-5">
      <div>
        <label
          class="inline-block text-lg font-bold text-gray-900 dark:text-gray-50 mb-2"
          for="album-name"
          >{{ t('albumName') }}</label
        >
        <input
          class="block w-full p-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50"
          type="text"
          id="album-name"
          name="album-name"
          v-model="albumName"
          maxlength="25"
          required
        />
      </div>
      <label
        class="inline-block text-lg mt-5 mb-2 font-bold text-gray-900 dark:text-gray-50"
        >{{ t('selectCover') }}</label
      >
      <Covers
        :activeTab="activeTab"
        :setActiveTab="setActiveTab"
        @cover-clicked="handleCoverClicked"
      />
      <div class="flex justify-center items-center pt-5">
        <button
          class="text-gray-50 bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          {{ albumId ? t('updateAlbum') : t('createAlbum') }}
        </button>
      </div>
    </div>
  </form>
</template>

<style></style>
