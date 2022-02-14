<template>
  <v-app>
    <v-main>
      <Navbar />
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: "App",

  components: {
    Navbar,
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>
