<template>
  <div class="w-screen h-full bg-Sky-500" >
    <div class="w-full flex mt-20 justify-center align-end content">
      <DefaultButton
      class="m-2 px-6 py-4 rounded bg-darkPurple text-white" @click="component = 'CheckoutSubmit'">
        مرحله بعدی
      </DefaultButton>

      <DefaultButton
      class="m-2 px-6 py-4 rounded bg-darkPurple text-white" @click="component = 'CheckoutInfo'">
        مرحله قبلی
      </DefaultButton>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" name="route" appear>
      <component :is="component"></component>
    </transition>

    <div></div>
  </div>
</template>

<script>
import CheckoutInfo from "../components/checkoutInfo.vue";
import { ref } from "vue";
import gsap from "gsap";
import DefaultButton from "../components/DefaultButton.vue";
import CheckoutSubmit from "../components/CheckoutSubmit.vue";

export default {
  components: { CheckoutInfo, DefaultButton, CheckoutSubmit },
  setup() {
    const component = ref("CheckoutInfo");
    
    const beforeEnter = (el , done) =>{
      gsap.to(el , {
        opacity: 0
      })

    }
    const enter = (el, done) => {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.set(el, {
        autoAlpha: 0,
        opacity: 0 ,
        x: -400,
        transformOrigin: "50% 50%",
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
          duration: 0.5,
          ease: "Power2.easeOut",
          onComplete: done,
        }
      );
    };

    return { component, leave, enter , beforeEnter};
  },
};
</script>

<style></style>
