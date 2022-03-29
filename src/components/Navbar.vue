<template>
  <div
    id="main"
    class="w-screen bg-opacity-20 z-10 Navbar h-20 flex fixed justify-center px-6 lg:justify-center lg:align-start align-center text-3xl border-b border-gray-200"
  >
    <div>
      <NewMenuDrawer />
    </div>
    <router-link to="/shop">
      <DefaultButton class="text-white">
        <v-icon>mdi-shopping</v-icon>
      </DefaultButton>
    </router-link>
    <router-link to="/">
      <DefaultButton class="text-white">
        <v-icon>mdi-home</v-icon>
      </DefaultButton>
    </router-link>

    <div v-show="user"><ProfilePage /></div>
    <div v-show="!user">
      <LoginDialog />
    </div>

    <div>
      <NewShoppingDrawer />
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import MenuDrawer from "./MenuDrawer.vue";
import ShoppingCartDrawer from "./ShoppingCartDrawer.vue";
import LoginDialog from "./LoginDialog.vue";
import { store } from "../store";
import ProfilePage from "./ProfilePage.vue";
import { supabase } from "../supabase";
import { computed, onMounted, ref } from "@vue/runtime-core";
import NewShoppingDrawer from "./newShoppingDrawer.vue";
import NewMenuDrawer from "./newMenuDrawer.vue";
import gsap from "gsap";
import { UserManagement, } from "../store/UserManagement";
import { storeToRefs } from "pinia";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    DefaultButton,
    MenuDrawer,
    ShoppingCartDrawer,
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

    const manageUser = UserManagement()
    let {user} = storeToRefs(manageUser)

    return {user};
  },
};
</script>

<style scoped>
#main {
  background: rgba(0, 151, 19, 0.1);
}

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
