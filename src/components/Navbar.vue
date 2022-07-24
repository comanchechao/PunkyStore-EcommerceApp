<template>
  <div
    id="main"
    class="w-screen bg-opacity-20 z-10 Navbar h-24 flex fixed lg:px-8 lg:justify-between justify-between align-center text-3xl border-b border-gray-200"
  >
    <div class="flex">
      <NewMenuDrawer />
      <router-link to="/shop">
        <DefaultButton
          class="text-white font-extrabold hidden lg:flex align-center"
        >
          <h1 class="text-2xl mr-2">خرید</h1>
          <v-icon>mdi-shopping</v-icon>
        </DefaultButton>
      </router-link>
      <router-link to="/">
        <DefaultButton
          class="text-white font-extrabold hidden lg:flex align-center"
        >
          <h1 class="text-2xl mr-2">خونه</h1>
          <v-icon>mdi-home</v-icon>
        </DefaultButton>
      </router-link>
    </div>
    <router-link to="/">
      <div class="lg:hidden">
        <img
          class="transition ease-in duration-200 hover:bg-darkPurple p-3 rounded-lg cursor-pointer"
          src="../assets/images/SmallPunkyMonkeyLogo.webp"
          alt=""
        />
      </div>
    </router-link>
    <div class="flex pr-2">
      <router-link :class="{ hidden: admin === false }" to="/admin">
        <DefaultButton class="text-white">
          <v-icon>mdi-account-cowboy-hat</v-icon>
        </DefaultButton>
      </router-link>
      <div v-show="user"><ProfilePage /></div>
      <div v-show="!user">
        <LoginDialog />
      </div>
      <NewShoppingDrawer />
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import LoginDialog from "./LoginDialog.vue";
import { store } from "../store";
import ProfilePage from "./ProfilePage.vue";
import { supabase } from "../supabase";
import { computed, onMounted, onUpdated, ref, watch } from "@vue/runtime-core";
import NewShoppingDrawer from "./newShoppingDrawer.vue";
import NewMenuDrawer from "./newMenuDrawer.vue";
import gsap from "gsap";
import { UserManagement } from "../store/UserManagement";
import { storeToRefs } from "pinia";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    DefaultButton,
    LoginDialog,
    ProfilePage,
    NewShoppingDrawer,
    NewMenuDrawer,
  },
  mounted() {
    this.animateNavbar();
  },
  methods: {
    animateNavbar() {
      gsap.from(".Navbar", {
        y: -200,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power4.out",
      });
    },
  },
  setup() {
    const manageUser = UserManagement();
    let { user, admin } = storeToRefs(manageUser);

    let userChange = computed(() => {
      return user;
    });

    onMounted(() => {
      if (user !== null) {
        manageUser.isAdmin();
      }
    });

    onUpdated(() => {
      if (user !== null) {
        manageUser.isAdmin();
      }
    });

    watch(userChange, () => {
      manageUser.resetAdmin();
    });

    return { user, admin };
  },
};
</script>

<style scoped>
/* .Navbar {
  animation: 35s ease-in-out infinite alternate-reverse color-change;
}
@-webkit-keyframes color-change {
  0% {
    background-color: #ffca3a;
  }

  45% {
    background-color: #1982c4;
  }

  100% {
    background-color: #8ac926;
  }
}

@keyframes color-change {
  0% {
    background-color: #ffca3a;
  }

  50% {
    background-color: #660be7;
  }

  100% {
    background-color: #ff595e;
  }
} */
</style>
