<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const modules = [Navigation];
</script>
<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <img
        class="object-cover w-full h-screen"
        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
        alt="image slide 1"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-cover w-full h-screen"
        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
        alt="image slide 2"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-cover w-full h-screen"
        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
        alt="image slide 3"
      />
    </swiper-slide>
  </swiper>
</template>
<style></style>
