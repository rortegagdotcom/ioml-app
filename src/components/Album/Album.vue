<script setup>
import IOMLButton from '../Buttons/IOMLButton.vue';

const props = defineProps({
  album: Object,
});
</script>

<template>
  <div>
    <router-link
      :to="{ name: 'albums-details', params: { albumid: album.id } }"
    >
      <div
        class="w-48 h-48 mx-5 my-5 bg-gray-50 transition rotate-[-10deg] skew-x-[10deg] hover:cursor-pointer hover:transition hover:rotate-[-5deg] hover:skew-x-[5deg] dark:bg-gray-950 before:content-[''] before:w-4 before:h-full before:bg-gray-200 before:absolute before:skew-y-[-45deg] before:translate-x-[-16px] before:translate-y-[8px] dark:before:bg-gray-900 after:w-full after:h-4 after:bg-gray-400 after:absolute after:skew-x-[-45deg] after:translate-x-[-8px] after:translate-y-[16px] after:bottom-0"
      >
        <div class="h-3/4" :class="`bg-${album.cover}`"></div>
        <h2
          class="absolute text-[1.5em] text-gray-900 max-w-[180px] whitespace-nowrap text-ellipsis overflow-hidden left-2.5 bottom-2.5 dark:text-gray-50"
        >
          {{ album.name }}
        </h2>
      </div>
    </router-link>
    <div class="flex flex-nowrap flex-row justify-around mt-10">
      <router-link :to="{ name: 'albums-edit', params: { albumid: album.id } }">
        <IOMLButton :icon="'/edit.svg'" :alt="'Edit'" />
      </router-link>

      <router-link
        :to="{ name: 'albums-delete', params: { albumid: album.id } }"
      >
        <IOMLButton :icon="'/delete.svg'" :alt="'Delete'" />
      </router-link>
    </div>
  </div>
</template>

<style>
/* CSS styles are imported from the covers, background-image is not updated with TailwindCSS in your configuration */
@import '../Covers/css/covers/wave.css';
@import '../Covers/css/covers/cage.css';
@import '../Covers/css/covers/cloud.css';
@import '../Covers/css/covers/hexagon.css';
@import '../Covers/css/covers/star.css';
@import '../Covers/css/covers/circle.css';
@import '../Covers/css/covers/flower.css';
@import '../Covers/css/covers/leave.css';
</style>
