<template>
  <div class="">
    <DefaultButton @click="openModal">
      <v-icon class="text-white"
        >mdi-microsoft-xbox-controller-menu</v-icon
      ></DefaultButton
    >
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="absolute left-0 top-0 z-10 overflow-y-auto">
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
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full h-screen overflow-hidden text-left align-left transition-all transform bg-Sky-300 shadow-xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                <div
                  class="p-6 flex border-b-2 border-mainYellow flex-row w-full justify-around"
                >
                  <DefaultButton
                    @click="bar = 'menu'"
                    class="px-4 hover:bg-mainYellow ease-in-out transition-colors text-2xl"
                    >منو</DefaultButton
                  >
                  <DefaultButton
                    @click="bar = 'catagories'"
                    class="hover:bg-mainYellow px-4 transition ease-in-out duration-300 delay-150 text-2xl"
                    >دسته بندی</DefaultButton
                  >
                </div>
              </DialogTitle>
              <div
                class="h-full w-full p-6 flex flex-col justify-start align-center"
                :class="{ hidden: bar !== 'menu' }"
              >
                <DefaultButton class=" ">خونه</DefaultButton>
                <DefaultButton class=" ">خرید</DefaultButton>
                <DefaultButton class="text-2xl"
                  >درباره ی پانکی مانکی</DefaultButton
                >
                <DefaultButton class=" ">ادمین</DefaultButton>
              </div>

              <div
                class="h-full w-full p-6 flex flex-col justify-start align-center"
                :class="{ hidden: bar !== 'catagories' }"
              >
                <DefaultButton class=" ">هودی</DefaultButton>
                <DefaultButton class=" ">آکسسوری</DefaultButton>
                <DefaultButton class="text-2xl">تیشرت</DefaultButton>
                <DefaultButton class=" ">کلاه</DefaultButton>
                <DefaultButton class=" ">پیراهن</DefaultButton>
                <DefaultButton class=" ">کفش</DefaultButton>
                <DefaultButton class="text-2xl">دیزاین</DefaultButton>
                <DefaultButton class=" ">بول</DefaultButton>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
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
    const bar = ref("menu");

    return {
      isOpen,
      drawer,
      bar,
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
