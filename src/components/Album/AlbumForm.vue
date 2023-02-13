<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const albumName = ref('');

    async function createAlbum() {
      try {
        await axios.post('http://localhost:5748/api/albums', {
          name: albumName.value,
        });
        console.log(`Album created ${albumName.value}`);
      } catch (error) {
        console.error(error);
      }
    }

    albumName.value = '';

    return { albumName, createAlbum };
  },
};
</script>

<template>
  <form id="create-album">
    <label for="album-name">Album Name:</label>
    <br />
    <input type="text" id="album-name" v-model="albumName" required />
    <br />
    <button type="submit">Create Album</button>
  </form>
</template>

<style></style>
