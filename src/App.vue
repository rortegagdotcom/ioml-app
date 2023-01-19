<script>
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
});
</script>

<template>
  <Header />

  <main class="container py-5">
    <router-view />
  </main>

  <Footer />
</template>

<style></style>
