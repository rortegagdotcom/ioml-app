<script setup>
const props = defineProps({
  album: Object,
});
</script>

<template>
  <div>
    <router-link :to="{ name: 'albums-details', params: { id: album.id } }">
      <div
        :class="`bg-${album.cover}`"
        class="block w-80 h-96 p-5 border-gray-200 rounded-lg shadow dark:border-gray-700 cursor-pointer"
      >
        <div class="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl">
          <h3 class="mb-2 text-2xl font-bold text-center">
            {{ album.name }}
          </h3>
        </div>
      </div>
    </router-link>
    <div class="flex flex-nowrap flex-row justify-around mt-2">
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link :to="{ name: 'albums-edit', params: { id: album.id } }">
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
        <router-link :to="{ name: 'albums-delete', params: { id: album.id } }">
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
@import '../Covers/css/covers/autumn.css';
@import '../Covers/css/covers/breeze.css';
@import '../Covers/css/covers/cage.css';
@import '../Covers/css/covers/curtain.css';
@import '../Covers/css/covers/clouds.css';
@import '../Covers/css/covers/hexagons.css';
@import '../Covers/css/covers/stars.css';
@import '../Covers/css/covers/dots.css';
</style>
