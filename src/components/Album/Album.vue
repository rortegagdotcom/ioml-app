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
        class="album bg-gray-50 before:bg-gray-200 after:bg-gray-400 dark:bg-gray-950 dark:before:bg-gray-900"
      >
        <div class="cover" :class="`bg-${album.cover}`"></div>
        <h2 class="text-gray-800 dark:text-gray-200">{{ album.name }}</h2>
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

.album {
  width: 300px;
  height: 200px;
  transform: rotate(-5deg) skewX(10deg);
}
.album:hover {
  cursor: pointer;
}
.album:before {
  content: '';
  width: 15px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: skewY(-45deg) translate(-15px, -7.5px);
}
.album:after {
  content: '';
  width: 100%;
  height: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: skewX(-45deg) translate(7.5px, 15px);
}
.album h2 {
  position: absolute;
  bottom: 5px;
  left: 15px;
  font-size: 1.5em;
  max-width: 480px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-clip: text;
}
.album .cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75%;
  background-size: cover;
}
</style>
