<template>
  <div class="w-screen flex justify-center align-center flex-col" id="main">
    <div
      class="h-auto w-screen flex flex-col justify-center align-center space-y-5 p-7"
    >
      <CategoryCards
        v-for="catagory in catagories"
        :key="catagory.title"
        :catagory="catagory"
        class="NavbarTrigger"
      />
    </div>
    <!-- <div class="w-3/4 h-96 bg-black"> -->
    <Carousel />
    <!-- </div> -->
    <div
      v-for="catagory in catagories"
      :key="catagory.title"
      class="h-screen w-screen p-3 flex flex-col justify-center align-center"
    >
      <CategoryProductList :catagory="catagory" />
      <DefaultButton
        class="rounded-full font-bold text-white bg-mainBlue text-lg p-4 m-5"
        >نمایش کالاهای بیشتر</DefaultButton
      >
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
