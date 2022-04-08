<template>
  <div
    class="flex flex-row-reverse justify-between w-full h-16 text-gray-900 rounded my-1 border-white align-center"
  >
    <div
      :class="{ 'bg-mainPink': displayedTab === 'SentOrders' }"
      class="date bg-mainYellow text-black px-4 py-2 rounded flex"
    >
      2022/2/2
    </div>
    <div class="customerInfo">
      <Menu as="div" class="relative inline-block text-right mr-2">
        <div class="flex w-full flex-row justify-center align-center">
          <MenuButton
            class="inline-flex w-full flex-row-reverse justify-between align-center transition ease-in duration-200 w-full px-4 py-2 text-sm font-medium text-white bg-mainGreen rounded-md hover:bg-Amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <div class="flex text-black text-lg font-black">کالا</div>
            <EyeIcon
              class="w-5 h-5 mr-2 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
        >
          <MenuItems
            class="absolute text-right z-10 top-0 right-8 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1 w-full">
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  class="text-left"
                  :class="[
                    active ? '   ' : 'text-gray-900',
                    'group flex justify-end items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  تعداد:5
                </DefaultButton>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? '' : 'text-gray-900',
                    'group flex justify-end items-right w-full px-2 py-2 text-sm',
                  ]"
                >
                  قیمت:25000
                </DefaultButton>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? ' ' : 'text-gray-900',
                    'group flex justify-end items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                </DefaultButton>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>

    <div class="orderInfo">
      <Menu as="div" class="relative inline-block text-right mr-2">
        <div class="flex flex-row justify-center align-center">
          <MenuButton
            class="inline-flex flex-row-reverse text-black text-md font-black align-center justify-between transition ease-in duration-200 w-full px-4 py-2 bg-mainGreen rounded-md hover:bg-Amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            اطلاعات ارسال
            <!-- <EyeIcon
              class="w-5 h-5 mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> -->
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
        >
          <MenuItems
            class="absolute text-right z-10 top-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1 w-full">
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  class="text-left"
                  :class="[
                    active ? '   ' : 'text-gray-900',
                    'group flex justify-end items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  نام کامل: بهمیکس
                </DefaultButton>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? '' : 'text-gray-900',
                    'group flex justify-end items-right w-full px-2 py-2 text-sm',
                  ]"
                >
                  شهر:دولچکبانا
                </DefaultButton>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? '' : 'text-gray-900',
                    'group flex justify-end items-right w-full px-2 py-2 text-sm',
                  ]"
                >
                  همراه:0935 599 4849
                </DefaultButton>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? '' : 'text-gray-900',
                    'group flex justify-end w-full px-2 py-2 text-sm',
                  ]"
                >
                  شهر:دولچکبانا
                </DefaultButton>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? ' ' : 'text-gray-900',
                    'group flex justify-end items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  استان: خراسانی
                </DefaultButton>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { EyeIcon, TrashIcon } from "@heroicons/vue/solid";
import DefaultButton from "./DefaultButton.vue";
import { computed, onMounted } from "vue";
export default {
  props: ["tab"],
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    EyeIcon,
    TrashIcon,
    DefaultButton,
  },
  setup(props) {
    const displayedTab = computed(() => {
      return props.tab;
    });

    onMounted(() => {
      console.log(displayedTab.value);
    });

    return { displayedTab };
  },
};
</script>

<style></style>
