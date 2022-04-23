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
            enter="duration-100 ease-out"
            enter-from="transfrom translate-x-24 "
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom translate-x-24 scale-95"
          >
            <DialogOverlay class="fixed inset-0 bg-darkPurple bg-opacity-20" />
          </TransitionChild>

          <span class="inline-block h-screen align-left" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="transfrom -translate-x-24 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="transfrom -translate-x-24 scale-95"
          >
            <div
              class="inline-block text-white w-60 h-screen overflow-hidden text-xl text-left align-left transition-all transform bg-LightBlue-600 shadow-xl"
            >
              <DialogTitle as="h3" class="text-xl font-medium leading-6">
                <TabGroup as="div">
                  <TabList
                    class="flex flex-col my-2 mx-1 p-4 space-x-1 bg-blue-900/20 rounded"
                  >
                    <Tab as="div">
                      <DefaultButton
                        @click="bar = 'categories'"
                        :class="[
                          'w-full my-1 py-2.5 text-lg leading-5 font-medium text-white rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-LightBlue-600 ring-white ring-opacity-60',
                          bar === 'categories'
                            ? 'bg-mainPink'
                            : 'text-white hover:bg-darkPurple hover:text-white',
                        ]"
                      >
                        دسته بندی
                      </DefaultButton>
                      <DefaultButton
                        @click="bar = 'menu'"
                        :class="[
                          'w-full my-1 py-2.5 text-lg leading-5 font-medium text-white rounded-lg',
                          'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-LightBlue-600 ring-white ring-opacity-60',
                          bar === 'menu'
                            ? 'bg-mainPink text-black shadow'
                            : 'text-gray-800 hover:bg-darkPurple hover:text-white',
                        ]"
                      >
                        منو
                      </DefaultButton>
                    </Tab>
                  </TabList>
                </TabGroup>
              </DialogTitle>
              <div
                class="h-full w-full p-6 flex flex-col justify-start align-center focus:outline-none focus:ring-2 ring-offset-2 ring-offset-LightBlue-600 ring-white ring-opacity-60"
                :class="{ hidden: bar !== 'menu' }"
              >
                <router-link to="/">
                  <DefaultButton class="px-6 rounded-lg text-2xl shadow-2xl"
                    >خونه</DefaultButton
                  >
                </router-link>
                <router-link to="/shop">
                  <DefaultButton class="px-6 rounded-lg text-2xl shadow-2xl"
                    >خرید</DefaultButton
                  >
                </router-link>
                <router-link to="/AboutUs">
                  <DefaultButton class="px-6 rounded-lg text-2xl shadow-2xl"
                    >درباره ی پانکی مانکی</DefaultButton
                  >
                </router-link>

                <router-link to="/admin">
                  <DefaultButton class="px-6 rounded-lg text-2xl shadow-2xl"
                    >ادمین</DefaultButton
                  >
                </router-link>
              </div>

              <div
                class="h-full w-full p-6 flex flex-col justify-start align-center"
                :class="{ hidden: bar !== 'categories' }"
              >
                <DefaultButton class="px-6 rounded-lg">هودی</DefaultButton>
                <DefaultButton class="px-6 rounded-lg">آکسسوری</DefaultButton>
                <DefaultButton class="px-6 rounded-lg">تیشرت</DefaultButton>
                <DefaultButton class="px-6 rounded-lg">کلاه</DefaultButton>
                <DefaultButton class="px-6 rounded-lg">پیراهن</DefaultButton>
                <DefaultButton class="px-6 rounded-lg">کفش</DefaultButton>
                <DefaultButton class="px-6 rounded-lg">دیزاین</DefaultButton>
                <DefaultButton class="px-6 rounded-lg">شلوار</DefaultButton>
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
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TabGroup,
    Tab,
    TabList,
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
