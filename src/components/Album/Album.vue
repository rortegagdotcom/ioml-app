<script setup>
const props = defineProps({
  album: Object,
});
</script>

<template>
  <div>
    <router-link :to="{ name: 'albums-details', params: { id: album.id } }">
      <div class="block w-80 h-96 book">
        <div class="book-back book-inner" :class="`bg-${album.cover}`"></div>
        <div class="book-pages book-inner"></div>
        <div class="book-pages book-inner"></div>
        <div class="book-cover book-inner" :class="`bg-${album.cover}`">
          <div class="bg-gray-100 dark:bg-gray-900 p-3">
            <h3 class="mb-2 text-2xl font-bold text-center break-words">
              {{ album.name }}
            </h3>
          </div>
        </div>
      </div>
      <!--
      <div
        :class="`bg-${album.cover}`"
        class="block w-80 h-96 p-5 border-gray-200 rounded-lg shadow dark:border-gray-700 cursor-pointer"
      >
        
      </div>
    -->
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
@import '../Covers/css/covers/breeze.css';
@import '../Covers/css/covers/cage.css';
@import '../Covers/css/covers/clouds.css';
@import '../Covers/css/covers/hexagons.css';
@import '../Covers/css/covers/stars.css';
@import '../Covers/css/covers/dots.css';

.book {
  perspective: 87.5rem;
}
.book-back {
  background-color: #fe3a3c;
}
.book-inner,
.book-pages::before,
.book-pages::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: left center;
  transition: transform 0.2s ease-in;
}
.book-cover,
.book-pages {
  transform-style: preserve-3d;
}
.book-pages {
  transform: scale(0.95, 0.9);
  perspective: 2000px;
}
.book-pages::before,
.book-pages::after {
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
.book-cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.book-back,
.book-pages {
  right: 0;
  bottom: 0;
}
.book-pages::after {
  transition-delay: 0.12s;
}
.book-pages::before {
  transition-delay: 0.105s;
}
.book-pages + .book-pages::after {
  transition-delay: 0.09s;
}
.book-pages + .book-pages::before {
  transition-delay: 0.075s;
}
.book-pages + .book-pages + .book-pages::after {
  transition-delay: 0.06s;
}
.book-pages + .book-pages + .book-pages::before {
  transition-delay: 0.045s;
}
.book-pages + .book-pages + .book-pages + .book-pages::after {
  transition-delay: 0.03s;
}
.book-pages + .book-pages + .book-pages + .book-pages::before {
  transition-delay: 0.015s;
}
.book:hover .book-back,
.book:hover .book-cover::before {
  box-shadow: inset -2px 0 1px rgba(0, 0, 0, 0.075);
}
.book:hover .book-cover {
  transform: rotateY(-40deg);
  transition-delay: 0s;
}
.book:hover .book-pages::after {
  transform: rotateY(-12deg);
}
.book:hover .book-pages::before {
  transform: rotateY(-8deg);
}
.book:hover .book-pages + .book-pages::after {
  transform: rotateY(-20deg);
}
.book:hover .book-pages + .book-pages::before {
  transform: rotateY(-16deg);
}
.book:hover .book-pages + .book-pages + .book-pages::after {
  transform: rotateY(-28deg);
}
.book:hover .book-pages + .book-pages + .book-pages::before {
  transform: rotateY(-24deg);
}
.book:hover .book-pages + .book-pages + .book-pages + .book-pages::after {
  transform: rotateY(-36deg);
}
.book:hover .book-pages + .book-pages + .book-pages + .book-pages::before {
  transform: rotateY(-32deg);
}
</style>
