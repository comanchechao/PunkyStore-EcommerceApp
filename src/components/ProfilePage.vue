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
    <v-card class="w-full h-auto bg-Fuchsia-900 p-4">
      <div class="font-mainFont text-3xl font-bold cardMain h-full">
        <div class="flex w-full justify-end align-center">
          <h2 class="z-10 w-full text-center">نام کاربری</h2>
          <DefaultButton class="text-red-500 w-1/3">
            <v-icon @click="dialog = false">mdi-cancel</v-icon></DefaultButton
          >
        </div>
      </div>
      <div class="cardBody flex flex-row w-full h-full justify-around">
        <component :is="displayContainer"></component>
        <div
          class="navContainer self-center flex flex-col m-1 p-2 w-1/3 h-auto justify-center rounded shadow-2xl bg-mainGreen align-center"
        >
          <DefaultButton
            @click="displayContainer = 'ordersDetail'"
            :class="{
              'border-b-2 border-gray-100': displayContainer === 'ordersDetail',
            }"
            class="text-lg"
            >سفارش ها</DefaultButton
          >
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
import ordersDetail from "./ordersDetail.vue";
import { ref } from "vue";
import { supabase } from "../supabase";
import DefaultButton from "./DefaultButton.vue";
import { store } from "../store";

export default {
  setup() {
    const dialog = ref(false);
    const displayContainer = ref("");

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
        console.log(supabase.auth.user());
      }
    }

    return { dialog, displayContainer, signOut, store };
  },
  components: { DefaultButton, ordersDetail },
};
</script>
