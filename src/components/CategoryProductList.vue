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
        {{ category.title }}
      </h1>
    </div>
    <div
      class="w-full h-full py-4 flex flex-col bg-gray-50 justify-around items-center background"
    >
      <Switch
        v-model="enabled"
        :class="enabled ? 'bg-Sky-200' : 'bg-gray-300'"
        class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
        >
        </span>
      </Switch>
      <h1 class="font-bold text-lg text-gray-500">تخفیف دارها</h1>
      <DropDown class="self-end m-8">
        <template #title> جدیدترین </template>

        <template #secondOption> پربازدیدترین </template>

        <template #thirdOption> گرانترین </template>
        <template #forthOption> ارزانترین </template>
      </DropDown>
      <div class="flex flex-col lg:flex-row">
        <div class="lg:px-8 h-full bg-goldie w-full">
          <CategoryProductListCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            class="flex justify-center items-center"
          />
        </div>
      </div>
      <router-link to="/shop">
        <DefaultButton
          class="rounded-full font-bold text-black justify-self-start bg-goldie text-lg px-4 m-5"
        >
          <v-icon
            class="text-5xl transition ease-in duration-200 hover:bg-purple-700 rounded-full"
            >mdi-arrow-left</v-icon
          >
          نمایش کالاهای بیشتر
        </DefaultButton>
      </router-link>
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
import { Switch } from "@headlessui/vue";

export default {
  components: {
    CategoryProductListCard,
    DefaultButton,
    DropDown,
    Switch,
  },

  props: ["category"],

  setup(props) {
    const enabled = ref(false);

    const products = ref([]);

    onMounted(() => {
      getProducts();
    });
    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .eq("product-category", props.category.title);
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
