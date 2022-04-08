<template>
  <div class="flex flex-col w-full h-auto">
    <div
      class="w-full h-24 bg-darkPurple flex justify-between align-center p-7"
    >
      <DefaultButton class="text-white">
        <v-icon
          class="text-5xl transition ease-in duration-200 hover:bg-purple-700 rounded-full"
          >mdi-arrow-left</v-icon
        >
      </DefaultButton>
      <h1
        class="text-white transition ease-in duration-200 hover:bg-purple-700 cursor-pointer text-3xl border-b-8 border-purple-700 flex justify-center items-center rounded-lg filter drop-shadow-lg p-4 font-extrabold"
      >
        {{ catagory.title }}
      </h1>
    </div>
    <div
      class="w-full h-full py-4 px-4 flex flex-col bg-gray-50 space-y-7 justify-between items-center background"
    >
      <DropDown class="self-end mr-8">
        <template #title> جدیدترین </template>

        <template #secondOption> پربازدیدترین </template>

        <template #thirdOption> گرانترین </template>
        <template #forthOption> ارزانترین </template>
      </DropDown>
      <CategoryProductListCard />
      <CategoryProductListCard />
      <DefaultButton
        class="rounded-full font-bold text-black justify-self-start bg-goldie text-lg px-4 m-5"
        >نمایش کالاهای بیشتر</DefaultButton
      >
    </div>
  </div>
</template>

<script>
import DropDown from "./DropDown.vue";
import CategoryProductListCard from "./CategoryProductListCard.vue";
import DefaultButton from "./DefaultButton.vue";
import { ref } from "@vue/reactivity";
import { supabase } from "../supabase";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    CategoryProductListCard,
    DefaultButton,
    DropDown,
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

<style scoped></style>
