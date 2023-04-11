<script setup></script>

<template>
  <nav
    class="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-900"
  >
    <button class="bg-gray-200 p-2 rounded-full dark:bg-gray-700">
      <router-link class="flex flex-row" to="/albums/new">
        <picture class="m-2 self-center">
          <source media="(prefers-color-scheme: dark)" srcset="/add-dark.svg" />
          <img class="h-12" src="/add-light.svg" alt="Add Album" />
        </picture>
        <p
          class="text-xl font-bold m-2 self-center text-gray-900 dark:text-gray-200"
        >
          New Album
        </p>
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
