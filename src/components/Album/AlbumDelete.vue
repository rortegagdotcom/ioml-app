<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useI18n } from 'vue-i18n';
import axios from 'axios';

import IOMLAcceptButton from '../Buttons/IOMLAcceptButton.vue';
import IOMLCancelButton from '../Buttons/IOMLCancelButton.vue';

const router = useRouter();
const route = useRoute();

const { t } = useI18n();

const albums = ref(null);

const albumId = route.params.albumid;

watchEffect(async () => {
  if (albumId) {
    await axios
      .get(`/api/albums/${albumId}`)
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
    .delete(`/api/albums/${albumId}`)
    .then(() => {
      toast.success(t('toastAlbumDeleted'));
      console.log('Album deleted');
    })
    .catch((error) => {
      console.log('Error when deleting the album', error);
      toast.error(t('toastErrorDeleteAlbum'));
    });

  setTimeout(() => {
    router.go(-1);
  }, 1000);
}
</script>

<template>
  <div class="text-gray-900 dark:text-gray-50">
    <h1 class="text-center text-xl pb-2">{{ t('sureToDelete') }}</h1>
    <h2 class="text-center text-xl pb-5">
      {{ t('allPhotosAreDeleted') }}
    </h2>
    <div class="flex justify-center pb-10">
      <div
        class="w-48 h-48 mx-5 my-5 bg-gray-50 transition rotate-[-10deg] skew-x-[10deg] hover:cursor-pointer hover:transition hover:rotate-[-5deg] hover:skew-x-[5deg] dark:bg-gray-950 before:content-[''] before:w-4 before:h-full before:bg-gray-200 before:absolute before:skew-y-[-45deg] before:translate-x-[-16px] before:translate-y-[8px] dark:before:bg-gray-900 after:w-full after:h-4 after:bg-gray-400 after:absolute after:skew-x-[-45deg] after:translate-x-[-8px] after:translate-y-[16px] after:bottom-0"
        v-if="albums"
      >
        <div class="h-3/4" :class="`bg-${albums[0].cover}`"></div>
        <h2
          class="absolute text-[1.5em] text-gray-900 max-w-[180px] text-ellipsis overflow-hidden left-2.5 bottom-2.5 dark:text-gray-50"
        >
          {{ albums[0].name }}
        </h2>
      </div>
    </div>
    <div class="flex flex-row justify-around">
      <IOMLCancelButton
        :action="goBack"
        :icon="'/cancel.svg'"
        :altText="'Cancel'"
      />
      <IOMLAcceptButton
        :action="handleDeleteAlbum"
        :icon="'/accept.svg'"
        :altText="'Accept'"
      />
    </div>
  </div>
</template>

<style></style>
