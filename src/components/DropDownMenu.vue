<template>
  <div class="w-56 text-right">
    <Menu as="div" class="relative inline-block text-right">
      <div>
        <MenuButton
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          فیلترها
          <v-icon>mdi-filter-variant</v-icon>
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
          class="absolute text-right right-0 w-80 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1 flex flex-col justify-end">
            <h1>مرتب سازی بر اساس</h1>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group  rounded-md w-full px-2 py-2 text-sm',
                ]"
              >
                محبوبیت
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <!-- <Switch
                v-model="enabled"
                :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
                class="relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span class="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                  class="pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                />
              </Switch> -->
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  ' ',
                ]"
              >
                جدیدترین
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                قیمت : بالا به پایین
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                قیمت : پایین به بالا
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { ref } from "vue";

import { Menu, MenuButton, MenuItems, MenuItem, Switch } from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Switch,
  },
  setup() {
    const enabled = ref(false);

    return { enabled };
  },
};
</script>
