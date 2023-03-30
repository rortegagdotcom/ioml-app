<script setup>
import { ref } from 'vue';

import coversAutumn from '../../routes/covers/autumn';
import coversBreeze from '../../routes/covers/breeze';
import coversCage from '../../routes/covers/cage';
import coversCurtain from '../../routes/covers/curtain';
import coversClouds from '../../routes/covers/clouds';
import coversHexagons from '../../routes/covers/hexagons';
import coversStars from '../../routes/covers/stars';
import coversDots from '../../routes/covers/dots';

const tabs = ref([
  'Autumn',
  'Brezee',
  'Cage',
  'Curtain',
  'Clouds',
  'Hexagons',
  'Stars',
  'Dots',
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
    class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-5 font-medium text-gray-500"
  >
    <a
      href="#"
      class="flex border rounded-lg justify-center p-1 border-gray-500"
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
    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 0">
      <div v-for="(cover, index) in coversAutumn" :key="index">
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

    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 1">
      <div v-for="(cover, index) in coversBreeze" :key="index">
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

    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 2">
      <div v-for="(cover, index) in coversCage" :key="index">
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

    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 3">
      <div v-for="(cover, index) in coversCurtain" :key="index">
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

    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 4">
      <div v-for="(cover, index) in coversClouds" :key="index">
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

    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 5">
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

    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 6">
      <div v-for="(cover, index) in coversStars" :key="index">
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

    <div class="grid grid-cols-3 md:grid-cols-9 gap-2" v-if="activeTab === 7">
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
  </div>
</template>

<style></style>
