<template>
  <div class="flex w-full h-screen">
    <div
      class="h-full justify-start align-center w-full bg-mainY space-y-3 flex flex-col overflow-y-scroll p-5"
    >
      <div class="flex flex-row justify-center p-2">
        <form @submit.prevent="" class="font-mainFont h-1/3">
          <div class="bg-mainGreen flex justify-center rounded p-8 text-white">
            <h1>اطلاعات ارسال</h1>
          </div>
          <div class="">
            <div class="flex justify-center my-2">
              <DefaultButton
                v-show="!loading"
                @click="updateProfile"
                class="px-6 py-4 rounded bg-mainPink text-white cursor-pointer"
              >
                ویرایش
              </DefaultButton>
              <v-progress-circular
                v-show="loading"
                :size="50"
                color="red"
                indeterminate
              ></v-progress-circular>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row justify-around p-2">
            <div class="mx-1">
              <input
                v-model="fullName"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="نام کامل"
              />
            </div>
             <div class="mx-1">
              <input
                v-model="fullName"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="شهر"
              />
            </div>
             <div class="mx-1">
              <input
                v-model="fullName"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="استان"
              />
            </div>
            <div class="mx-1">
              <input
                v-model="phoneNumber"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="شماره همراه"
              />
            </div>
            <div class="mx-1">
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
                v-model="fullAddress"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="آدرس کامل"
              />
            </div>
          </div>
        </form>
      </div>
      <ShoppingDrawerItem v-for="item in getCart" :key="item.id" :item="item" />

      <div class="w-full flex justify-center align-center">
        <DefaultButton
          class="m-2 px-6 py-4 rounded bg-mainYellow text-white"
          @click="component = 'CheckoutSubmit'"
        >
          اضافه به لیست انتظار
        </DefaultButton>

        <DefaultButton
          class="m-2 px-6 py-4 rounded bg-mainGreen text-white"
          @click="component = 'CheckoutInfo'"
        >
          ادامه به درگاه پرداخت
        </DefaultButton>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingDrawerItem from "./shoppingDrawerItem.vue";
import { productManagent } from "../store/productManagment";
import { storeToRefs } from "pinia";

export default {
  components: { ShoppingDrawerItem },

  setup() {
    const manageProducts = productManagent();
    let { getCart } = storeToRefs(manageProducts);

    return { getCart };
  },
};
</script>

<style></style>
