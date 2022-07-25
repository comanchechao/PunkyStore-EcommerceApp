<template>
  <v-dialog
    fullscreen
    v-model="dialog"
    class="overflow-x-hidden"
    width="100%"
    height="100%"
  >
    <template v-slot:activator="{}">
      <DefaultButton class="text-white" @click="dialog = true"
        ><v-icon>mdi-account</v-icon></DefaultButton
      >
    </template>
    <v-card class="w-full overflow-x-hidden h-auto bg-Indigo-900">
      <div
        id="ball"
        class="z-10 overflow-hidden ball absolute right-0 bg-mainPink rounded-full transform translate-x-28 -translate-y-28 w-64 h-64 lg:w-80 lg:h-80"
      ></div>
      <div
        id="ball"
        class="z-0 ball absolute right-0 bg-mainYellow rounded-full transform -translate-x-8 -translate-y-28 w-64 h-64 lg:w-80 lg:h-80"
      ></div>
      <div
        class="flex flex-row-reverse p-4 w-full font-mainFont text-xl font-bold cardMain justify-around"
      >
        <div
          class="z-20 lg:w-1/2 lg:justify-center w-full justify-end flex rounded-xl text-center px-1 text-4xl text-white"
        >
          <h2 class="z-50 rounded p-4 text-right">{{ username }}</h2>
        </div>
        <div
          class="exitContainer z-50 lg:w-full w-1/2 flex items-end justify-start w-full h-full align-start"
        >
          <DefaultButton
            @click="dialog = false"
            class="text-left text-white lg:mx-4 text-2xl rounded-full"
          >
            <v-icon class="text-white">mdi-close</v-icon></DefaultButton
          >
          <DefaultButton
            @click="signOut"
            class="text-right space-x-2 justify-center items-center flex text-white lg:mx-4 text-2xl rounded-full"
          >
            <h1 class="text-2xl font-bold">خروج</h1>
            <v-icon class="text-white"
              >mdi-account-cancel</v-icon
            ></DefaultButton
          >
        </div>
      </div>

      <div
        class="cardBody mt-10 flex flex-col-reverse w-full h-full justify-between"
      >
        <v-alert
          v-show="loggedOut"
          outlined
          shaped
          text
          absolute
          class="h-20 flex justify-center bottom-0 z-50 mb-16 right-0 items-center w-80"
          type="success"
        >
          از حساب خارج شدید</v-alert
        >
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          mode="out-in"
          name="route"
          appear
        >
          <component class="" :is="displayContainer"></component>
        </transition>

        <div
          class="navContainer self-end content-end items-end flex flex-row-reverse w-full rounded justify-end align-center"
        >
          <button
            @click="displayContainer = 'ordersDetail'"
            class="'Button rounded py-4 text-lg text-white bg-Sky-300 hover:bg-Sky-500 px-6 lg:w-full lg:p-2 mx-1 w-11/12 my-10 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'ordersDetail',"
          >
            سفارش
          </button>
          <button
            @click="displayContainer = 'Favorites'"
            class="'Button rounded py-4 text-lg text-white bg-Sky-300 hover:bg-Sky-500 px-6 lg:w-full lg:p-2 mx-1 w-11/12 my-10 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'Favorites',"
          >
            برگزیده
          </button>

          <button
            @click="displayContainer = 'EditInfo'"
            class="'Button rounded py-4 text-lg text-white bg-Sky-300 hover:bg-Sky-500 px-6 lg:w-full lg:p-2 mx-1 w-11/12 my-10 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none ': displayContainer === 'EditInfo',"
          >
            ویرایش
          </button>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import { defineAsyncComponent } from "vue";
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
    const loggedOut = ref(false);

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

    function resetAdmin() {
      manageUser.resetAdmin();
    }

    async function signOut() {
      try {
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        resetAdmin()
        (loggedOut.value = true),
          setTimeout(() => {
            dialog.value = false;
            window.location.reload();
          }, 3000);
      }
    }

    const enter = (el, done) => {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.set(el, {
        autoAlpha: 0,
        opacity: 0,
        x: -500,
        transformOrigin: "100%",
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
          opacity: 0,
          duration: 0.5,
          ease: "Power2.easeOut",
          onComplete: done,
        }
      );
    };

    return {
      user,
      username,
      dialog,
      displayContainer,
      signOut,
      leave,
      enter,
      loggedOut,
    };
  },
  components: {
    DefaultButton,
    ordersDetail: defineAsyncComponent(() => import("./ordersDetail.vue")),
    Favorites: defineAsyncComponent(() => import("./Favorites.vue")),
    EditInfo: defineAsyncComponent(() => import("./EditInfo.vue")),
  },
};
</script>

<style scoped>
.Button {
  transition: ease-in 0.3s;
}

.Button:active {
  filter: brightness(1.5);
  transform: scale(1.06);
}
</style>
