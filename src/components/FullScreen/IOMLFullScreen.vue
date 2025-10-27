<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import axios from 'axios';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

const route = useRoute();

const photos = ref([]);

const albumId = route.params.albumid;

async function fetchPhotos() {
  try {
    const res = await axios.get(`/api/albums/${albumId}/photos`);
    photos.value = res.data ?? [];
    console.log('Photos loaded:', photos.value);
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchPhotos();
});

const showComponents = inject('showComponents');

onMounted(() => {
  showComponents.value = false;
});

onUnmounted(() => {
  showComponents.value = true;
});

const modules = [Navigation, Autoplay];
const autoplay = {
  delay: 300000,
  disableOnInteraction: false,
};
const loop = true;
</script>
<template>
  <div class="fixed top-0 left-0 w-full h-full z-50">
    <Swiper
      :navigation="true"
      :modules="modules"
      :autoplay="autoplay"
      :loop="loop"
      class="mySwiper"
    >
      <SwiperSlide v-for="(photo, index) in photos" :key="photo.id ?? index">
        <div class="flex justify-center items-center w-full h-screen">
          <img
            class="max-w-full max-h-full"
            :src="photo.filename"
            :alt="photo.name"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<style>
@media (prefers-color-scheme: light) {
  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-color: #000;
  }
}

@media (prefers-color-scheme: dark) {
  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-color: #fff;
  }
}
</style>
