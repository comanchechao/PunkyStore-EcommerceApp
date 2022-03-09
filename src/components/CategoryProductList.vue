<template>
  <div class="flex flex-col w-full h-full">
    <div class="w-full h-24 bg-mainBlue flex justify-between align-center p-5">
      <DefaultButton class="text-white">
        <v-icon size="x-large">mdi-login-variant</v-icon>
      </DefaultButton>
      <h1 class="text-white text-3xl font-extrabold">{{ catagory.title }}</h1>
    </div>
    <div
      class="w-full h-full py-4 flex flex-col space-y-7 justify-center items-center background"
    >
      <!-- <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      /> -->
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import DefaultButton from "./DefaultButton.vue";
import { ref } from "@vue/reactivity";
import { supabase } from "../supabase";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    ProductCard,
    DefaultButton,
  },

  props: ["catagory"],

  setup(props) {
    const products = ref([]);

    onMounted(() => {
      getProducts();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .eq("product-category", props.catagory.title);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      }
    }

    return { products };
  },
};
</script>

<style scoped>
.background {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #ffffff2a;
}
</style>
