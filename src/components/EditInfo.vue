<template>
  <div class="flex flex-col w-full h-full rounded">
    <div
      class="w-full h-24 bg-darkPurple flex justify-between align-center p-5"
    >
      <DefaultButton class="text-white">
        <v-icon size="x-large">mdi-heart</v-icon>
      </DefaultButton>
      <h1 class="text-white text-2xl font-bold">اطلاعات کاربری</h1>
    </div>
    <div class="w-full h-full p-4 background">
      <form action="flex flex-wrap font-mainFont">
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="نام کاربری"
          />
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="شماره همراه"
          />
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="آدرس"
          />
        </div>
        <DefaultButton class="px-4 py-2 rounded bg-mainPink text-white">
          تایید
        </DefaultButton>
      </form>
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
.background {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #ffffff2a;
}
</style>
