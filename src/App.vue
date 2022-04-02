<template>
  <v-app>
    <v-main>
      <Navbar class="Navbar" />
      <!-- <SubNavbar /> -->
      <!-- <HomePage /> -->
      <router-view v-slot="{ Component }">
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
          name="route"
          appear
        >
          <component :is="Component"></component>
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import gsap from "gsap";
// import SubNavbar from "./components/SubNavbar.vue";

// import HomePage from "./components/HomePage.vue";

export default {
  name: "App",

  components: {
    Navbar,
    // SubNavbar,
    // HomePage,
  },
  setup() {
    const beforeEnter = (el) => {
      console.log("before enter");
    };

    const enter = (el, done) => {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.set(el, {
        autoAlpha: 0,
        x: 400,
        transformOrigin: "50% 50%",
      });

      tl.to(el, {
        autoAlpha: 1,
        x: 0,
        ease: "Power2.easeOut",
      });
    };

    const beforeLeave = (el) => {
      console.log("before leave");
    };

    const  leave = (el, done) => {
      gsap.fromTo(el, {
        autoAlpha: 1,
        x: 0,
      }, {
        autoAlpha: 0,
        x: 400,
        duration: .5,
        ease: 'Power2.easeOut',
        onComplete: done
      });
    };

    return { beforeEnter, enter, beforeLeave, leave };
  },
};
</script>

<style>
/* .route-enter-active,
.route-leave-active {
    transition: opacity .3s ease;
}

.route-enter-from,
.route-leave-to {
    opacity: 0 ease;
} */
</style>
