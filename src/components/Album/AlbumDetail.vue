<script setup>
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const route = useRoute();
const albums = ref(null);
const albumId = route.params.albumid;

watchEffect(async () => {
  if (albumId) {
    await axios
      .get(`http://localhost:5748/api/albums/${albumId}`)
      .then((res) => {
        albums.value = res.data[0];
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
</script>

<template></template>

<style></style>
