<template>
  <div class="fixed flex items-center justify-center">
    <button
      @click="openModal"
      class="bg-mainYellow w-28 h-28 shadow-2xl rounded-xl"
    >
      <v-icon>mdi-card-plus</v-icon>
      <h2>کالا</h2>
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="div">
    <Dialog as="div" @close="closeModal">
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

          <span class="inline-block h-screen align-middle" aria-hidden="true">
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
              class="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="div"
                class="flex flex-row justify-around text-lg font-medium leading-6 text-white"
              >
                <button
                  @click="tab = 'catagory'"
                  :class="{ 'bg-pink-500': tab === 'catagory' }"
                  class="w-full bg-mainYellow h-full py-5"
                >
                  <h1>کالا</h1>
                </button>
                <button
                  @click="tab = 'product'"
                  :class="{ 'bg-pink-500': tab === 'product' }"
                  class="w-full bg-mainYellow h-full py-5"
                >
                  <h1>دسته</h1>
                </button>
              </DialogTitle>
              <div class="mt-2 p-5">
                <form
                  v-show="tab === 'product'"
                  @submit.prevent=""
                  class="font-mainFont h-screen"
                >
                  <div class="flex flex-wrap flex-col justify-center p-5">
                    <div
                      class="bg-Sky-500 flex justify-center rounded p-4 font-bold text-white"
                    >
                      <h1>کالا جدید</h1>
                    </div>
                    <div class="">
                      <input
                        v-model="fullName"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="نام کامل"
                      />
                    </div>
                    <div class="">
                      <input
                        v-model="phoneNumber"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="number"
                        placeholder="قیمت"
                      />
                    </div>
                    <div class="">
                      <input
                        v-model="emailAddress"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="email"
                        placeholder="ادرس ایمیل"
                      />
                    </div>
                    <div class="mx-1">
                      <input
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="checkbox"
                        value=""
                        checked
                      /><span class="ml-2 text-gray-700">xl</span>
                    </div>
                    <div class="mx-1">
                      <input
                        v-model="fullName"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="استان"
                      />
                    </div>
                    <div class="">
                      <input
                        v-model="fullAddress"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="آدرس کامل"
                      />
                    </div>
                    <div class="">
                      <div class="flex justify-center my-2">
                        <DefaultButton
                          v-show="!loading"
                          @click="updateProfile"
                          class="px-6 py-4 rounded bg-Sky-500 text-white"
                        >
                          تایید
                        </DefaultButton>
                        <v-progress-circular
                          v-show="loading"
                          :size="50"
                          color="red"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </div>
                  </div>
                </form>

                <form
                  v-show="tab === 'catagory'"
                  @submit.prevent=""
                  class="font-mainFont h-screen"
                >
                  <div class="flex flex-wrap flex-col justify-center p-5">
                    <div
                      class="bg-Sky-500 flex justify-center rounded p-4 font-bold text-white"
                    >
                      <h1>دسته جدید</h1>
                    </div>
                    <div class="">
                      <input
                        v-model="fullName"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="نام دسته"
                      />
                    </div>

                    <div class="mx-1">
                      <input
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="checkbox"
                        value=""
                        checked
                      /><span class="ml-2 text-gray-700">xl</span>
                    </div>
                    <div class="">
                      <div class="flex justify-center my-2">
                        <DefaultButton
                          v-show="!loading"
                          @click="updateProfile"
                          class="px-6 py-4 rounded bg-Sky-500 text-white"
                        >
                          تایید
                        </DefaultButton>
                        <v-progress-circular
                          v-show="loading"
                          :size="50"
                          color="red"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  بستن
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
    const tab = ref("product");
    const isOpen = ref(false);

    function closeModal() {
      isOpen.value = false;
    }
    function openModal() {
      isOpen.value = true;
    }

    return { closeModal, openModal, isOpen, tab };
  },
};
</script>
