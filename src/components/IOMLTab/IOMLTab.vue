<script setup>
import { ref } from 'vue';

import coversBankNote from '../../routes/covers/bank-note';
import coversBricks from '../../routes/covers/bricks';
import coversBubbles from '../../routes/covers/bubbles';
import coversCircles from '../../routes/covers/circles';
import coversCross from '../../routes/covers/cross';
import coversDiamonds from '../../routes/covers/diamonds';
import coversDomino from '../../routes/covers/domino';
import coversDots from '../../routes/covers/dots';
import coversHexagons from '../../routes/covers/hexagons';
import coversJigsaw from '../../routes/covers/jigsaw';
import coversJupiter from '../../routes/covers/jupiter';
import coversLeafs from '../../routes/covers/leafs';
import coversMelt from '../../routes/covers/melt';
import coversSquares from '../../routes/covers/squares';
import coversStripes from '../../routes/covers/stripes';
import coversTicTacToe from '../../routes/covers/tic-tac-toe';
import coversTriangles from '../../routes/covers/Triangles';
import coversYYY from '../../routes/covers/yyy';

const tabs = ref([
  'Bank Note',
  'Bricks',
  'Bubbles',
  'Circles',
  'Cross',
  'Diamonds',
  'Domino',
  'Dots',
  'Hexagons',
  'Jigsaw',
  'Jupiter',
  'Leafs',
  'Melt',
  'Squares',
  'Stripes',
  'Tic Tac Toe',
  'Triangles',
  'YYY',
]);
const activeTab = ref(0);

function setActiveTab(index) {
  activeTab.value = index;
}

const emit = defineEmits(['cover-clicked']);

function handleCoverClick(cover) {
  cover = cover.substring(cover.lastIndexOf('/') + 1, cover.length - 4);
  emit('cover-clicked', cover);
}
</script>

<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li v-for="(tab, index) in tabs" :key="index" class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 rounded-t-lg hover:text-gray-600 group"
          :class="{
            'text-pink-500 border-pink-500 dark:text-orange-500 dark:border-orange-500 hover:text-pink-500 hover:border-pink-500 hover:dark:text-orange-500 hover:dark:border-orange-500':
              activeTab === index,
          }"
          @click.prevent="setActiveTab(index)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
  </div>
  <div class="py-4">
    <div class="grid grid-cols-10" v-if="activeTab === 0">
      <div v-for="(cover, index) in coversBankNote" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 1">
      <div v-for="(cover, index) in coversBricks" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 2">
      <div v-for="(cover, index) in coversBubbles" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 3">
      <div v-for="(cover, index) in coversCircles" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 4">
      <div v-for="(cover, index) in coversCross" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 5">
      <div v-for="(cover, index) in coversDiamonds" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 6">
      <div v-for="(cover, index) in coversDomino" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 7">
      <div v-for="(cover, index) in coversDots" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 8">
      <div v-for="(cover, index) in coversHexagons" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 9">
      <div v-for="(cover, index) in coversJigsaw" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 10">
      <div v-for="(cover, index) in coversJupiter" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 11">
      <div v-for="(cover, index) in coversLeafs" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 12">
      <div v-for="(cover, index) in coversMelt" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 13">
      <div v-for="(cover, index) in coversSquares" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 14">
      <div v-for="(cover, index) in coversStripes" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 15">
      <div v-for="(cover, index) in coversTicTacToe" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 16">
      <div v-for="(cover, index) in coversTriangles" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
    <div class="grid grid-cols-10" v-if="activeTab === 17">
      <div v-for="(cover, index) in coversYYY" :key="index">
        <img class="w-32" :src="cover" @click="handleCoverClick(cover)" />
      </div>
    </div>
  </div>
</template>

<style></style>
