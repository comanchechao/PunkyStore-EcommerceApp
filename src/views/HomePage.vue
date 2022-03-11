<template>
  <div
    class="w-screen flex space-y-16 justify-center align-center flex-col"
    id="main"
  >
    <div
      class="h-auto w-screen flex flex-col justify-center align-center space-y-16 p-7"
    >
      <CategoryCards
        v-for="catagory in catagories"
        :key="catagory.title"
        :catagory="catagory"
        class="NavbarTrigger"
      />
    </div>
    <div
      class="w-screen h-rem35 space-y-11 flex-col lg:flex-row bg-gray-800 flex justify-center items-center lg:space-x-4 lg:p-10"
    >
      <img src="../assets/images/offer.png" class="lg:order-last" alt="" />
      <Carousel />
    </div>
    <!-- <div class="w-3/4 h-96 bg-black"> -->
    <!-- </div> -->
    <div
      v-for="catagory in catagories"
      :key="catagory.title"
      class="h-screen w-screen flex flex-col justify-center align-center"
    >
      <CategoryProductList :catagory="catagory" />
    </div>
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue";
import CategoryCards from "../components/CategoryCards.vue";
import CategoryProductList from "../components/CategoryProductList.vue";
import Carousel from "../components/Carousel.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { supabase } from "../supabase";

export default {
  components: { CategoryCards, CategoryProductList, DefaultButton, Carousel },
  setup() {
    const catagories = ref({});

    onMounted(() => {
      getProducts();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title");
        if (error) throw error;
        catagories.value = data;
      } catch (error) {
        alert(error.message);
      }
    }

    return { catagories };
  },
};
</script>

<style></style>
