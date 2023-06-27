<script setup>
import { ref, inject, onMounted, onUnmounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';

const route = useRoute();

const albumId = route.params.albumid;
const photos = ref([]);

watchEffect(async () => {
  await axios
    .get(`http://localhost:5748/api/albums/${albumId}/photos`)
    .then((res) => {
      photos.value = res.data[0];
    })
    .catch((error) => {
      console.error(error);
    });
});

const modules = [Navigation, Autoplay];
const autoplay = {
  delay: 300000,
  disableOnInteraction: false,
};
const loop = true;

const showComponents = inject('showComponents');

onMounted(() => {
  showComponents.value = false;
});

onUnmounted(() => {
  showComponents.value = true;
});
</script>
<template>
  <div class="fixed top-0 left-0 w-full h-full z-50">
    <swiper
      :navigation="true"
      :modules="modules"
      :autoplay="autoplay"
      :loop="loop"
      class="mySwiper"
    >
      <swiper-slide v-for="(photo, index) in photos" :key="index">
        <div class="flex justify-center items-center h-screen w-full">
          <img :src="photo.filename" :alt="photo.name" />
        </div>
      </swiper-slide>
    </swiper>
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
