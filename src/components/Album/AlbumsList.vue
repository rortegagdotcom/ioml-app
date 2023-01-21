<script>
import { defineComponent } from "vue";
import Album from "./Album.vue";

export default defineComponent({
  name: "AlbumsList",
  components: {
    Album,
  },
});
</script>

<template>
  <div class="grid grid-cols-4 gap-4 justify-items-center">
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
    <Album />
  </div>
</template>
