<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

const linkTo = computed(() => {
  const route = useRoute();
  if (
    route.name === 'albums' ||
    route.name === 'albums-new' ||
    route.name === 'albums-edit' ||
    route.name === 'albums-delete'
  ) {
    return '/albums/new';
  } else {
    return '/photos/new';
  }
});
</script>

<template>
  <nav
    class="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-900"
  >
    <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
      <router-link :to="linkTo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="/add-dark.svg" />
          <img class="h-12" src="/add-light.svg" alt="Add" />
        </picture>
      </router-link>
    </button>
    <router-link to="/">
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="/ioml-logotipe-2-dark.svg"
        />
        <img class="h-24" src="/ioml-logotipe-2-light.svg" alt="IOML App" />
      </picture>
    </router-link>
    <div>
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="/add-dark.svg" />
        <img class="h-12" src="/add-light.svg" />
      </picture>
    </div>
  </nav>
</template>

<style></style>
