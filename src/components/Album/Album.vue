<script setup>
const props = defineProps({
  album: Object,
});
</script>

<template>
  <div
    :class="`bg-${album.cover}`"
    class="block w-80 h-80 p-5 border-gray-200 rounded-lg shadow dark:border-gray-700 cursor-pointer"
  >
    <div class="bg-gray-100 dark:bg-gray-900 p-5 rounded-xl">
      <h3 class="mb-2 text-2xl font-bold text-center">
        {{ album.name }}
      </h3>
    </div>
  </div>
</template>

<style>
/* Se importan estilos CSS personalizado, por que no pone el background-image con TailwindCSS en su configuración */
@import './css/covers/bank-note.css';
@import './css/covers/bricks.css';
@import './css/covers/bubbles.css';
@import './css/covers/circles.css';
@import './css/covers/cross.css';
@import './css/covers/diamonds.css';
@import './css/covers/domino.css';
@import './css/covers/dots.css';
@import './css/covers/hexagons.css';
@import './css/covers/jigsaw.css';
@import './css/covers/jupiter.css';
@import './css/covers/leafs.css';
@import './css/covers/melt.css';
@import './css/covers/squares.css';
@import './css/covers/stripes.css';
@import './css/covers/tic-tac-toe.css';
@import './css/covers/triangles.css';
@import './css/covers/yyy.css';
</style>
