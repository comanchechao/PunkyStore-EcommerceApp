<template>
  <div class="flex flex-col w-full">
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
      class="w-screen h-screen flex flex-col bg-gray-50 items-center justify-around background"
    >
      <div
        class="h-24 w-full items-center justify-center lg:justify-end space-x-4 lg:pr-8 px-4 flex"
      >
        <Switch
          v-model="inStock"
          @click="(order = 'inStock')((ascention = !ascention))"
          :class="inStock ? 'bg-pink-700' : 'bg-gray-300'"
          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span
            aria-hidden="true"
            :class="inStock ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
          >
          </span>
        </Switch>
        <h1 class="font-bold text-lg text-gray-500">کالاهای موجود</h1>
        <DropDown>
          ><template #title> فیلترها </template>

          <template #firstOption>
            <p @click="order = 'created_at'">جدیدترین</p>
          </template>

          <template #secondOption> پربازدیدترین </template>

          <template #thirdOption>
            <span @click="(ascention = false)((order = 'price'))">
              گرانترین
            </span>
          </template>
          <template #forthOption>
            <span @click="(ascention = true)((order = 'price'))">
              ارزانترین
            </span>
          </template>
        </DropDown>
      </div>
      <div
        class="w-full h-full grid overflow-y-scroll bg-purple-700 productCard lg:grid-cols-4 grid-cols-1 gap-6 p-10 place-items-center self-center justify-self-center"
      >
        <CategoryProductListCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <!-- <div class="bg-purple-700 grid">
       
      </div> -->
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
import DefaultButton from "./DefaultButton.vue";
import { ref } from "@vue/reactivity";
import { supabase } from "../supabase";
import { onMounted, watch } from "@vue/runtime-core";
import { Switch } from "@headlessui/vue";
import CategoryProductListCard from "./CategoryProductListCard.vue";

export default {
  components: {
    CategoryProductListCard,
    DefaultButton,
    DropDown,
    Switch,
  },

  props: ["category"],

  setup(props) {
    const inStock = ref(false);
    const order = ref("price");
    const ascention = ref();
    const products = ref([]);

    watch(order, () => {
      getProducts();
      console.log(order);
    }),
      watch(inStock, () => {
        getProducts();
        console.log(order);
      }),
      watch(ascention, () => {
        getProducts();
      });
    onMounted(() => {
      getProducts();
    });
    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .eq("product-category", props.category.title)
          .order(order.value, { ascending: ascention.value })
          .limit(4);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      }
    }
    return { products, inStock, order, ascention };
  },
};
</script>

<style scoped></style>
