<template>
  <div class="flex flex-col w-full h-full rounded-xl">
    <div
      class="w-full bg-Sky-400 h-24 flex justify-between align-center p-2 border-b-2 border-mainYellow"
    >
      <DefaultButton class="text-white p-4 rounded-lg">
        <v-icon class="" size="x-large">mdi-heart</v-icon>
      </DefaultButton>
      <h1 class=" p-4 rounded-lg text-white text-3xl font-extrabold">
        برگزیده
      </h1>
    </div>
    <div class="w-full h-full py-4 flex flex-col place-items-center background">
      <div
        class="cardBackground w-full h-full flex flex-col justify-around align-center space-y-2"
      >
        <div class="w-full h-full rounded-t-lg"></div>
        <div
          class="bg-white w-full h-full flex flex-row-reverse justify-around space-y-2 align-center py-6"
        >
          <div class="w-24 h-24 bg-mainGreen rounded-full"></div>
          <Menu as="div" class="relative inline-block text-right">
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
                      نام کالا: پاتریک
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
                      لورم ایپسوم متن ساختگی
                    </DefaultButton>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <DefaultButton @click="removeCartProduct">
            <v-icon class="text-mainPink">mdi-delete</v-icon>
          </DefaultButton>
        </div>
      </div>

      <div
        class="cardBackground w-full h-full flex flex-col justify-around align-center space-y-2"
      >
        <div class="w-full h-full rounded-t-lg"></div>
        <div
          class="bg-white w-full h-full flex flex-row-reverse justify-around space-y-2 align-center py-6"
        >
          <div class="w-24 h-24 bg-mainGreen rounded-full"></div>
          <Menu as="div" class="relative inline-block text-right">
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
                class="absolute text-right z-0 top-0 right-8 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                      نام کالا: پاتریک
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
                      لورم ایپسوم متن ساختگی
                    </DefaultButton>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <DefaultButton @click="removeCartProduct">
            <v-icon class="text-mainPink">mdi-delete</v-icon>
          </DefaultButton>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import DefaultButton from "./DefaultButton.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { EyeIcon, TrashIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ProductCard,
    DefaultButton,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    EyeIcon,
    TrashIcon,
  },
};
</script>

<style scoped>
.background {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #ffffff2a;
}
</style>
