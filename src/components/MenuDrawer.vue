<template>
  <div class="">
    <DefaultButton v-bind="attrs" v-on="on" @click="drawer = !drawer">
      <v-icon class="text-white">mdi-microsoft-xbox-controller-menu</v-icon>
    </DefaultButton>

    <v-navigation-drawer
      v-model="drawer"
      left
      app
      temporary
      rounded
      class="drawer"
      color="#64B5F6"
    >
      <div
        class="p-6 flex border-b-2 border-mainYellow flex-row w-full justify-around"
      >
        <DefaultButton
          @click="bar = 'menu'"
          class="mx-4 p-4 hover:bg-mainYellow"
          >منو</DefaultButton
        >
        <DefaultButton
          @click="bar = 'catagories'"
          class="hover:bg-mainYellow p-4"
          >دسته بندی</DefaultButton
        >
      </div>
      <div
        class="h-full w-full p-6 flex flex-col justify-start align-center"
        :class="{ hidden: bar !== 'menu' }"
      >
        <DefaultButton class=" ">خونه</DefaultButton>
        <DefaultButton class=" ">خرید</DefaultButton>
        <DefaultButton class="text-2xl">درباره ی پانکی مانکی</DefaultButton>
        <DefaultButton class=" ">ادمین</DefaultButton>
      </div>

      <div
        class="h-full w-full p-6 flex flex-col justify-start align-center"
        :class="{ hidden: bar !== 'catagories' }"
      >
        <DefaultButton class=" ">هودی</DefaultButton>
        <DefaultButton class=" ">آکسسوری</DefaultButton>
        <DefaultButton class="text-2xl">تیشرت</DefaultButton>
        <DefaultButton class=" ">کلاه</DefaultButton>
         <DefaultButton class=" ">پیراهن</DefaultButton>
        <DefaultButton class=" ">کفش</DefaultButton>
        <DefaultButton class="text-2xl">دیزاین</DefaultButton>
        <DefaultButton class=" ">بول</DefaultButton>
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
      bar: "menu",
    };
  },
};
</script>

<style scoped>
.drawer {
  z-index: 200 !important;
}
</style>
