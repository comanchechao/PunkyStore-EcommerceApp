<template>
  <div
    id="main"
    class="w-screen Navbar h-20 flex justify-center space-x-4 align-center fixed bg-transparent"
  >
    <MenuDrawer />
    <DefaultButton class="text-white">
      <v-icon>mdi-shopping</v-icon>
    </DefaultButton>
    <DefaultButton class="text-white">
      <v-icon>mdi-home</v-icon>
    </DefaultButton>
    <ProfilePage v-show="store.user !== null" />
    <LoginDialog v-show="store.user === null" />
    <ShoppingCartDrawer />
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import MenuDrawer from "./MenuDrawer.vue";
import ShoppingCartDrawer from "./ShoppingCartDrawer.vue";
import LoginDialog from "./LoginDialog.vue";
import { store } from "../store";
import ProfilePage from "./ProfilePage.vue";
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
  },
  mounted() {
    // this.animateNavbar();
    console.log(store.user)
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
    return {
      store,
    };
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
