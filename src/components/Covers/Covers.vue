<script setup>
import { ref } from 'vue';

import coversWave from '../../routes/covers/wave';
import coversCage from '../../routes/covers/cage';
import coversCloud from '../../routes/covers/cloud';
import coversHexagon from '../../routes/covers/hexagon';
import coversStar from '../../routes/covers/star';
import coversCircle from '../../routes/covers/circle';
import coversFlower from '../../routes/covers/flower';
import coversLeave from '../../routes/covers/leave';

const tabs = ref([
  'Wave',
  'Cage',
  'Cloud',
  'Hexagon',
  'Star',
  'Circle',
  'Flower',
  'Leave',
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
  <div class="grid grid-cols-4 grid-rows-2 gap-5 font-medium text-gray-500">
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
    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 0"
    >
      <div v-for="(cover, index) in coversWave" :key="index">
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

    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 1"
    >
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

    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 2"
    >
      <div v-for="(cover, index) in coversCloud" :key="index">
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

    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 3"
    >
      <div v-for="(cover, index) in coversHexagon" :key="index">
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

    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 4"
    >
      <div v-for="(cover, index) in coversStar" :key="index">
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

    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 5"
    >
      <div v-for="(cover, index) in coversCircle" :key="index">
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

    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 6"
    >
      <div v-for="(cover, index) in coversFlower" :key="index">
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

    <div
      class="grid grid-cols-4 grid-rows-3 md:grid-cols-8 md:grid-rows-6 gap-2"
      v-if="activeTab === 7"
    >
      <div v-for="(cover, index) in coversLeave" :key="index">
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
