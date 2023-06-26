<script setup>
import { ref } from 'vue';

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
      <button
        class="p-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <router-link
          :to="{
            name: 'photos-details',
            params: { albumid: albumId, photoid: photo.id },
          }"
        >
          <img class="h-8" src="/view.svg" alt="View Photo" />
        </router-link>
      </button>
      <button
        class="p-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <router-link
          :to="{
            name: 'photos-edit',
            params: { albumid: albumId, photoid: photo.id },
          }"
        >
          <img class="h-8" src="/edit.svg" alt="Edit Photo" />
        </router-link>
      </button>
      <button
        class="p-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      >
        <router-link
          :to="{
            name: 'photos-delete',
            params: { albumid: albumId, photoid: photo.id },
          }"
        >
          <img class="h-8" src="/delete.svg" alt="Delete Photo" />
        </router-link>
      </button>
    </div>
  </div>
</template>

<style></style>
