<template>
  <div class="p-2 w-full justify-around h-28 roun rounded-2xl bg-gray-100 flex">
    <div class="w-full h-full flex justify-center align-center space-x-3">
      <div
        class="bg-green-300 flex rounded-full w-24 h-24 justify-center align-center"
      >
        {{ item.item.title }}
      </div>
      <Menu as="div" class="relative inline-block text-left">
        <div class="flex flex-row justify-center align-center">
          <MenuButton
            class="inline-flex justify-center transition ease-in duration-200 w-full px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-Amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            جزئیات
            <EyeIcon
              class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </MenuButton>
          <DefaultButton @click="removeCartProduct">
            <TrashIcon
              class="w-5 h-5 ml-2 cursor-pointer -mr-1 text-red-500 hover:text-violet-100"
              aria-hidden="true"
          /></DefaultButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute z-10 top-0 right-8 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? 'bg-violet-500 text-pink-600' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <EditIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-violet-400"
                    aria-hidden="true"
                  />
                  تعداد: {{ item.quantity }}
                </DefaultButton>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? 'bg-violet-500 text-pink-600' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <DuplicateIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-violet-400"
                    aria-hidden="true"
                  />
                  قیمت:{{ item.item.price }}
                </DefaultButton>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? 'bg-violet-500 text-pink-600' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <ArchiveIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-violet-400"
                    aria-hidden="true"
                  />
                  توضیحات کالا {{ item.item.description }}
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
import { productManagent } from "../store/productManagment";
import { ref } from "@vue/reactivity";
export default {
  props: ["item"],
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
    const item = ref(props.item);
    const productManagment = productManagent();

    const removeCartProduct = function () {
      productManagment.removeProduct(item.value);
    };

    return { item, removeCartProduct };
  },
};
</script>

<style></style>
