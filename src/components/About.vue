<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <article class="flex justify-center items-center flex-col">
    <picture class="w-1/2 max-lg:w-full">
      <source
        media="(prefers-color-scheme: dark)"
        srcset="/ioml-logotipe-1-dark.svg"
      />
      <img src="/ioml-logotipe-1-light.svg" alt="IOML App Logotipe" />
    </picture>
    <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
      {{ t('titleApp') }}
    </h1>
    <p class="text-xl text-gray-900 dark:text-gray-50 mb-5">{{ t('about') }}</p>
    <p class="text-xl text-gray-900 dark:text-gray-50">App:</p>
    <ul>
      <li class="text-xl text-gray-900 dark:text-gray-50">
        Vue 3 Composition API
      </li>
      <li class="text-xl text-gray-900 dark:text-gray-50">Vue Router</li>
      <li class="text-xl text-gray-900 dark:text-gray-50">Vue 3 Toastify</li>
      <li class="text-xl text-gray-900 dark:text-gray-50">Vue 3 i18n</li>
      <li class="text-xl text-gray-900 dark:text-gray-50">Axios</li>
      <li class="text-xl text-gray-900 dark:text-gray-50">Swiper</li>
    </ul>
    <p class="text-xl text-gray-900 dark:text-gray-50 mt-5">API:</p>
    <ul>
      <li class="text-xl text-gray-900 dark:text-gray-50">node.js</li>
      <li class="text-xl text-gray-900 dark:text-gray-50">Express</li>
      <li class="text-xl text-gray-900 dark:text-gray-50">multer</li>
      <li class="text-xl text-gray-900 dark:text-gray-50">webp-converter</li>
    </ul>
  </article>
</template>

<style></style>
