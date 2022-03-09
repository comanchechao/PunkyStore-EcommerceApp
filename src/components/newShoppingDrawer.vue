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
      <div class="absolute right-0 top-0 z-10 overflow-y-auto">
        <div class="max-h-screen text-center">
          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="transfrom -translate-x-24 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-500 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom -translate-x-24 scale-95"
          >
            <DialogOverlay class="fixed inset-0" />
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
              class="inline-block w-full h-screen overflow-hidden text-left align-right transition-all transform bg-LightBlue-300 shadow-xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-mainFont leading-6 text-gray-900"
              >
                <div class="flex justify-center p-5 mainFont">
                  <h3 class="text-3xl">سبد خرید</h3>
                </div>
              </DialogTitle>
              <div
                class="p-1 w-full h-screen flex flex-col lg:flex-col justify-around align-center"
              >
                <div
                  class="max-h-96 lg:max-h-full h-full w-5/6 space-y-3 flex flex-col overflow-x-scroll"
                >
                  <ShoppingDrawerItem v-for=" item in cart " :key="item.id" :item="item" />
                </div>
                <div
                  class="checkout w-full lg:h-1/3 flex justify-center align-end p-5"
                >
                  <div
                    class="w-4/5 h-full flex flex-col justify-center align-end"
                  >
                    <div class="w-full h-2/3 flex justify-evenly flex-col">
                      <div class="flex justify-around">
                        <h1
                          class="font-extralight font-mainFont text-2xl text-mainBlue"
                        >
                          Subtotal
                        </h1>
                        <h1
                          class="font-extralight font-mainFont text-2xl text-mainBlue"
                        >
                          Shipping
                        </h1>

                        <h1
                          class="font-bold font-mainFont text-3xl text-mainBlue"
                        >
                          Total
                        </h1>
                      </div>
                      <div class="flex justify-around h-full align-center">
                        <h1
                          class="font-extralight font-mainFont text-2xl text-mainBlue"
                        >
                          {{ cartTotalPrice }} IRL
                        </h1>
                        <h1
                          class="font-extralight font-mainFont text-2xl text-mainBlue"
                        >
                          15 IRL
                        </h1>

                        <h1
                          class="font-bold font-mainFont text-3xl text-mainBlue"
                        >
                          {{ total }} IRL
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="checkout w-full lg:h-1/3 flex justify-center align-end p-5"
              >
                <div
                  class="w-4/5 h-full flex flex-col justify-center align-end"
                >
                  <div
                    class="w-full h-2/3 flex justify-evenly flex-col bg-red-300"
                  >
                    <div class="flex justify-around">
                      <h1
                        class="font-extralight font-mainFont text-2xl text-mainBlue"
                      >
                        Subtotal
                      </h1>
                      <h1
                        class="font-extralight font-mainFont text-2xl text-mainBlue"
                      >
                        ارسال
                      </h1>

                      <h1
                        class="font-bold font-mainFont text-3xl text-mainBlue"
                      >
                        کل پرداختی
                      </h1>
                    </div>
                    <div class="flex justify-around h-full align-center">
                      <h1
                        class="font-extralight font-mainFont text-2xl text-mainBlue"
                      >
                        {{ cartTotalPrice }} IRL
                      </h1>
                      <h1
                        class="font-extralight font-mainFont text-2xl text-mainBlue"
                      >
                        15 IRL
                      </h1>

                      <h1
                        class="font-bold font-mainFont text-3xl text-mainBlue"
                      >
                        {{ total }} IRL
                      </h1>
                    </div>
                  </div>
                  <div class="h-1/3 w-full flex justify-center align-center">
                    <!-- <button class="py-2 editBtn">
              <span class="px-12 font-mainFont text-2xl editText"> Edit </span>
            </button> -->
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
    const cart = productManagent().cart

    onMounted(() =>{
      console.log(cart)
    })

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
