<template>
  <div class="flex w-full h-screen">
    <div
      class="h-full justify-start align-center w-full bg-mainY space-y-3 flex flex-col overflow-y-scroll p-5"
    >
      <ShoppingDrawerItem v-for="item in getCart" :key="item.id" :item="item" />

      <div class="w-full flex justify-center align-center">
        <DefaultButton
          class="m-2 px-6 py-4 rounded bg-mainYellow text-white"
          @click="component = 'CheckoutSubmit'"
        >
          اضافه به لیست انتظار
        </DefaultButton>

        <DefaultButton
          class="m-2 px-6 py-4 rounded bg-mainGreen text-white"
          @click="component = 'CheckoutInfo'"
        >
          ادامه به درگاه پرداخت
        </DefaultButton>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingDrawerItem from "./shoppingDrawerItem.vue";
import { productManagent } from "../store/productManagment";
import { storeToRefs } from "pinia";

export default {
  components: { ShoppingDrawerItem },

  setup() {
    const manageProducts = productManagent();
    let { getCart } = storeToRefs(manageProducts);

    return { getCart };
  },
};
</script>

<style></style>
