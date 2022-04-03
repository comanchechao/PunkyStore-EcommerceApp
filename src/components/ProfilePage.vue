<template>
  <v-dialog fullscreen v-model="dialog" width="100%" height="100%">
    <template v-slot:activator="{}">
      <DefaultButton class="text-white" @click="dialog = true"
        ><v-icon>mdi-account</v-icon></DefaultButton
      >
    </template>
    <v-card class="w-full h-auto bg-Sky-200">
      <div
        id="ball"
        class="z-10 ball absolute right-0 bg-mainPurple rounded-full transform translate-x-28 -translate-y-28 w-64 h-64 lg:w-80 lg:h-80"
      ></div>
      <div
        id="ball"
        class="z-0 ball absolute right-0 bg-mainYellow rounded-full transform -translate-x-8 -translate-y-28 w-64 h-64 lg:w-80 lg:h-80"
      ></div>
      <div
        class="p-4 lg:p-8 lg:px-0 lg:py-8 font-mainFont text-xl font-bold cardMain h-full"
      >
        <div class="flex flex-row-reverse w-full justify-between align-center">
          <div
            class="z-20 w-full lg:w-1/6 flex items-end justify-end align-center lg:align-start rounded-xl text-right px-1 lg:px-5 text-xl text-white"
          >
            <DefaultButton
              @click="displayContainer = 'EditInfo'"
              class="' text-white px-10 lg:px-10 lg:mr-20 sm:ml-8 transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'EditInfo',"
              >ویرایش اطلاعات</DefaultButton
            >
            <h2 class="z-50 w-1/2 rounded p-4 text-right">
              {{ username }}
            </h2>
          </div>
          <div class="exitContainer flex justify-start h-full align-start">
            <DefaultButton
              class="text-white lg:mx-4 text-lg rounded-full w-full"
            >
              <v-icon class="text-mainPink" @click="dialog = false"
                >mdi-close</v-icon
              ></DefaultButton
            >
          </div>
        </div>
      </div>
      <div class="cardBody mt-10 flex flex-row w-full h-full justify-around">
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          mode="out-in"
          name="route"
          appear
        >
          <component class="py-2" :is="displayContainer"></component>
        </transition>

        <div
          class="navContainer self-center flex flex-col p-2 lg:w-1/6 w-1/3 h-auto justify-between rounded shadow-2xl align-end"
        >
          <DefaultButton
            @click="displayContainer = 'ordersDetail'"
            class="'text-lg text-white bg-Sky-300 hover:bg-Sky-500 px-7 lg:w-full lg:p-2 w-24 my-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'ordersDetail',"
            >سفارش
          </DefaultButton>
          <DefaultButton
            @click="displayContainer = 'Favorites'"
            class="'text-lg text-white bg-Sky-300 hover:bg-Sky-500 px-7 lg:w-full lg:p-2 w-24 my-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'Favorites',"
            >برگزیده</DefaultButton
          >

          <DefaultButton
            @click="displayContainer = 'Support'"
            class="'text-lg text-white bg-Sky-300 hover:bg-Sky-500 px-7 lg:w-full lg:p-2 w-24 my-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'Support',"
            >پشتیبانی</DefaultButton
          >
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ordersDetail from "./ordersDetail.vue";
import Favorites from "./Favorites.vue";
import EditInfo from "./EditInfo.vue";
import { computed, ref, onMounted } from "vue";
import { supabase } from "../supabase";
import DefaultButton from "./DefaultButton.vue";
import { store } from "../store";
import { UserManagement } from "../store/UserManagement";
import { storeToRefs } from "pinia";
import gsap from "gsap";

export default {
  setup() {
    const dialog = ref(false);
    const displayContainer = ref("");
    const username = ref("");
    const full_name = ref("");
    const phone_number = ref("");
    const loading = ref(false);

    const manageUser = UserManagement();

    const { user } = storeToRefs(manageUser);

    onMounted(() => {
      if (user.value) {
        getProfile();
      }
    });

    async function getProfile() {
      try {
        loading.value = true;
        user.value = supabase.auth.user();

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, full_name, phone_number`)
          .eq("id", user.value.id)
          .single();

        if (error && status !== 406) throw error;

        if (data) {
          username.value = data.username;
          full_name.value = data.full_name;
          phone_number.value = data.phone_number;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

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

     const enter = (el, done) => {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.set(el, {
        autoAlpha: 0,
        opacity: 0 ,
        x: -500,
        transformOrigin: "100% 100%",
      });

      tl.to(el, {
        autoAlpha: 1,
        x: 0,
        opacity: 1,
        ease: "Power4.easeOut",
      });
    };

    const leave = (el, done) => {
      gsap.fromTo(
        el,
        {

          x: 0,
          opacity: 1,
        },
        {

          x: -400,
          opacity: 0 ,
          duration: 0.5,
          ease: "Power2.easeOut",
          onComplete: done,
        }
      );
    };

    return { user, username, dialog, displayContainer, signOut, leave , enter };
  },
  components: { DefaultButton, ordersDetail, Favorites, EditInfo },
};
</script>
