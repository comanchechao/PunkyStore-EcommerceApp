<template>
  <v-app>
    <v-main>
      <Navbar class="   Navbar" />
      <!-- <SubNavbar /> -->
      <!-- <HomePage /> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import SubNavbar from "./components/SubNavbar.vue";

// import HomePage from "./components/HomePage.vue";

export default {
  name: "App",

  components: {
    Navbar,
    // SubNavbar,
    // HomePage,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
