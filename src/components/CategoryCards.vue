<template>
  <div
    class="bg-white w-full h-72 lg:h-rem33 wrapper rounded-lg p-10 flex space-x-3"
  >
    <div class="w-full h-full bg-purple-900 p-2">
      <img class="bg-mainPurple" src="" alt="" />
    </div>
    <div
      class="w-full h-full flex flex-col text-center align-center justify-center space-y-4"
    >
      <h3 class="text-gray-400">{{ catagory.title }}</h3>
      <h1 class="text-black font-bold text-2xl">اسم کالا</h1>
      <h2 class="text-black font-bold text-1xl">
        یه سری توضیحات راجب کتگوری کالاها
      </h2>
      <router-link to="/shop">
        <DefaultButton class="bg-mainPink text-xl px-4 rounded-full text-white"
          >نشونم بده</DefaultButton
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
export default {
  components: { DefaultButton },

  props: ["catagory"],

  setup(props) {},
};
</script>

<style scoped>
.wrapper {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #f0f0f0;
  border-radius: 10px;
}
</style>
