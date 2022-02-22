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
    <v-card class="w-full h-auto bg-Sky-500 p-4">
      <div class="font-mainFont bg-darkPurple text-3xl font-bold cardMain h-full">
        <div class="flex w-full justify-end align-center">
          <h2 class="z-10 w-full text-center text-white">نام کاربری</h2>
          <div class="exitContainer flex justify-end">
            <DefaultButton class="text-white bg-mainPink rounded-none w-full">
              <v-icon @click="dialog = false">mdi-close</v-icon></DefaultButton
            >
          </div>
        </div>
      </div>
      <div class="cardBody flex flex-row w-full h-full justify-around">
        <component class="py-2" :is="displayContainer"></component>
        <div
          class="navContainer self-center flex flex-col m-1 p-2 w-1/3 h-auto justify-center rounded shadow-2xl bg-darkPurple align-center"
        >
          <DefaultButton
            @click="displayContainer = 'ordersDetail'"
            class="'text-lg text-white transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'ordersDetail',"
            >سفارش ها</DefaultButton
          >
          <DefaultButton
            @click="displayContainer = 'Favorites'"
            class="'text-lg text-white transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'Favorites',"
            >دلخواه</DefaultButton
          >
          <DefaultButton
            @click="displayContainer = 'EditInfo'"
            class="'text-lg text-white transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'EditInfo',"
            >تغییر اطلاعات</DefaultButton
          >
          <DefaultButton
            @click="displayContainer = 'Support'"
            class="'text-lg text-white transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'Support',"
            >پشتیبانی</DefaultButton
          >
          <DefaultButton
            @click="signOut"
            class="text-lg bg-red-500 p-4 text-white lg:text-2xl"
            ><v-icon>mdi-logout</v-icon></DefaultButton
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ordersDetail from "./ordersDetail.vue";
import Favorites from "./Favorites.vue";
import EditInfo from './EditInfo.vue'
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
  components: { DefaultButton, ordersDetail, Favorites , EditInfo },
};
</script>
