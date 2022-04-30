<template>
  <div
    class="flex flex-row-reverse justify-around w-full h-16 text-gray-900 border-b-2 hover:bg-Sky-100 hover:border-b-4 transition transform p-1 rounded my-1 border-white align-center"
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
        {{ order.fullname }}
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
          <RadioGroup v-model="selected">
            <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
            <div class="space-y-2 text-right" v-if="items">
              <RadioGroupOption
                as="template"
                v-for="item in items[0].cart_items[0]"
                :key="item.id"
                v-slot="{ active, checked }"
              >
                <div
                  :class="[
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-Sky-300 ring-white ring-opacity-60'
                      : '',
                    checked
                      ? 'bg-sky-900 bg-opacity-75 text-white '
                      : 'bg-white ',
                  ]"
                  class="relative transition-all flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
                >
                  <div
                    class="flex flex-row-reverse items-center justify-between w-full"
                  >
                    <div class="flex items-center">
                      <div class="text-sm">
                        <RadioGroupLabel
                          as="p"
                          :class="checked ? 'text-white' : 'text-gray-900'"
                          class="font-medium"
                        >
                          {{ item.item.title }}
                        </RadioGroupLabel>
                        <RadioGroupDescription
                          as="div"
                          :class="checked ? 'text-white' : 'text-gray-500'"
                          class="flex justify-around"
                        >
                          {{ item.item.description }}
                          <span aria-hidden="true"> &middot; </span>
                        </RadioGroupDescription>
                      </div>
                    </div>
                    <div v-show="checked" class="flex-shrink-0 text-white">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill="#fff"
                          fill-opacity="0.2"
                        />
                        <path
                          d="M7 13l3 3 7-7"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
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
          <div class="w-full h-full flex flex-col">
            <div
              class="flex flex-col align-center justify-between p-5 bg-gray-50 rounded-lg divide-solid space-y-2 mt-5"
            >
              <div
                class="flex flex-row-reverse border-b-2 my-1 justify-between w-full"
              >
                <span>نام کاربری</span>
                <span>{{ order.fullname }}</span>
              </div>
              <div
                class="flex flex-row-reverse border-b-2 my-1 justify-between w-full"
              >
                <span>شماره تلفن</span>
                <span>{{ order.phone_number }}</span>
              </div>
              <div
                class="flex flex-row-reverse border-b-2 my-1 justify-between w-full"
              >
                <span>شهر </span>
                <span>{{ order.city }}</span>
              </div>
              <div
                class="flex flex-row-reverse border-b-2 my-1 justify-between w-full"
              >
                <span>استان</span>
                <span>{{ order.province }}</span>
              </div>
              <div
                class="flex flex-row-reverse border-b-2 my-1 justify-between w-full"
              >
                <span>استان</span>
                <span>{{ order.full_address }}</span>
              </div>
              <div
                class="flex flex-row-reverse border-b-2 my-1 justify-between w-full"
              >
                <span>استان</span>
                <span>{{ order.email }}</span>
              </div>
            </div>
            <div class="flex w-full my-2 justify-around">
              <button class="p-3 transition rounded shadow-xl bg-green-400 hover:bg-green-300">انتقال به ارسال شده </button>
            </div>
          </div>
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
import { EyeIcon, TrashIcon } from "@heroicons/vue/solid";
import DefaultButton from "./DefaultButton.vue";
import { computed, onMounted, ref } from "vue";
import { supabase } from "../supabase";

export default {
  props: ["tab", "order"],
  components: {
    modal: defineAsyncComponent(() => import("./Modal.vue")),
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    EyeIcon,
    TrashIcon,
    DefaultButton,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
  },
  setup(props) {
    const selected = ref(null);
    const items = ref([]);
    const displayedTab = computed(() => {
      return props.tab;
    });

    const orderDetailId = computed(() => {
      return props.order.id;
    });

    onMounted(() => {
      getOrderItems();
      console.log(displayedTab.value);
    });

    async function getOrderItems() {
      try {
        const { data, error } = await supabase
          .from("order_items")
          .select()
          .eq("order_detail_id", orderDetailId.value);
        // .eq("product-category", props.category.title);

        if (error) throw error;
        items.value = data;
      } catch (error) {
        alert(error.message);
      } finally {
        console.log(items.value[0].cart_items[0]);
      }
    }

    return { displayedTab, items, selected };
  },
};
</script>

<style scoped></style>
