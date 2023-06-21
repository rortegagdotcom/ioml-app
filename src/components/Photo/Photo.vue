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
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link
          :to="{
            name: 'photos-details',
            params: { albumid: albumId, photoid: photo.id },
          }"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcset="/view-dark.svg"
            />
            <img class="h-8" src="/view-light.svg" alt="View Photo" />
          </picture>
        </router-link>
      </button>
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link
          :to="{
            name: 'photos-edit',
            params: { albumid: albumId, photoid: photo.id },
          }"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcset="/edit-dark.svg"
            />
            <img class="h-8" src="/edit-light.svg" alt="Edit Photo" />
          </picture>
        </router-link>
      </button>
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link
          :to="{
            name: 'photos-delete',
            params: { albumid: albumId, photoid: photo.id },
          }"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcset="/delete-dark.svg"
            />
            <img class="h-8" src="/delete-light.svg" alt="Delete Photo" />
          </picture>
        </router-link>
      </button>
    </div>
  </div>
</template>

<style></style>
