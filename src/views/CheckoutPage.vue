<template>
  <div class="flex flex-col w-screen h-full bg-Sky-500 overflow-hidden">
    <div class="mt-20">
      <transition @enter="enter" @leave="leave" name="route" appear>
        <component :is="component"></component>
      </transition>
    </div>

    <div v-show="component === 'CheckoutInfo'" class="w-full flex justify-center align-center content">
      <DefaultButton
        class="m-2 px-6 py-4 rounded bg-Cyan-700 text-white"
        @click="component = 'CheckoutSubmit'"
      >
        مرحله بعدی
      </DefaultButton>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
import DefaultButton from "../components/DefaultButton.vue";
import { defineAsyncComponent } from 'vue'

export default {
  components: {  DefaultButton, CheckoutSubmit : defineAsyncComponent(() => import('../components/CheckoutSubmit.vue'))  },
  setup() {
    const component = ref("CheckoutSubmit");

    const enter = (el, done) => {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.set(el, {
        autoAlpha: 0,
        opacity: 0,
        x: 400,
        transformOrigin: "100% ",
      });

      tl.to(el, {
        autoAlpha: 1,
        x: 0,
        opacity: 1,
        ease: "Power2.easeOut",
      });
    };

    const leave = (el, done) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 1,
          x: 0,
        },
        {
          autoAlpha: 0,
          x: 400,
          opacity: 0,
          duration: 0.5,
          ease: "Power2.easeOut",
          onComplete: done,
        }
      );
    };

    return { component, leave, enter };
  },
};
</script>

<style></style>
