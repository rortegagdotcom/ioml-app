<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const addAlbumPhoto = computed(() => {
  const route = useRoute();
  const albumId = route.params.albumid;
  if (
    route.name === 'albums' ||
    route.name === 'albums-new' ||
    route.name === 'albums-edit' ||
    route.name === 'albums-delete'
  )
    return '/albums/new';
  else return `/albums/${albumId}/photos/new`;
});

const viewPhotosFullScreen = computed(() => {
  const route = useRoute();
  const albumId = route.params.albumid;
  if (route.name === 'albums-details') return `/view/${albumId}`;
  else return '/';
});

const logoUrl = computed(() => {
  const route = useRoute();
  if (route.name === 'albums-details') {
    return {
      dark: '/fullscreen-dark.svg',
      light: '/fullscreen-light.svg',
    };
  } else {
    return {
      dark: '/ioml-logotipe-2-dark.svg',
      light: '/ioml-logotipe-2-light.svg',
    };
  }
});
</script>

<template>
  <nav
    class="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-900"
  >
    <button
      class="p-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    >
      <router-link :to="addAlbumPhoto">
        <img class="h-12" src="/add.svg" alt="Add" />
      </router-link>
    </button>
    <router-link :to="viewPhotosFullScreen">
      <picture>
        <source media="(prefers-color-scheme: dark)" :srcset="logoUrl.dark" />
        <img class="h-24" :src="logoUrl.light" alt="IOML App" />
      </picture>
    </router-link>
    <div>
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="/profile-dark.svg"
        />
        <img class="h-12" src="/profile-light.svg" />
      </picture>
    </div>
  </nav>
</template>

<style></style>
