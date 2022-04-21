<template>
  <div
    class="flex flex-row-reverse  justify-around w-full h-16 text-gray-900 border-b-2 hover:bg-Sky-100 hover:border-b-4 transition transform p-1 rounded my-1 border-white align-center"
  >
    <div
      :class="{
        'bg-Amber-500 hover:bg-yellow-400': displayedTab === 'SentOrders',
        'bg-blue-500 text-white hover:bg-blue-700':
          displayedTab === 'AllOrders',
        'hover:bg-green-500': displayedTab === 'NewOrders',
      }"
      class="date bg-mainGreen hover:text-gray-50 transition text-black px-4 py-2 rounded flex"
    >
      2022/2/2
    </div>
    <div
      :class="{
        'bg-Amber-500 hover:bg-yellow-400': displayedTab === 'SentOrders',
        'bg-blue-500 text-white hover:bg-blue-700':
          displayedTab === 'AllOrders',
        'hover:bg-green-500': displayedTab === 'NewOrders',
      }"
      class="xs:hidden w-32 flex-col text-center text-black text-lg font-black align-center justify-center transition ease-in duration-200 w-full py-2 bg-mainGreen rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <h1
        class="self-center align-center transition ease-in duration-200 hover:text-white"
      >
        نام کاربری
      </h1>
    </div>
    <div class="customerInfo">
      <modal>
        <template #openButton>
          <button
            :class="{
              'bg-Amber-500 hover:bg-yellow-400': displayedTab === 'SentOrders',
              'bg-blue-500 text-white hover:bg-blue-700':
                displayedTab === 'AllOrders',
              'hover:bg-green-500': displayedTab === 'NewOrders',
            }"
            class="menuButton inline-flex flex-row-reverse text-black text-md font-black align-center justify-between transition ease-in duration-200 w-full px-4 py-2 bg-mainGreen rounded-md hover:bg-Sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <h1 class="transition ease-in duration-200 hover:text-white">
              کالا
            </h1>
            <!-- <EyeIcon
              class="w-5 h-5 mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> -->
          </button>
        </template>

        <template #modalTitle>
          <h1>کالا ها</h1>
        </template>

        <template #modalBody>
          <radio-group>
            <template #itemTitle>
              کمل
            </template>

            <template #itemDetail>
             <div class="flex w-full justify-around">
                <span>2555 تومان </span>
               <span>تعداد : 1 </span>
                <span>رنگ: آبی </span>
                 <span>سایز: xl </span>
             </div>
            </template>
          </radio-group>
        </template>
      </modal>
    </div>

    <div class="orderInfo">
      <modal>
        <template #openButton>
          <button
            :class="{
              'bg-Amber-500 hover:bg-yellow-400': displayedTab === 'SentOrders',
              'bg-blue-500 text-white hover:bg-blue-700':
                displayedTab === 'AllOrders',
              'hover:bg-green-500': displayedTab === 'NewOrders',
            }"
            class="menuButton inline-flex flex-row-reverse text-black text-md font-black align-center justify-between transition ease-in duration-200 w-full px-4 py-2 bg-mainGreen rounded-md hover:bg-Sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <h1 class="transition ease-in duration-200 hover:text-white">
              اطلاعات ارسال
            </h1>
            <!-- <EyeIcon
              class="w-5 h-5 mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            /> -->
          </button>
        </template>

        <template #modalTitle>
          <h1>اطلاعات کاربر</h1>
        </template>

        <template #modalBody>
          <div class="flex flex-col align-center justify-between p-5 bg-gray-50 rounded-lg divide-solid space-y-2 mt-5">
            <div class="flex flex-row-reverse border-b-2 my-1 justify-between w-full">
              <span>نام کاربری</span>
              <span>بهمیکس</span>
            </div>
              <div class="flex flex-row-reverse border-b-2 my-1 justify-between w-full">
              <span>شماره تلفن</span>
              <span>3442333</span>
            </div>
              <div class="flex flex-row-reverse border-b-2 my-1 justify-between w-full">
              <span>شهر </span>
              <span>بهمیکس</span>
            </div>
              <div class="flex flex-row-reverse border-b-2 my-1 justify-between w-full">
              <span>استان</span>
              <span>بهمیکسلند</span>
            </div>
          </div>
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import modal from "../components/Modal.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { EyeIcon, TrashIcon } from "@heroicons/vue/solid";
import DefaultButton from "./DefaultButton.vue";
import { computed, onMounted } from "vue";
import RadioGroup from '../components/RadioGroup.vue'
export default {
  props: ["tab"],
  components: {
    modal,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    EyeIcon,
    TrashIcon,
    DefaultButton,
    RadioGroup
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

<style scoped></style>
