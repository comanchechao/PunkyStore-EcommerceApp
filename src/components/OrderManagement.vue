<template>
  <div class="flex bg-Indigo-700blue w-full h-full">
    <div class="w-full h-full p-2 bg-blue-800">
      <div class="flex w-full flex-col justify-center align-center">
        <div class="flex w-full h-16 align-center justify-around rounded m-4">
          <div class="w-full flex justify-center h-full">
            <button
              @click="tab = 'NewOrders'"
              :class="{ 'bg-Amber-600': tab === 'NewOrders' }"
              class="px-2 w-full lg:px-10 py-2 lg:py-6 mx-1 font-bold rounded text-black bg-mainYellow transition transform hover:bg-blue-800"
            >
              سفارش های ثبت شده
            </button>
          </div>
          <div class="w-full flex justify-center h-full">
            <button
              @click="tab = 'SentOrders'"
              :class="{ 'bg-Amber-600 ': tab === 'SentOrders' }"
              class="px-2 w-full lg:px-10 py-2 lg:py-6 mx-1 font-bold rounded text-black bg-mainYellow hover:text-gray-100 transition transform hover:bg-blue-800"
            >
              سفارش های ارسال شده
            </button>
          </div>
          <div class="w-full flex justify-center h-full">
            <button
              @click="tab = 'AllOrders'"
              :class="{ 'bg-Amber-600': tab === 'AllOrders' }"
              class="px-2 w-full lg:px-10 py-2 lg:py-6 mx-1 font-bold rounded text-black bg-mainYellow hover:text-gray-100 transition transform hover:bg-blue-800"
            >
              تمامی سفارش ها
            </button>
          </div>
        </div>

        <TransitionRoot
          class="w-full h-full"
          appear
          :show="tab === 'NewOrders'"
          as="div"
        >
          <div
            class="flex bg-transparent p-4 flex-col w-full z-0 h-full divide-y divide-dotted overflow-y-scroll"
          >
            <TransitionChild
              as="div"
              enter="duration-150 ease-out"
              enter-from="transfrom -translate-y-24 scale-95"
              enter-to="opacity-100 scale-100"
            >
              <CustomerOrder
                v-for="order in orders"
                :key="order.id"
                :order="order"
                class="customerOrder p-5"
                :tab="tab"
              />
            </TransitionChild>
          </div>
        </TransitionRoot>
        <TransitionRoot
          class="w-full"
          appear
          :show="tab === 'SentOrders'"
          as="div"
        >
          <div
            class="flex bg-transparent cursor-pointer p-4 flex-col w-full z-0 h-1/3 divide-y divide-dotted overflow-y-scroll"
          >
            <TransitionChild
              as="div"
              enter="duration-150 ease-out"
              enter-from="transfrom -translate-y-24 scale-95"
              enter-to="opacity-100 scale-100"
            >
              <CustomerOrder
                v-for="order in orders"
                :key="order.id"
                :order="order"
                class="customerOrder"
                :tab="tab"
              />
            </TransitionChild>
          </div>
        </TransitionRoot>

        <TransitionRoot
          class="w-full"
          appear
          :show="tab === 'AllOrders'"
          as="div"
        >
          <div
            class="flex bg-transparent p-4 flex-col w-full z-0 h-1/3 divide-y divide-dotted overflow-y-scroll"
          >
            <TransitionChild
              as="div"
              enter="duration-150 ease-out"
              enter-from="transfrom -translate-y-24 scale-95"
              enter-to="opacity-100 scale-100"
            >
              <CustomerOrder
                v-for="order in orders"
                :key="order.id"
                :order="order"
                class="customerOrder"
                :tab="tab"
              />
            </TransitionChild>
          </div>
        </TransitionRoot>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { ref } from "vue";
import { supabase } from "../supabase";
import { storeToRefs } from "pinia";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import { defineAsyncComponent } from "vue";

const people2 = [
  { name: "2xl" },
  { name: "xl" },
  { name: "lg" },
  { name: "md" },
  { name: "sm" },
  { name: "xl" },
];

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
    CustomerOrder: defineAsyncComponent(() =>
      import("../components/CustomerOrder.vue")
    ),

    TransitionRoot,
    TransitionChild,
  },
  setup() {
    const categories = ref([]);
    const products = ref([]);
    const orders = ref([]);
    const tab = ref("NewOrders");

    onMounted(() => {
      getcategories();
      getProducts();
      getOrders();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase.from("products");
        // .eq("product-category", props.category.title);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      }
    }

    async function getOrders() {
      try {
        const { data, error } = await supabase.from("order_detail");
        // .eq("product-category", props.category.title);

        if (error) throw error;
        orders.value = data;
      } catch (error) {
        alert(error.message);
      }
    }

    async function getcategories() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title");
        // .eq("product-category", props.category.title);

        if (error) throw error;
        categories.value = data;
      } catch (error) {
        alert(error.message);
      }
    }
    return { categories, products, tab, people2, orders };
  },
};
</script>

<style scoped></style>
