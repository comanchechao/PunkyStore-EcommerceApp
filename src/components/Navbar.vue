<template>
  <div
    id="main"
    class="w-screen Navbar h-20 flex justify-center space-x-4 align-center text-3xl border-b border-gray-200"
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

    <div><ProfilePage /></div>
    <div>
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
// import gsap from "gsap";
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
    NewMenuDrawer
},
  mounted() {
    // this.animateNavbar();
  },
  methods: {
    animateNavbar() {
      gsap.to(".Navbar", {
        backgroundColor: "#ff4a68",
        opacity: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".NavbarTrigger",
          scrub: 2.5,
          start: "bottom top",
          end: "bottom bottom",
          toggleActions: "play none none none none",
        },
      });
    },
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.Navbar {
  z-index: 200 !important;
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
