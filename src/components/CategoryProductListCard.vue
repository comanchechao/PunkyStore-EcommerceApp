<template>
  <div
    class="bg-gray-50 w-full flex-col h-96 lg:h-full my-9 wrapper rounded-lg p-7 flex"
  >
    <div class="w-full h-full bg-purple-900 p-2">
      <img class="bg-mainPurple" src="" alt="" />
    </div>
    <div
      class="w-full h-full flex flex-col text-center align-center justify-center space-y-3 my-4 lg:space-x-9"
    >
      <h1 class="text-black font-bold text-2xl lg:text-5xl prod-title">
        {{ product.title }}
      </h1>
      <h2 class="text-Emerald-600 font-bold text-1xl lg:text-3xl">
        {{ product.price }}
      </h2>
      <router-link to="/shop">
        <DefaultButton class="bg-goldie font-bold text-xl px-4 rounded-full"
          >نشونم بده</DefaultButton
        >
      </router-link>
      <button
        @click.prevent="addToCart"
        class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
      >
        <v-icon class="hover:text-white">mdi-shopping-outline</v-icon>

        اضافه کردن
      </button>
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import { ref } from "@vue/reactivity";
import { productManagent } from "../store/productManagment";

export default {
  components: {
    DefaultButton,
  },
  props: ["product"],

  setup(props) {
    const Product = ref({
      item: props.product,
      quantity: 1,
    });
    const productManagment = productManagent();

    const addToCart = function () {
      productManagment.addToCart(Product.value);
    };

    return { addToCart };
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
