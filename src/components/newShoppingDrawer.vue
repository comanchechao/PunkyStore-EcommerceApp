<template>
  <div class="">
    <DefaultButton @click="openModal">
      <v-badge
        :content="cartItemCount.toString()"
        :value="cartItemCount"
        color="deep-purple"
        bordered
        location="top-right"
      >
        <v-icon class="text-white">mdi-cart</v-icon>
      </v-badge>
    </DefaultButton>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="absolute overflow-hidden h-screen right-0 top-0 z-10">
        <div class="max-h-screen text-center">
          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="transfrom -translate-x-24 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom -translate-x-24 scale-95"
          >
            <DialogOverlay class="fixed inset-0 bg-gray-700 bg-opacity-20" />
          </TransitionChild>

          <span
            class="inline-block h-screen align-left"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-100 ease-out"
            enter-from="transfrom translate-x-32 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom translate-x-32 scale-95"
          >
            <div
              class="inline-block w-full h-screen overflow-hidden text-left align-right transition-all transform bg-gray-100 shadow-xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-mainFont leading-6 text-gray-50"
              >
                <div
                  class="flex h-24 align-center bg-blue-800 justify-center p-3 mainFont"
                >
                  <h3 class="text-2xl">خلاصه ی سبد</h3>
                </div>
              </DialogTitle>
              <div
                class="w-full h-full flex flex-col justify-around align-center"
              >
                <div
                  class="h-full w-full space-y-1 flex flex-col overflow-y-scroll divide-double divide-zinc-600 divide-y-8"
                >
                  <ShoppingDrawerItem
                    v-for="item in getCart"
                    :key="item.id"
                    :item="item"
                  />
                </div>
                <div
                  class="checkout w-full h-1/2 flex justify-center align-center bg-mainBlue"
                >
                  <div
                    class="flex flex-row-reverse w-full h-full space-x-4 justify-around mt-10 align-start"
                  >
                    <div
                      class="mx-1 flex flex-col rounded-full h-1/3 justify-center w-1/2 align-center transition border-b-2 transform hover:bg-mainYellow"
                    >
                      <h1 class="text-xl text-white">
                        {{ cartTotalPrice }}
                      </h1>
                      <h1 class="text-xl text-white">تومان</h1>
                    </div>

                    <div
                      class="mx-1 flex justify-center align-center content-center w-1/2 rounded-full transition border-b-2 transform hover:bg-mainYellow h-1/3"
                    >
                      <router-link to="/checkoutPage">
                        <DefaultButton
                          @click="drawer = false"
                          class="px-6 text-2xl font-bold text-white w-full h-full"
                        >
                          ادامه
                        </DefaultButton>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { onMounted, ref } from "vue";
import DefaultButton from "./DefaultButton.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import ShoppingDrawerItem from "./shoppingDrawerItem.vue";
import { productManagent } from "../store/productManagment";
import { storeToRefs } from "pinia";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DefaultButton,
    ShoppingDrawerItem,
  },

  setup() {
    const isOpen = ref(false);
    const drawer = ref(false);
    const manageProducts = productManagent();
    let { getCart, cartTotalAmount, cartTotalPrice, cartItemCount } =
      storeToRefs(manageProducts);

    return {
      isOpen,
      getCart,
      cartTotalAmount,
      cartTotalPrice,
      cartItemCount,
      drawer,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
};
</script>
