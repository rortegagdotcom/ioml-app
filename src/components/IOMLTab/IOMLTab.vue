<script setup>
import { reactive } from 'vue';

const state = reactive({
  activeTab: 0,
});

function setActiveTab(index) {
  state.activeTab = index;
}
</script>

<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 text-pink-500 border-b-2 border-pink-500 rounded-t-lg active dark:text-orange-500 dark:border-orange-500 group"
          :class="{ 'bg-gray-200': activeTab === 1 }"
          @click="setActiveTab(1)"
        >
          Bank Note
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 2 }"
          @click="setActiveTab(2)"
        >
          Bricks
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 3 }"
          @click="setActiveTab(3)"
        >
          Bubbles
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 4 }"
          @click="setActiveTab(4)"
        >
          Circles
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 5 }"
          @click="setActiveTab(5)"
        >
          Cross
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 6 }"
          @click="setActiveTab(6)"
        >
          Cross
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 7 }"
          @click="setActiveTab(7)"
        >
          Diamonds
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 8 }"
          @click="setActiveTab(8)"
        >
          Domino
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 9 }"
          @click="setActiveTab(9)"
        >
          Dots
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 10 }"
          @click="setActiveTab(10)"
        >
          Hexagons
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 11 }"
          @click="setActiveTab(11)"
        >
          Jigsaw
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 12 }"
          @click="setActiveTab(12)"
        >
          Jupiter
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 13 }"
          @click="setActiveTab(13)"
        >
          Leafs
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 14 }"
          @click="setActiveTab(14)"
        >
          Melt
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 15 }"
          @click="setActiveTab(15)"
        >
          Squares
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 16 }"
          @click="setActiveTab(16)"
        >
          Stripes
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 17 }"
          @click="setActiveTab(17)"
        >
          Tic Tac Toe
        </a>
      </li>
      <li class="mr-2">
        <a
          href="#"
          class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          :class="{ 'bg-gray-200': activeTab === 18 }"
          @click="setActiveTab(18)"
        >
          Triangles
        </a>
      </li>
    </ul>
  </div>
  <div class="py-4">
    <div v-if="activeTab === 1">Contenido de la Tab 1</div>
    <div v-if="activeTab === 2">Contenido de la Tab 2</div>
    <div v-if="activeTab === 3">Contenido de la Tab 3</div>
    <div v-if="activeTab === 4">Contenido de la Tab 1</div>
    <div v-if="activeTab === 5">Contenido de la Tab 2</div>
    <div v-if="activeTab === 6">Contenido de la Tab 3</div>
    <div v-if="activeTab === 7">Contenido de la Tab 1</div>
    <div v-if="activeTab === 8">Contenido de la Tab 2</div>
    <div v-if="activeTab === 9">Contenido de la Tab 3</div>
    <div v-if="activeTab === 10">Contenido de la Tab 1</div>
    <div v-if="activeTab === 11">Contenido de la Tab 2</div>
    <div v-if="activeTab === 12">Contenido de la Tab 3</div>
    <div v-if="activeTab === 13">Contenido de la Tab 1</div>
    <div v-if="activeTab === 14">Contenido de la Tab 2</div>
    <div v-if="activeTab === 15">Contenido de la Tab 3</div>
    <div v-if="activeTab === 16">Contenido de la Tab 1</div>
    <div v-if="activeTab === 17">Contenido de la Tab 2</div>
    <div v-if="activeTab === 18">Contenido de la Tab 3</div>
  </div>
</template>

<style></style>
