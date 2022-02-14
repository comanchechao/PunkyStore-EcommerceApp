<template>
  <div class="">
    <v-btn
      v-bind="attrs"
      variant="rounded"
      size="x-large"
      color="white"
      v-on="on"
      @click="drawer = !drawer"
    >
      <v-icon size="x-large">mdi-microsoft-xbox-controller-menu</v-icon>
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      left
      app
      temporary
      rounded
      class="drawer"
      color="#64B5F6"
    >
      <div class="h-full w-full p-6 flex flex-col justify-start align-center">
        <DefaultButton class=" ">خونه</DefaultButton>
        <DefaultButton class=" ">خرید</DefaultButton>
        <DefaultButton class="text-2xl">درباره ی پانکی مانکی</DefaultButton>
        <DefaultButton class=" ">ادمین</DefaultButton>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";

export default {
  components: {
    DefaultButton,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.drawer {
  z-index: 200 !important;
}
</style>
