<template>
  <Menu as="div" class="relative inline-block text-right">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        <h1
          class="text-lg font-black flex items-center justify-center text-gray-500 text-right"
        >
          <span
            class="rounded-lg cursor-pointer transition ease-in duration-300 hover:bg-white px-4 pb-2"
          >
            <h1
              class="nav-link text-2xl font-extrabold flex text-Indigo-800 cursor-pointer"
            >
              <span class="hidden lg:flex"> دسته بندی ها </span>
              <v-icon>mdi-menu</v-icon>
            </h1>
          </span>
        </h1>
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right flex flex-col absolute right-0 mt-2 lg:w-carousel h-96 w-80 lg:h-rem33 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="w-full flex h-3/6">
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-around items-center flex-col',
              ]"
            >
              <img
                src="../assets/images/Shoe.webp"
                class="object-contain h-36"
                alt=""
              />
              <h1
                class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-mainBlue border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
              >
                کفش
              </h1>
            </div>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-around items-center flex-col',
              ]"
            >
              <img
                src="../assets/images/Hat.webp"
                class="object-contain h-36"
                alt=""
              />
              <h1
                class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-mainBlue border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
              >
                کلاه
              </h1>
            </div>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-around items-center flex-col',
              ]"
            >
              <img
                src="../assets/images/Pants.webp"
                class="object-contain h-36"
                alt=""
              />
              <h1
                class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-mainBlue border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
              >
                شلوار
              </h1>
            </div>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-around items-center flex-col',
              ]"
            >
              <img
                src="../assets/images/Shirt.webp"
                class="object-contain h-36"
                alt=""
              />
              <h1
                class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-mainBlue border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
              >
                پیراهن
              </h1>
            </div>
          </MenuItem>
        </div>
        <div class="w-full flex h-3/6">
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-around items-center flex-col',
              ]"
            >
              <img
                src="../assets/images/Hoodie.webp"
                class="object-contain h-36"
                alt=""
              />
              <h1
                class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-mainBlue border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
              >
                هودی
              </h1>
            </div>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-around items-center flex-col',
              ]"
            >
              <img
                src="../assets/images/Socks.webp"
                class="object-contain h-36"
                alt=""
              />
              <h1
                class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-mainBlue border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
              >
                جوراب
              </h1>
            </div>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-around items-center flex-col',
              ]"
            >
              <img
                src="../assets/images/Cap.webp"
                class="object-contain h-36"
                alt=""
              />
              <h1
                class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-mainBlue border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
              >
                کپ
              </h1>
            </div>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <div
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2   h-full cursor-pointer w-1/4 text-lg font-extrabold flex justify-end',
              ]"
            ></div>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
};
</script>

<style scoped>
.Menu {
  z-index: 9999 !important;
}
</style>
