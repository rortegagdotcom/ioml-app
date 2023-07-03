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

const props = defineProps({
  activeTab: Number,
  setActiveTab: Function,
});

const emit = defineEmits(['cover-clicked']);

const tabs = ref([
  {
    name: 'Wave',
    covers: coversWave,
    coverName: 'wave',
  },
  {
    name: 'Cage',
    covers: coversCage,
    coverName: 'cage',
  },
  {
    name: 'Cloud',
    covers: coversCloud,
    coverName: 'cloud',
  },
  {
    name: 'Hexagon',
    covers: coversHexagon,
    coverName: 'hexagon',
  },
  {
    name: 'Star',
    covers: coversStar,
    coverName: 'star',
  },
  {
    name: 'Circle',
    covers: coversCircle,
    coverName: 'circle',
  },
  {
    name: 'Flower',
    covers: coversFlower,
    coverName: 'flower',
  },
  {
    name: 'Leave',
    covers: coversLeave,
    coverName: 'leave',
  },
]);

const activeTab = ref(0);

const selectedIndex = ref(0);

function setActiveTab(index) {
  selectedIndex.value = null;
  activeTab.value = index;
}

function handleCoverClick(cover) {
  cover = cover.substring(cover.lastIndexOf('/') + 1, cover.length - 4);
  emit('cover-clicked', cover);
}

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
        'bg-pink-500 border-pink-500 text-gray-50 dark:bg-orange-500 dark:border-orange-500 dark:text-gray-800':
          activeTab === index,
      }"
      @click.prevent="setActiveTab(index)"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      {{ tab.name }}
    </a>
  </div>
  <div class="py-5">
    <div class="grid grid-cols-3 md:grid-cols-6 gap-2" v-if="activeTab >= 0">
      <div v-for="(cover, index) in tabs[activeTab].covers" :key="index">
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
