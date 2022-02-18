<template>
  <div class="w-full h-72 wrapper rounded-lg p-12 flex">
    <div class="w-full h-full bg-Lime-900">
      <img src="" alt="" />
    </div>
    <div
      class="w-full h-full flex flex-col text-center align-center justify-center space-y-4"
    >
      <h3 class="text-gray-400">کتگوری کالا</h3>
      <h1 class="text-black font-bold text-2xl">اسم کالا</h1>
      <h2 class="text-black font-bold text-1xl">
        یه سری توضیحات راجب کتگوری کالاها
      </h2>

      <DefaultButton class="bg-mainPink text-2xl px-4 rounded-full text-white"
        >نشونم بده</DefaultButton
      >
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
export default {
  components: { DefaultButton },
};
</script>

<style scoped>
.wrapper {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #f0f0f0;
  border-radius: 10px;
}
</style>
