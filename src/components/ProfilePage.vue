<template>
  <v-dialog
    fullscreen
    class=""
    v-model="dialog"
    persistent
    width="100%"
    height="100%"
  >
    <template v-slot:activator="{ on, attrs }">
      <DefaultButton
        class="text-white"
        v-bind="attrs"
        v-on="on"
        @click="dialog = !dialog"
        ><v-icon>mdi-account</v-icon></DefaultButton
      >
    </template>
    <v-card class="w-full h-auto bg-mainBlue p-4">
      <div class="font-mainFont text-3xl font-bold cardMain h-full">
        <div class="flex w-full justify-end align-center">
          <h2 class="z-10 w-full text-center">Profile</h2>
          <DefaultButton class="text-red-500 w-1/3">
            <v-icon @click="dialog = false">mdi-cancel</v-icon></DefaultButton
          >
        </div>
      </div>
      <div class="cardBody flex flex-row w-full h-full justify-around">
        <div class="displayContinainer flex w-full h-full flex-col">
          <div
            class="flex flex-row my-2 w-full justify-around border-b-2 border-mainYellow"
          >
            <h3
              @click="display = 'waitList'"
              class="cursor-pointer"
              :class="{
                'border-b-4 border-mainYellow': display === 'waitList',
              }"
            >
              در انتظار تایید
            </h3>
            <h3
              @click="display = 'processing'"
              class="cursor-pointer"
              :class="{
                'border-b-4 border-mainYellow': display === 'processing',
              }"
            >
              درحال پردازش
            </h3>
            <h3
              @click="display = 'delivered'"
              class="cursor-pointer"
              :class="{
                'border-b-4 border-mainYellow': display === 'delivered',
              }"
            >
              دریافت شده
            </h3>
          </div>

          <div
            :class="{ hidden: display !== 'delivered' }"
            class="deliveredContainer max-h-96 overflow-y-scroll"
          >
            <div
              class="flex shadow-2xl rounded flex-row h-16 bg-gray-100 justify-around align-center my-1"
            >
              <h2>نام کامل</h2>
              <h2>2022/21/2</h2>
              <h2>021 2548987</h2>
              <DefaultButton class="bg-mainYellow text-lg p-4"
                >جزئیات بیشتر</DefaultButton
              >
            </div>
            <div
              class="flex shadow-2xl rounded flex-row h-16 bg-gray-100 justify-around align-center my-1"
            >
              <h2>نام کامل</h2>
              <h2>2022/21/2</h2>
              <h2>021 2548987</h2>
              <DefaultButton class="bg-mainYellow text-lg p-4"
                >جزئیات بیشتر</DefaultButton
              >
            </div>
          </div>
        </div>

        <div
          class="navContainer self-center flex flex-col m-1 p-2 w-1/3 h-auto justify-center rounded shadow-2xl bg-mainGreen align-center"
        >
          <DefaultButton class="text-lg">سفارش ها</DefaultButton>
          <DefaultButton class="text-lg">لیست انتظار</DefaultButton>
          <DefaultButton class="text-lg">مالی</DefaultButton>
          <DefaultButton class="text-lg">پشتیبانی</DefaultButton>
          <DefaultButton @click="signOut" class="text-lg bg-red-500 p-4"
            >خروج از حساب</DefaultButton
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from "vue";
import {supabase} from '../supabase'
import DefaultButton from "./DefaultButton.vue";
import {store} from '../store'

export default {
  setup() {
    const dialog = ref(false);
    const display = ref("waitList");

    async function signOut() {
      try {
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
        alert("signed out");
        dialog.value = false;
      } catch (error) {
        alert(error.message);
      } finally {
        dialog.value = false;
        console.log(supabase.auth.user())
        
      }
    }

    return { dialog, display, signOut , store};
  },
  components: { DefaultButton },
};
</script>
