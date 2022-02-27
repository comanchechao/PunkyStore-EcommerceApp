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
        <div class="min-h-screen text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="translate-x-10"
            enter-to="translate-x-0"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-left" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-100 ease-out"
            enter-from="transfrom translate-x-24 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom translate-x-24 scale-95"
          >
            <div
              class="inline-block w-full h-screen overflow-hidden text-left align-right transition-all transform bg-Sky-300 shadow-xl"
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
                class="p-4 w-full h-2/3 flex flex-row lg:flex-col justify-around align-center"
              >
                <div
                  class="max-h-52 lg:max-h-full w-5/6 h-4/5 space-y-3 flex flex-col overflow-x-scroll"
                >
                  <div
                    v-for="item in cart"
                    :key="item.id"
                    class="w-full h-24 flex"
                  >
                    <div
                      class="w-2/3 h-full flex justify-center align-center space-x-3"
                    >
                      <img
                        class="float-left rounded-full w-24 h-24"
                        :src="item.item.image"
                      />
                      <div
                        class="space-y-2 flex justify-end flex-col align-start"
                      >
                        <h1 class="font-mainFont font-extrabold text-2xl">
                          {{ item.item.title }}
                        </h1>
                        <button
                          class="py-1 bg-Rose-300 border-2 border-pink-800 rounded-full"
                          @click.prevent="removeCartProduct(item)"
                        >
                          <span
                            class="px-5 font-mainFont text-2xl text-pink-800"
                          >
                            Delete
                          </span>
                        </button>
                      </div>
                    </div>
                    <div
                      class="w-1/3 h-full flex justify-between align-center flex-col"
                    >
                      <h1 class="font-mainFont font-black text-2xl">
                        {{ item.item.price }}
                      </h1>
                      <div class="flex justify-center align-center">
                        <v-btn
                          small
                          large
                          fab
                          plain
                          class="minus"
                          color="#00ffaa"
                          @click="decrementQuantity(item)"
                        >
                          <v-icon>mdi-minus</v-icon></v-btn
                        >
                        <p class="font-black font-mainFont text-mainBlue">
                          {{ item.quantity }}
                        </p>
                        <v-btn
                          light
                          large
                          fab
                          plain
                          class="plus"
                          color="#00ffaa"
                          @click="incrementQuantity(item)"
                          ><v-icon>mdi-plus</v-icon></v-btn
                        >
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
import { ref } from "vue";
import DefaultButton from "./DefaultButton.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DefaultButton,
  },

  setup() {
    const isOpen = ref(false);
    const drawer = ref(false);

    return {
      isOpen,
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
