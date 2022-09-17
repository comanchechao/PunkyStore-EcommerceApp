<template>
  <div class="flex flex-col w-full">
    <div
      class="w-full h-20 bg-Indigo-900 flex justify-between align-center p-7"
    >
      <router-link to="/shop">
        <DefaultButton @click="change(category.title)" class="text-white">
          <v-icon
            class="text-5xl transition ease-in duration-200 hover:bg-purple-700 rounded-full"
            >mdi-arrow-left</v-icon
          >
        </DefaultButton>
      </router-link>

      <h1
        class="text-white transition ease-in duration-200 hover:bg-purple-700 cursor-pointer text-3xl border-b-8 border-purple-700 flex justify-center items-center rounded-lg filter drop-shadow-lg p-4 font-extrabold"
      >
        {{ category.title }}
      </h1>
    </div>
    <div
      class="w-screen h-screen flex flex-col bg-Indigo-700 items-center justify-around background"
    >
      <div
        class="h-24 w-full items-center bg-gray-100 justify-center lg:justify-end space-x-4 lg:pr-8 px-4 flex"
      >
        <Switch
          v-model="inStock"
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
            <p class="w-full h-full" @click="order = 'created_at'">جدیدترین</p>
          </template>

          <template #secondOption> پربازدیدترین </template>

          <template #thirdOption>
            <span
              class="w-full h-full"
              @click="(ascention = false)((order = 'price'))"
            >
              گرانترین
            </span>
          </template>
          <template #forthOption>
            <span
              class="w-full h-full"
              @click="(ascention = true)((order = 'price'))"
            >
              ارزانترین
            </span>
          </template>
        </DropDown>
      </div>
      <div
        class="w-full h-full grid mb-6 lg:mb-0 overflow-y-scroll bg-Indigo-700 productCard lg:grid-cols-4 grid-cols-1 gap-6 p-10 place-items-center self-center justify-self-center"
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
          class="rounded-full font-bold text-black justify-self-start bg-mainYellow text-lg px-4 m-5"
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
import { productManagent } from "../store/productManagment";

export default {
  components: {
    CategoryProductListCard,
    DefaultButton,
    DropDown,
    Switch,
  },

  props: ["category"],

  setup(props) {
    const inStock = ref(true);
    const order = ref("price");
    const ascention = ref();
    const products = ref([]);
    const categoryImage = ref();

    const productManagment = productManagent();

    const change = function (selected) {
      productManagment.changeCategory(selected);
    };

    const getImage = async function () {
      if (props.category.category_image) {
        try {
          const { data, error } = await supabase.storage
            .from("category-images")
            .download(props.category.category_image);
          if (error) throw error;
          categoryImage.value = URL.createObjectURL(data);
        } catch (error) {
          alert(error.error_description || error.message);
        }
      }
    };

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
      getImage();
    });
    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .eq("product-category", props.category.title)
          .order(order.value, { ascending: ascention.value })
          .is("inStock", inStock.value)
          .limit(4);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      }
    }
    return { products, inStock, order, ascention, change };
  },
};
</script>

<style scoped></style>
