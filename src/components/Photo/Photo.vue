<script setup>
import { ref } from 'vue';

import IOMLButton from '../Buttons/IOMLButton.vue';

const props = defineProps({
  photo: Object,
  albumId: String,
});

const showOverlay = ref(false);

const toggleOverlay = () => {
  showOverlay.value = !showOverlay.value;
};
</script>

<template>
  <div class="relative aspect-square overflow-hidden">
    <img
      class="w-full h-full object-cover rounded-xl"
      @click="toggleOverlay"
      :src="`${photo.filename}`"
      :alt="`${photo.id}`"
    />
    <div
      class="absolute bottom-0 w-full h-16 bg-black bg-opacity-50 rounded-br-xl rounded-bl-xl flex items-center justify-evenly"
      v-if="showOverlay"
    >
      <router-link
        :to="{
          name: 'photos-details',
          params: { albumid: albumId, photoid: photo.id },
        }"
      >
        <IOMLButton :icon="'/view.svg'" :alt="'View'" />
      </router-link>
      <router-link
        :to="{
          name: 'photos-edit',
          params: { albumid: albumId, photoid: photo.id },
        }"
      >
        <IOMLButton :icon="'/edit.svg'" :alt="'Edit'" />
      </router-link>
      <router-link
        :to="{
          name: 'photos-delete',
          params: { albumid: albumId, photoid: photo.id },
        }"
      >
        <IOMLButton :icon="'/delete.svg'" :alt="'Delete'" />
      </router-link>
    </div>
  </div>
</template>

<style></style>
