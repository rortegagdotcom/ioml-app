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
      <div class="album block w-80 h-96">
        <div class="album-back album-inner" :class="`bg-${album.cover}`"></div>
        <div class="album-pages album-inner"></div>
        <div class="album-pages album-inner"></div>
        <div class="album-cover album-inner" :class="`bg-${album.cover}`">
          <div class="bg-gray-100 dark:bg-gray-900 p-3">
            <h3
              class="mb-2 text-2xl font-bold text-center text-gray-900 break-words dark:text-gray-100"
            >
              {{ album.name }}
            </h3>
          </div>
        </div>
      </div>
    </router-link>
    <div class="flex flex-nowrap flex-row justify-around mt-2">
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
@import '../Covers/css/covers/breeze.css';
@import '../Covers/css/covers/cage.css';
@import '../Covers/css/covers/clouds.css';
@import '../Covers/css/covers/hexagons.css';
@import '../Covers/css/covers/stars.css';
@import '../Covers/css/covers/dots.css';

.album {
  perspective: 87.5rem;
}
.album-inner,
.album-pages::before,
.album-pages::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: left center;
  transition: transform 0.2s ease-in;
}
.album-cover,
.album-pages {
  transform-style: preserve-3d;
}
.album-pages {
  transform: scale(0.95, 0.9);
  perspective: 2000px;
}
.album-pages::before,
.album-pages::after {
  background-color: #fff;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.075) 97%,
    transparent
  );
  box-shadow: 1px 4px 5px 0 rgba(0, 0, 0, 0.05);
  content: '';
}
.album-cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.album-back,
.album-pages {
  right: 0;
  bottom: 0;
}
.album-pages::after {
  transition-delay: 0.12s;
}
.album-pages::before {
  transition-delay: 0.105s;
}
.album-pages + .album-pages::after {
  transition-delay: 0.09s;
}
.album-pages + .album-pages::before {
  transition-delay: 0.075s;
}
.album-pages + .album-pages + .album-pages::after {
  transition-delay: 0.06s;
}
.album-pages + .album-pages + .album-pages::before {
  transition-delay: 0.045s;
}
.album-pages + .album-pages + .album-pages + .album-pages::after {
  transition-delay: 0.03s;
}
.album-pages + .album-pages + .album-pages + .album-pages::before {
  transition-delay: 0.015s;
}
.album:hover .album-back,
.album:hover .album-cover::before {
  box-shadow: inset -2px 0 1px rgba(0, 0, 0, 0.075);
}
.album:hover .album-cover {
  transform: rotateY(-40deg);
  transition-delay: 0s;
}
.album:hover .album-pages::after {
  transform: rotateY(-12deg);
}
.album:hover .album-pages::before {
  transform: rotateY(-8deg);
}
.album:hover .album-pages + .album-pages::after {
  transform: rotateY(-20deg);
}
.album:hover .album-pages + .album-pages::before {
  transform: rotateY(-16deg);
}
.album:hover .album-pages + .album-pages + .album-pages::after {
  transform: rotateY(-28deg);
}
.album:hover .album-pages + .album-pages + .album-pages::before {
  transform: rotateY(-24deg);
}
.album:hover .album-pages + .album-pages + .album-pages + .album-pages::after {
  transform: rotateY(-36deg);
}
.album:hover .album-pages + .album-pages + .album-pages + .album-pages::before {
  transform: rotateY(-32deg);
}
</style>
