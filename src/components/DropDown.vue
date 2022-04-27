<template>
  <Menu as="div" class="relative inline-block text-right z-20">
    <div>
      <MenuButton
        class="inline-flex justify-center w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        <h1
          class="text-lg font-black flex items-center justify-end text-gray-500 text-right"
        >
          <span
            class="border-b-4 rounded-lg cursor-pointer transition ease-in duration-300 hover:bg-white border-LightBlue-900 px-4 pb-2"
          >
            <v-icon class="text-gray-500" aria-hidden="true" size="x-large"
              >mdi-menu-down</v-icon
            >
            <slot name="title"></slot>
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
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2 text-lg font-extrabold flex justify-end',
              ]"
            >
              <slot name="firstOption"> </slot>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2 text-lg font-extrabold flex justify-end',
              ]"
            >
              <slot name="secondOption"></slot>
              <slot name="secondPicture"></slot>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900'
                  : 'text-gray-500',
                ' px-4 py-2 text-lg font-extrabold flex justify-end',
              ]"
            >
              <slot name="thirdOption"></slot>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              type="submit"
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900 '
                  : 'text-gray-500',
                ' px-4 py-2 text-lg font-extrabold flex justify-end',
              ]"
            >
              <slot name="forthOption"></slot>
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              type="submit"
              :class="[
                active
                  ? 'bg-yellow-500 transition ease-in duration-200 text-gray-900 '
                  : 'text-gray-500',
                ' px-4 py-2 text-lg font-extrabold flex justify-end',
              ]"
            >
              <slot name="fifthOption"></slot>
            </a>
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

<style></style>
