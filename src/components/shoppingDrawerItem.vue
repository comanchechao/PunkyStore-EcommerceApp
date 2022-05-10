<template>
  <div
    class="p-2 w-full justify-around h-28 text-right rounded-2xl bg-gray-100 flex"
  >
    <div
      class="w-full h-full flex justify-center align-center space-x-3 flex-row-reverse"
    >
      <div
        class="bg-green-300 flex rounded-full w-24 h-24 justify-center align-center"
      >
        <img class="rounded-full" :src="firstImage" alt="" />
      </div>
      <Menu as="div" class="relative inline-block text-right mr-2">
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
            class="absolute text-right z-20 top-0 -right-8 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                  تعداد: {{ item.quantity }}
                </DefaultButton>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <DefaultButton
                  :class="[
                    active ? '' : 'text-gray-900',
                    'group flex justify-end items-right w-full px-2 py-2 text-sm',
                  ]"
                >
                  قیمت:{{ item.item.price }}
                </DefaultButton>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <div
                  :class="[
                    active ? ' ' : 'text-gray-900',
                    'group flex justify-between items-center w-full px-2 py-2 text-sm',
                  ]"
                  class="flex flex-row-reverse space-x-5 justify-between align-center"
                >
                  <div>:رنگ</div>
                  <div
                    class="flex flex-row justify-center space-x-2 items-center text-center"
                  >
                    <div class="last:mr-0">
                      <span
                        class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300"
                      >
                        <p
                          :class="{
                            'bg-pink-500': item.color === 'صورتی',
                            'bg-blue-500': item.color === 'آبی',
                            'bg-red-500': item.color === 'قرمز',
                            'bg-yellow-500': item.color === 'زرد',
                            'bg-purple-500': item.color === 'بنفش',
                            'bg-green-500': item.color === 'سبز',
                            'bg-purple-700': item.color === 'نیلی',
                            'bg-red-700': item.color === 'یاقوتی',
                            'bg-goldie': item.color === 'طلایی',
                            'bg-black': item.color === 'سیاه',
                            'bg-white': item.color === 'سفید',
                          }"
                          class="block w-6 h-6 rounded-full"
                        ></p>
                      </span>
                    </div>
                  </div>
                </div>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
      <DefaultButton @click="removeCartProduct">
        <TrashIcon
          class="w-5 h-5 cursor-pointer text-red-500 hover:text-violet-100"
          aria-hidden="true"
      /></DefaultButton>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { EyeIcon, TrashIcon } from "@heroicons/vue/solid";
import DefaultButton from "./DefaultButton.vue";
import { productManagent } from "../store/productManagment";
import { ref } from "@vue/reactivity";
import { onMounted, computed } from "@vue/runtime-core";
import { supabase } from "../supabase";

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
    const item = computed(() => {
      return props.item;
    });

    const firstImage = ref();

    const manageProducts = productManagent();

    onMounted(() => {
      getImage();
    });

    const getImage = async function () {
      if (props.item.item.first_image) {
        try {
          const { data, error } = await supabase.storage
            .from("product-images")
            .download(props.item.item.first_image);
          if (error) throw error;
          firstImage.value = URL.createObjectURL(data);
        } catch (error) {
          alert(error.error_description || error.message);
        }
      }
    };

    let removeCartProduct = () => {
      manageProducts.deleteProduct(item.value);
    };

    return { item, removeCartProduct, firstImage };
  },
};
</script>

<style></style>
