<script>
export default {
  setup() {
    const props = defineProps({
      album: Object,
    });
  },
};
</script>

<template>
  <div>
    <h1>{{ album.name }}</h1>
  </div>
</template>

<style></style>
