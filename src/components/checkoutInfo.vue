<template>
  <div
    class="h-full lg:h-screen w-full items-center flex flex-col lg:flex-row-reverse justify-center"
  >
    <div class="flex flex-col w-full h-full p-4">
      <div class="bg-Emerald-500 flex justify-center rounded p-8 text-white">
        <h1>سبد خرید</h1>
      </div>
      <div
        class="mt-2 max-h-1/2 justify-start align-start w-full space-y-3 flex flex-col overflow-y-scroll px-5"
      >
        <ShoppingDrawerItem v-for="item in cart" :key="item.id" :item="item" />
      </div>
    </div>

    <div class="theContainer h-screen w-full">
      <form @submit.prevent="" class="font-mainFont h-screen">
        <div class="flex flex-wrap flex-col justify-center p-5">
          <div
            class="bg-mainYellow flex justify-center rounded my-2 p-8 text-white"
          >
            <h1>تکمیل اطلاعات</h1>
          </div>
          <div class="">
            <input
              v-model="fullName"
              class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="نام کامل"
            />
          </div>
          <div class="">
            <input
              v-model="phoneNumber"
              class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="شماره همراه"
            />
          </div>
          <div class="">
            <input
              v-model="emailAddress"
              class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
              placeholder="ادرس ایمیل"
            />
          </div>
          <div class="mx-1">
            <input
              v-model="city"
              class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="شهر"
            />
          </div>
          <div class="mx-1">
            <input
              v-model="province"
              class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="استان"
            />
          </div>
          <div class="">
            <input
              v-model="fullAddress"
              class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="آدرس کامل"
            />
          </div>
          <div class="">
            <div class="flex justify-center my-2">
              <DefaultButton
                v-show="!loading"
                @click="addInfo"
                class="px-6 py-4 rounded bg-mainYellow text-white"
              >
                تایید
              </DefaultButton>
              <v-progress-circular
                v-show="loading"
                :size="50"
                color="red"
                indeterminate
              ></v-progress-circular>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { productManagent } from "../store/productManagment";
import { orderManagement } from "../store/orderManagement";
import ShoppingDrawerItem from "../components/shoppingDrawerItem.vue";
import DefaultButton from "../components/DefaultButton.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: { ShoppingDrawerItem, DefaultButton },
  setup() {
    const manageProducts = productManagent();
    const manageOrders = orderManagement();
    let { cart } = storeToRefs(manageProducts);
    const fullName = ref("");
    const phoneNumber = ref("");
    const fullAddress = ref("");
    const emailAddress = ref("");
    const city = ref("");
    const province = ref("");

    const addInfo = function () {
      manageOrders.setInfo(
        fullName.value,
        phoneNumber.value,
        fullAddress.value,
        emailAddress.value,
        city.value,
        province.value
      );
    };

    return {
      cart,
      fullName,
      phoneNumber,
      fullAddress,
      emailAddress,
      city,
      province,
      addInfo,
    };
  },
};
</script>

<style></style>
