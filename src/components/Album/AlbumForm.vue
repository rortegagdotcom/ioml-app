<script setup>
import axios from 'axios';
import { ref } from 'vue';

const albumName = ref('');

async function createAlbum() {
  await axios
    .post(
      'http://localhost:5748/api/albums',
      {
        name: albumName.value,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => console.log('Datos enviados:', response.data))
    .catch((error) => {
      console.error('Error al enviar los datos:', error);
    });

  albumName.value = '';
}
</script>

<template>
  <form id="create-album" @submit.prevent="createAlbum">
    <label for="album-name">Album Name:</label>
    <br />
    <input
      type="text"
      id="album-name"
      name="album-name"
      v-model="albumName"
      required
    />
    <br />
    <button type="submit">Create Album</button>
  </form>
</template>

<style></style>
