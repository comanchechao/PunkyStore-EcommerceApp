<template>
  <div class="">
    <DefaultButton @click="openModal">
      <v-badge
        :content="cartTotalAmount"
        :value="cartTotalAmount"
        color="deep-purple"
        bordered
        location="top-right"
      >
        <v-icon class="text-white">mdi-shopping-outline</v-icon>
      </v-badge>
    </DefaultButton>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="absolute h-screen right-0 top-0 z-10 overflow-y-auto">
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
            <DialogOverlay class="fixed inset-0 bg-darkPurple bg-opacity-20" />
          </TransitionChild>

          <span class="inline-block h-screen align-left" aria-hidden="true">
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
                class="text-lg font-mainFont leading-6 text-gray-900"
              >
                <div class="flex justify-center p-3 mainFont">
                  <h3 class="text-2xl text-black">خلاصه ی سبد</h3>
                </div>
              </DialogTitle>
              <div
                class="p-1 w-full h-3/4 flex flex-col justify-around align-center"
              >
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
              <div
                class="checkout w-full h-1/4 space-x-4 flex justify-between align-start p-5 bg-mainBlue"
              >
                <h1 class="text-xl text-white">2000 تومان</h1>
                <h1 class="text-xl text-white">جمع سبد خرید</h1>
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
    const cart = productManagent().cart;

    onMounted(() => {
      console.log(cart);
    });

    return {
      isOpen,
      cart,
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
