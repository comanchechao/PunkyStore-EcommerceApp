<template>
  <div class="w-full h-full">
    <div
      class="bg-gray-50 w-full flex-col h-96 lg:h-rem33 my-9 wrapper rounded-lg p-7 md:p-16 flex"
    >
      <div class="w-full h-full bg-purple-900 p-2">
        <img class="bg-mainPurple" src="" alt="" />
      </div>
      <div
        class="w-full h-full flex flex-col text-center align-center justify-center space-y-3 my-4 lg:space-x-9"
      >
        <h1 class="text-black font-bold text-2xl lg:text-5xl">اسم کالا</h1>
        <h2 class="text-Emerald-600 font-bold text-1xl lg:text-3xl">
          2999 تومان
        </h2>
        <router-link to="/shop">
          <DefaultButton class="bg-goldie font-bold text-xl px-4 rounded-full"
            >نشونم بده</DefaultButton
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";

export default {
  components: {
    DefaultButton,
  },
};
</script>

<style scoped>
.wrapper {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #f0f0f0;
  border-radius: 10px;
}
</style>
