<template>
  <div @click="openModal" class="">
    <slot name="openButton"></slot>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog disablePortal as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="h-screen align-middle" aria-hidden="true">
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
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-yellow-500 shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-2xl font-bold text-center text-black leading-6"
              >
                <slot name="modalTitle"></slot>
              </DialogTitle>
              <div class="mt-2">
                <slot name="modalBody"></slot>
              </div>

              <div class="mt-4 flex items-center justify-center">
                <button
                  type="button"
                  class="inline-flex justify-center items-center px-10 py-2 text-lg transition ease-in duration-200 font-medium hover:text-black text-white bg-pink-700 rounded-full hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  تایید
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
  },

  setup() {
    const isOpen = ref(false);

    function closeModal() {
      isOpen.value = false;
    }
    function openModal() {
      isOpen.value = true;
    }

    return { isOpen, closeModal, openModal };
  },
};
</script>
