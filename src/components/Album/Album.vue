<script setup>
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
          class="absolute text-[1.5em] text-gray-800 max-w-[180px] text-ellipsis overflow-hidden left-2.5 bottom-2.5 dark:text-gray-200"
        >
          {{ album.name }}
        </h2>
      </div>
    </router-link>
    <div class="flex flex-nowrap flex-row justify-around mt-10">
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link
          :to="{ name: 'albums-edit', params: { albumid: album.id } }"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcset="/edit-dark.svg"
            />
            <img class="h-12" src="/edit-light.svg" alt="Edit Album" />
          </picture>
        </router-link>
      </button>
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link
          :to="{ name: 'albums-delete', params: { albumid: album.id } }"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcset="/delete-dark.svg"
            />
            <img class="h-12" src="/delete-light.svg" alt="Delete Album" />
          </picture>
        </router-link>
      </button>
    </div>
  </div>
</template>

<style>
/* Se importan estilos CSS de los covers, por que no pone el background-image con TailwindCSS en su configuración */
@import '../Covers/css/covers/wave.css';
@import '../Covers/css/covers/cage.css';
@import '../Covers/css/covers/cloud.css';
@import '../Covers/css/covers/hexagon.css';
@import '../Covers/css/covers/star.css';
@import '../Covers/css/covers/circle.css';
@import '../Covers/css/covers/flower.css';
@import '../Covers/css/covers/leave.css';
</style>
