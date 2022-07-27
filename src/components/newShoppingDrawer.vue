<template>
  <div class="">
    <DefaultButton @click="openModal">
      <v-badge
        :content="cartItemCount"
        :value="cartItemCount"
        color="deep-purple"
        bordered
        location="top-left"
      >
        <v-icon class="text-white">mdi-cart</v-icon>
      </v-badge>
    </DefaultButton>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed h-screen overflow-y-hidden right-0 top-0 z-10">
        <div class="h-screen text-center overflow-y-hidden">
          <TransitionChild
            as="template"
            enter="duration-100 ease-out"
            enter-from="transfrom -translate-x-24 "
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom -translate-x-24 scale-95"
          >
            <DialogOverlay
              class="fixed overflow-y-hidden inset-0 h-screen bg-blue-800 bg-opacity-20"
            />
          </TransitionChild>

          <span class="inline-block h-screen align-left" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="transfrom translate-x-24 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom translate-x-24 scale-95"
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
                  <h3 class="text-2xl mx-14">خلاصه ی سبد</h3>
                </div>
              </DialogTitle>
              <div
                class="w-full h-full flex flex-col justify-around align-center"
              >
                <div
                  class="h-full w-full space-y-1 flex flex-col overflow-y-scroll divide-double divide-zinc-600 divide-y-8"
                >
                  <ShoppingDrawerItem
                    v-for="item in cart"
                    :key="item.id"
                    class="group"
                    :item="item"
                  />
                </div>
                <div
                  class="checkout w-full h-1/2 flex justify-center align-center bg-blue-800 px-9"
                >
                  <div
                    class="flex flex-row-reverse w-full h-full space-x-4 justify-around mt-10 align-start"
                  >
                    <div
                      class="mx-1 flex flex-col rounded-lg h-1/3 justify-center w-1/2 align-center transition transform hover:bg-goldie"
                    >
                      <h1 class="text-xl text-white">
                        {{ cartTotalPrice }}
                      </h1>
                      <h1 class="text-xl text-white font-black">تومان</h1>
                    </div>

                    <div
                      class="mx-2 flex justify-center align-center content-center w-1/2 rounded-lg transition border-2 transform hover:bg-goldie h-1/3"
                    >
                      <router-link to="/checkoutPage">
                        <DefaultButton
                          @click="drawer = false"
                          class="text-2xl rounded-full font-bold text-white w-full h-full"
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
import {
  computed,
  defineAsyncComponent,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import DefaultButton from "./DefaultButton.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { CardManagement } from "../store/cardManagment";
import { storeToRefs } from "pinia";
import gsap from "gsap";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DefaultButton,
    ShoppingDrawerItem: defineAsyncComponent(() =>
      import("./shoppingDrawerItem.vue")
    ),
  },

  setup() {
    const isOpen = ref(false);
    const drawer = ref(false);
    const getCart = ref([]);
    const manageCard = CardManagement();
    let { cart, cartTotalAmount, cartTotalPrice, cartItemCount } =
      storeToRefs(manageCard);

    watch(cart, () => {
      getCart.value = cart.value;
    });

    onMounted(() => {
      console.log(cart.value);
    });

    function closeModal() {
      isOpen.value = false;
    }
    function openModal(el) {
      isOpen.value = true;
    }

    return {
      isOpen,
      cartTotalAmount,
      cartTotalPrice,
      cartItemCount,
      drawer,
      getCart,
      openModal,
      closeModal,
      cart,
    };
  },
};
</script>
