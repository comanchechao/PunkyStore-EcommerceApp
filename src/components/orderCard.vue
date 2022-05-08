<template>
  <Disclosure v-slot="{ open }">
    <div
      class="flex flex-row-reverse space-x-1 justify-around w-full h-16 text-gray-900 border-b-2 hover:bg-Sky-100 hover:border-b-4 transition transform p-1 rounded my-1 border-white align-center"
    >
      <DisclosureButton>
        <v-progress-circular
          v-show="loading"
          :size="20"
          color="green"
          indeterminate
        ></v-progress-circular>
        <ChevronDownIcon
          v-show="!loading"
          :class="open ? 'transform rotate-180' : ''"
          class="w-5 h-5 transition text-black"
        />
      </DisclosureButton>

      <div
        class="xs:w-28 date bg-mainGreen hover:text-gray-50 transition text-black px-4 py-2 rounded flex"
      >
        2022/2/2
      </div>
      <div
        class="xs:w-28 w-32 flex-col text-center text-black text-md font-black align-center justify-center transition ease-in duration-200 w-full py-2 bg-mainGreen rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <h1
          class="self-center align-center transition ease-in duration-200 hover:text-white"
        >
          {{ order.fullname }}
        </h1>
      </div>
      <div class="customerInfo">
        <div
          class="xs:w-28 w-32 flex-col text-center text-black text-ld font-black align-center justify-center transition ease-in duration-200 w-full py-2 bg-mainGreen rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <h1
            class="self-center align-center transition ease-in duration-200 hover:text-white"
          >
            {{ order.city }}
          </h1>
        </div>
      </div>

      <div class="orderInfo">
        <div
          class="xs:hidden w-32 flex-col text-center text-black text-lg font-black align-center justify-center transition ease-in duration-200 w-full py-2 bg-mainGreen rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <h1
            class="self-center align-center transition ease-in duration-200 hover:text-white"
          >
            {{ order.phone_number }}
          </h1>
        </div>
      </div>
    </div>

    <DisclosurePanel>
      <div
        class="flex border-b-2 border-Amber-400 justify-center w-full transform transition bg-Sky-100 py-5 h-full"
      >
        <div class="flex w-full flex-wrap justify-around">
          <h2 class="border-b-2 m-1 transition">{{ order.email_address }}</h2>
          <h2 class="border-b-2 m-1 transition">{{ order.province }}</h2>
          <h2 class="border-b-2 m-1 transition">{{ order.full_address }}</h2>
          <h2 class="border-b-2 m-1 transition">{{ order.email_address }}</h2>
        </div>
      </div>
      <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>

        <div
          class="p-2 gap-2 items-center bg-blue-400 h-70 py-2 grid grid-cols-2 content-center w-full"
          v-if="items"
        >
          <RadioGroupOption
            as="div"
            v-for="item in items[0].cart_items[0]"
            :key="item.id"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-Sky-300 ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white ',
              ]"
              class="relative h-28 transition-all w-full flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
            >
              <div class="flex flex-row-reverse items-center w-full">
                <div
                  class="flex w-full flex-row-reverse justify-around items-center"
                >
                  <div class="text-sm w-full">
                    <RadioGroupLabel
                      as="div"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium flex justify-between align-center text-right"
                    >
                      <div class="w-12 h-12 bg-yellow-200 rounded-full">
                        <img :src="firstImage" alt="" />
                      </div>
                      <span>
                        {{ item.item.title }}
                      </span>
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="div"
                      :class="checked ? 'text-white' : 'text-gray-500'"
                      class="flex justify-around w-full"
                    >
                      <div
                        class="flex flex-col space-y-2 justify-center align-center"
                      >
                        <p>رنگ:</p>
                        <ul
                          class="flex flex-row justify-center space-x-2 items-center text-center"
                        >
                          <li
                            v-for="color in item.item.colors"
                            :key="color.id"
                            class="last:mr-0"
                          >
                            <span
                              class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300"
                            >
                              <p
                                :class="{
                                  'bg-pink-500': color.name === 'صورتی',
                                  'bg-blue-500': color.name === 'آبی',
                                  'bg-red-500': color.name === 'قرمز',
                                  'bg-yellow-500': color.name === 'زرد',
                                  'bg-purple-500': color.name === 'بنفش',
                                  'bg-green-500': color.name === 'سبز',
                                  'bg-purple-700': color.name === 'نیلی',
                                  'bg-red-700': color.name === 'یاقوتی',
                                  'bg-goldie': color.name === 'طلایی',
                                  'bg-black': color.name === 'سیاه',
                                  'bg-white': color.name === 'سفید',
                                }"
                                class="block w-6 h-6 rounded-full"
                              ></p>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <span>
                        تعداد:
                        {{ item.quantity }}
                      </span>
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
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { supabase } from "../supabase";
import modal from "../components/Modal.vue";
import DefaultButton from "./DefaultButton.vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  props: ["display", "order"],
  components: {
    DefaultButton,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupDescription,
    RadioGroupOption,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    ShoppingDrawerItem: defineAsyncComponent(() =>
      import("./shoppingDrawerItem.vue")
    ),
  },
  setup(props) {
    const items = ref([]);
    const loading = ref(false);
    const firstImage = ref();
    const displayName = computed(() => {
      return props.display;
    });
    const orderDetailId = computed(() => {
      return props.order.id;
    });
    onMounted(() => {
      getOrderItems();
      getImage();
    });

    const getImage = async function () {
      console.log(items.value[0].cart_items[0]);
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

    async function getOrderItems() {
      try {
        loading.value = true;
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
        loading.value = false;
        getImage();
      }
    }

    return { displayName, items, loading, firstImage };
  },
};
</script>

<style></style>
