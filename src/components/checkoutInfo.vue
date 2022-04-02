<template>
   <div
      class="h-full lg:h-screen mt-20 w-full items-center content-center flex flex-col lg:flex-row-reverse justify-center"
    >
      <div
        class="h-full justify-start align-center w-full bg-mainY space-y-3 flex flex-col overflow-y-scroll p-5"
      >
        <ShoppingDrawerItem v-for="item in cart" :key="item.id" :item="item" />
      </div>

      <div class="theContainer h-full w-full">
        <form @submit.prevent="" class="font-mainFont h-screen">
          <div class="flex flex-wrap flex-col justify-center p-5">
            <div
              class="bg-mainYellow flex justify-center rounded p-8 text-white"
            >
              <h1>تکمیل اطلاعات</h1>
            </div>
            <div class="">
              <input
                v-model="fullName"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="نام کامل"
              />
            </div>
            <div class="">
              <input
                v-model="phoneNumber"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="شماره همراه"
              />
            </div>
            <div class="">
              <input
                v-model="emailAddress"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="email"
                placeholder="ادرس ایمیل"
              />
            </div>
            <div class="">
              <input
                v-model="fullAddress"
                class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="آدرس کامل"
              />
            </div>
            <div class="">
              <div class="flex justify-center my-2">
                <DefaultButton
                  v-show="!loading"
                  @click="updateProfile"
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
import ShoppingDrawerItem from "../components/shoppingDrawerItem.vue";
import DefaultButton from "../components/DefaultButton.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: { ShoppingDrawerItem, DefaultButton },
  setup() {
    const manageProducts = productManagent();
    let { cart } = storeToRefs(manageProducts);
    const fullName = ref("");
    const phoneNumber = ref("");
    const fullAddress = ref("");
    const emailAddress = ref("");

    return { cart, fullName, phoneNumber, fullAddress, emailAddress };
  },
};
</script>

<style></style>
