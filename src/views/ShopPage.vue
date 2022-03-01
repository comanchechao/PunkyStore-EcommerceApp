<template>
  <div id="main" class="w-screen flex justify-center align-center p-6">
    <div class="w-full background rounded-b-xl mb-8 h-full">
      <div
        class="w-full h-20 flex justify-center align-center bg-mainYellow mb-3"
      >
        <!-- <ListBox /> -->
        <DropDownMenu />
      </div>
      <div class="w-full h-full flex flex-col space-y-20">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListBox from "../components/ListBox.vue";
import DropDownMenu from "../components/DropDownMenu.vue";
import ProductCard from "../components/ProductCard.vue";
import { ref } from "@vue/reactivity";
import { supabase } from "../supabase";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    ListBox,
    DropDownMenu,
    ProductCard,
  },
  // props: ["catagory"],

  setup(props) {
    const products = ref([]);

    onMounted(() => {
      getProducts();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase.from("products").select();
        // .eq("product-category", props.catagory.title);

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
  background-color: white;
}
</style>
