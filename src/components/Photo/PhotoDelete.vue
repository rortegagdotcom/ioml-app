<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';
import { useI18n } from 'vue-i18n';
import axios from 'axios';

import IOMLActionButton from '../Buttons/IOMLActionButton.vue';

const router = useRouter();
const route = useRoute();

const { t } = useI18n();

const photos = ref(null);
const albumId = route.params.albumid;
const photoId = route.params.photoid;

watchEffect(async () => {
  if (albumId && photoId) {
    await axios
      .get(`http://localhost:5748/api/albums/${albumId}/photo/${photoId}`)
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
    .delete(`http://localhost:5748/api/photos/${photoId}`)
    .then(() => {
      console.log('Photo deleted');
      toast.success(t('toastPhotoDeleted'));
    })
    .catch((error) => {
      console.log('Error when deleting photo', error);
      toast.error('Error when deleting photo');
    });

  setTimeout(() => {
    router.go(-1);
  }, 1000);
}
</script>

<template>
  <div class="text-gray-900 dark:text-gray-200">
    <h1 class="text-center text-xl pb-5">{{ t('sureToDelete') }}</h1>
    <div className="flex relative justify-center" v-if="photos">
      <img
        class="rounded-xl w-full 2xl:w-1/2"
        :src="`${photos[0].filename}`"
        :alt="`${photos[0].id}`"
      />
    </div>
    <div class="flex flex-wrap flex-row justify-evenly pt-10">
      <IOMLActionButton
        :action="goBack"
        :icon="'/cancel.svg'"
        :altText="'Cancel'"
        :color="'red'"
      />
      <IOMLActionButton
        :action="handleDeletePhoto"
        :icon="'/accept.svg'"
        :altText="'Accept'"
        :color="'green'"
      />
    </div>
  </div>
</template>

<style></style>
