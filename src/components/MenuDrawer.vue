<template>
  <div class="">
    <DefaultButton @click="drawer = !drawer">
      <v-icon class="text-white">mdi-microsoft-xbox-controller-menu</v-icon>
    </DefaultButton>

    <v-navigation-drawer
      v-model="drawer"
      left
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
          class="px-4 hover:bg-mainYellow ease-in-out transition-colors text-2xl"
          >منو</DefaultButton
        >
        <DefaultButton
          @click="bar = 'categories'"
          class="hover:bg-mainYellow px-4 transition ease-in-out duration-300 delay-150 text-2xl"
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
        :class="{ hidden: bar !== 'categories' }"
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

<style scoped></style>
