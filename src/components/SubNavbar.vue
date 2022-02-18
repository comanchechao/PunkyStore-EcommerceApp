<template>
  <div
    class="w-screen h-20 sm:invisible bg-gray-600 flex flex-row-reverse align-center justify-start"
  >
    <DefaultButton class="text-2xl font-light text-white mr-3"
      >دسته بندی کالاها</DefaultButton
    >
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

<style></style>
