<template>
  <div class="flex w-full h-screen">
    <div
      class="h-full justify-start align-center w-full bg-mainY space-y-3 flex flex-col overflow-y-scroll p-5"
    >
      <div class="flex w-full flex-row justify-center">
        <form @submit.prevent="" class="font-mainFont w-full h-1/3">
          <Disclosure v-slot="{ open }">
            <DisclosureButton
              class="flex max-h-16 mt-6 justify-center font-black align-center w-full px-4 py-8 text-sm font-medium text-left text-black bg-green-800 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            >
              <div class="flex w-full justify-center rounded text-white">
                <h1>اطلاعات ارسال</h1>
              </div>
              <ChevronUpIcon
                :class="open ? 'transform rotate-180' : ''"
                class="w-5 h-5 transition text-white"
              />
            </DisclosureButton>
            <DisclosurePanel
              class="p-2 lg:p-5 align-center justify-center divide-y-2 text-sm text-black flex flex-col"
            >
              <div
                class="flex flex-col w-full lg:flex-row-reverse justify-around p-2"
              >
                <div
                  class="mx-1 flex w-full flex-row-reverse align-center justify-between text-white"
                >
                  <label class="w-full self-center text-right" for=""
                    >نام کامل</label
                  >
                  <input
                    v-model="fullName"
                    class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-4 lg:py-6 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
                <div
                  class="mx-1 flex w-full flex-row-reverse align-center justify-between text-white"
                >
                  <label class="w-full self-center text-right" for=""
                    >شماره همراه</label
                  >
                  <input
                    v-model="phoneNumber"
                    class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-4 lg:py-6 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="number"
                  />
                </div>
                <div
                  class="mx-1 flex w-full flex-row-reverse align-center justify-between text-white"
                >
                  <label class="w-full self-center text-right" for=""
                    >آدرس ایمیل</label
                  >
                  <input
                    v-model="emailAddress"
                    class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-4 lg:py-6 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="email"
                  />
                </div>
                <div
                  class="mx-1 flex w-full flex-row-reverse align-center justify-between text-white"
                >
                  <label class="w-full self-center text-right" for=""
                    >شهر</label
                  >
                  <input
                    v-model="city"
                    class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-4 lg:py-6 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
                <div
                  class="mx-1 flex w-full flex-row-reverse align-center justify-between text-white"
                >
                  <label class="w-full self-center text-right" for=""
                    >استان</label
                  >
                  <input
                    v-model="province"
                    class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-4 lg:py-6 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>

                <div
                  class="mx-1 flex w-full flex-row-reverse align-center justify-between text-white"
                >
                  <label class="w-full self-center text-right" for=""
                    >آدرس کامل</label
                  >
                  <textarea
                    v-model="fullAddress"
                    class="bg-gray-200 appearance-none text-right border-gray-200 rounded w-full my-2 py-4 lg:py-6 px-5 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </form>
      </div>
      <div class="flex flex-col w-full h-full">
        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="flex justify-between w-full px-4 py-6 text-sm font-medium text-left text-black bg-Emerald-500 rounded-lg hover:bg-Emerald-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <div class="flex w-full justify-center rounded text-white">
              <h1>سبد خرید</h1>
            </div>
            <ChevronUpIcon
              :class="open ? 'transform rotate-180' : ''"
              class="w-5 h-5 transition text-white"
            />
          </DisclosureButton>
          <DisclosurePanel
            class="align-center justify-center divide-y-2 text-sm text-black flex flex-col"
          >
            <div
              v-show="getCart !== null"
              class="mt-5 max-h-1/2 justify-start align-start w-full space-y-3 flex flex-col overflow-y-scroll px-5"
            >
              <ShoppingDrawerItem
                v-for="item in getCart"
                :key="item.id"
                :item="item"
              />
            </div>
            <div
              v-show="cartTotalPrice === 0"
              class="mt-1 bg-gray-200 h-full justify-center align-center w-full flex flex-col p-5"
            >
              <h2>کالایی در سبد خرید وجود ندارد</h2>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <div class="w-full flex justify-center align-center">
          <DefaultButton
            class="m-2 px-6 py-4 rounded bg-goldie text-white"
            @click="orderItemSubmit"
          >
            اضافه به لیست انتظار
          </DefaultButton>

          <DefaultButton
            class="m-2 px-6 py-4 rounded bg-Indigo-700 text-white"
            @click="orderDetailSubmit"
          >
            ادامه به درگاه پرداخت
          </DefaultButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingDrawerItem from "./shoppingDrawerItem.vue";
import DefaultButton from "./DefaultButton.vue";
import { productManagent } from "../store/productManagment";
import { orderManagement } from "../store/orderManagement";
import { UserManagement } from "../store/UserManagement";
import { storeToRefs } from "pinia";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
import { supabase } from "../supabase";

export default {
  components: {
    DefaultButton,
    ShoppingDrawerItem,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    ChevronUpIcon,
  },

  setup() {
    const manageUser = UserManagement();
    let { user } = storeToRefs(manageUser);
    const loading = ref(false);
    const manageProducts = productManagent();
    const manageOrders = orderManagement();
    const fullName = ref("");
    const phoneNumber = ref();
    const fullAddress = ref("");
    const emailAddress = ref("");
    const city = ref("");
    const province = ref("");
    let cartItems = ref([]);
    let orderDetailId = ref();
    let { getCart, cartTotalPrice } = storeToRefs(manageProducts);

    const orderDetailSubmit = async function () {
      if (user) {
        try {
          const { data, error } = await supabase.from("order_detail").insert([
            {
              user_id: user.value.id,
              email_address: emailAddress.value,
              fullname: fullName.value,
              phone_number: phoneNumber.value,
              province: province.value,
              city: city.value,
              full_address: fullAddress.value,
            },
          ]);

          if (error) throw error;
          console.log(data);
          alert("orderDetailAdded to database");
          orderDetailId.value = data[0].id;
        } catch (error) {
          alert(error.error_description || error.message);
        } finally {
          orderItemSubmit();
        }
      }
    };

    const orderItemSubmit = async function () {
      if (user) {
        console.log(orderDetailId.value);
        try {
          const { data, error } = await supabase.from("order_items").insert([
            {
              order_detail_id: orderDetailId.value,
              // latter on add the gas fee as well !!!!!IMPORTANTEEEE!!!!!!!!!!
              order_total_price: cartTotalPrice.value,
              cart_items: [getCart.value],
            },
          ]);

          if (error) throw error;
          console.log(data);
        } catch (error) {
          alert(error.error_description || error.message);
        }
      }
    };

    return {
      getCart,
      loading,
      fullName,
      phoneNumber,
      emailAddress,
      city,
      province,
      fullAddress,
      orderDetailSubmit,
      orderItemSubmit,
    };
  },
};
</script>

<style></style>
