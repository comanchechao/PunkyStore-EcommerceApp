<template>
  <div class="flex bg-Indigo-200 w-full h-full">
    <div class="w-full h-full p-5">
      <div
        class="flex bg-Indigo-200 w-full text-white flex-col justify-center align-center"
      >
        <div
          class="flex w-full lg:w-1/2 h-16 align-center justify-center bg-darkPurple rounded m-4"
        >
          <h2>سفارش های ثبت شده</h2>
        </div>

        <div class="flex flex-col w-full h-full divide-y divide-dashed hover:divide-solid">
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
          <CustomerOrder />
        </div>
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
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import CustomerOrder from "./CustomerOrder.vue";

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
    CustomerOrder,
  },
  setup() {
    const catagories = ref([]);
    const products = ref([]);

    onMounted(() => {
      getCatagories();
      getProducts();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase.from("products");
        // .eq("product-category", props.catagory.title);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      }
    }

    async function getCatagories() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title");
        // .eq("product-category", props.catagory.title);

        if (error) throw error;
        catagories.value = data;
      } catch (error) {
        alert(error.message);
      }
    }
    return { catagories, products };
  },
};
</script>

<style></style>
