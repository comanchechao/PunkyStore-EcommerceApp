<template>
  <div class="w-screen h-screen">
    <div class="bg-mainPink h-full w-full items-center flex justify-center">
            <div
                  class="h-full w-full space-y-3 flex flex-col overflow-y-scroll"
                >
                  <ShoppingDrawerItem
                    v-for="item in cart"
                    :key="item.id"
                    :item="item"
                  />
                </div>
    </div>
  </div>
</template>

<script>
import { productManagent } from "../store/productManagment";
import ShoppingDrawerItem from "../components/shoppingDrawerItem.vue";
export default {
    components:{ShoppingDrawerItem},
  setup() {
    const cart = productManagent().cart;

    return { cart };
  },
};
</script>

<style></style>
