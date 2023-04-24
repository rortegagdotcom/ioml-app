<script setup>
const props = defineProps({
  photo: Object,
});
</script>

<template>
  <div>
    <router-link
      :to="{
        name: 'photo-details',
        params: { albumid: album.id, photoid: photo.id },
      }"
    >
      <div class="bg-gray-100 dark:bg-gray-900 p-3">
        <h3 class="mb-2 text-2xl font-bold text-center break-words">
          {{ photo.name }}
        </h3>
      </div>
    </router-link>
    <div class="flex flex-nowrap flex-row justify-around mt-2">
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link
          :to="{
            name: 'photos-edit',
            params: { albumid: album.id, photoid: photo.id },
          }"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcset="/edit-dark.svg"
            />
            <img class="h-12" src="/edit-light.svg" alt="Edit Photo" />
          </picture>
        </router-link>
      </button>
      <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
        <router-link
          :to="{
            name: 'photos-delete',
            params: { albumid: album.id, photoid: photo.id },
          }"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcset="/delete-dark.svg"
            />
            <img class="h-12" src="/delete-light.svg" alt="Delete Photo" />
          </picture>
        </router-link>
      </button>
    </div>
  </div>
</template>

<style></style>
