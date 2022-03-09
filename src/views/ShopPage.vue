<template>
  <div id="main" class="w-screen flex justify-center align-center p-6">
    <div class="w-full background rounded-b-xl mb-8 h-full">
      <div
        class="w-full h-20 flex justify-end p-7 align-center bg-mainBlue mb-3"
      >
        <!-- <ListBox /> -->
        <DropDownMenu />
      </div>
      <div
        class="w-full h-full flex flex-col justify-evenly sm:p-7 md:justify-center lg:space-x-5 lg:flex-row lg:flex-wrap lg:p-3 items-center lg:space-y-16 space-y-20"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="flex justify-center items-center"
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
  backdrop-filter: blur(9px) saturate(109%);
  -webkit-backdrop-filter: blur(9px) saturate(109%);
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
