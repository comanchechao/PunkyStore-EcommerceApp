<template>
  <div
    class="bg-white w-full h-96 lg:h-rem33 my-9 wrapper rounded-lg p-5 flex flex-col lg:flex-row space-x-3"
  >
    <div class="w-full h-full">
      <slot name="categoryPicture"> </slot>
    </div>
    <div
      class="w-full h-full flex flex-col text-center align-center justify-around space-y-4"
    >
      <h1 class="text-black font-bold text-2xl lg:text-5xl">
        <slot name="categoryName"> </slot>
      </h1>

      <router-link to="/shop">
        <DefaultButton
          
          class="bg-goldie font-bold text-xl px-4 lg:px-20 lg:py-28 lg:text-4xl rounded-full"
          >نشونم بده</DefaultButton
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import { productManagent } from "../store/productManagment";
import { onMounted } from "@vue/runtime-core";

export default {
  components: { DefaultButton },

  props: ["category"],

  setup(props) {
    onMounted(() => {
      console.log(props);
    });
    const productManagment = productManagent();

    const change = function (selected) {
      productManagment.changeCategory(selected);
    };

    return { change };
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
