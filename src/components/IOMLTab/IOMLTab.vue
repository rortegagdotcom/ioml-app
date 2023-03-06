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
  selectedIndex.value = null;
  activeTab.value = index;
}

const emit = defineEmits(['cover-clicked']);

function handleCoverClick(cover) {
  cover = cover.substring(cover.lastIndexOf('/') + 1, cover.length - 4);
  emit('cover-clicked', cover);
}

const selectedIndex = ref(0);

function selectImage(index) {
  selectedIndex.value = index;
}
</script>

<template>
  <div
    class="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-5 font-medium text-gray-500"
  >
    <a
      href="#"
      class="inline-flex border rounded-lg w-full justify-center p-3 border-gray-500"
      :class="{
        'border-pink-500 text-pink-500 dark:border-orange-500 dark:text-orange-500':
          activeTab === index,
      }"
      @click.prevent="setActiveTab(index)"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      {{ tab }}
    </a>
  </div>
  <div class="py-5">
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 0">
      <div v-for="(cover, index) in coversBankNote" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 1">
      <div v-for="(cover, index) in coversBricks" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 2">
      <div v-for="(cover, index) in coversBubbles" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 3">
      <div v-for="(cover, index) in coversCircles" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 4">
      <div v-for="(cover, index) in coversCross" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 5">
      <div v-for="(cover, index) in coversDiamonds" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 6">
      <div v-for="(cover, index) in coversDomino" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 7">
      <div v-for="(cover, index) in coversDots" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 8">
      <div v-for="(cover, index) in coversHexagons" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 9">
      <div v-for="(cover, index) in coversJigsaw" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 10">
      <div v-for="(cover, index) in coversJupiter" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 11">
      <div v-for="(cover, index) in coversLeafs" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 12">
      <div v-for="(cover, index) in coversMelt" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 13">
      <div v-for="(cover, index) in coversSquares" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 14">
      <div v-for="(cover, index) in coversStripes" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 15">
      <div v-for="(cover, index) in coversTicTacToe" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 16">
      <div v-for="(cover, index) in coversTriangles" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
    <div class="grid grid-cols-5 md:grid-cols-10 gap-2" v-if="activeTab === 17">
      <div v-for="(cover, index) in coversYYY" :key="index">
        <img
          class="w-32 cursor-pointer"
          :src="cover"
          @click="
            handleCoverClick(cover);
            selectImage(index);
          "
          :class="{
            'border-8 border-solid border-pink-500 dark:border-orange-500':
              selectedIndex == index,
          }"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
