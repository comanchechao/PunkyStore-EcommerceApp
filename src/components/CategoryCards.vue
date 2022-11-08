<template>
  <div
    class="bg-white w-1/2 h-96 my-9 wrapper rounded-sm p-5 flex flex-col space-x-3"
  >
    <slot name="categoryPicture"> </slot>
    <div
      class="w-full h-40 flex flex-col text-center align-center justify-around space-y-4"
    >
      <h1 class="text-black my-3 font-bold text-2xl lg:text-3xl">
        <slot name="categoryName"> </slot>
      </h1>

      <router-link to="/shop">
        <DefaultButton
          class="bg-goldie font-bold text-xl px-4 lg:px-20 lg:py-28 lg:text-2xl rounded-full"
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
