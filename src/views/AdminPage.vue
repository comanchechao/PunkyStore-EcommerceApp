<template>
  <div class="flex justify-center main w-full h-full bg-pink-100">
    <div class="flex flex-col w-full h-screen mt-24">
      <div class="topBar w-full bg-pink-700">
        <div
          class="adminSection p-5 w-full flex flex-row justify-around align-center"
        >
          <div class="adminName font-bold text-white text-2xl text-right">
            <h2>کیارش کینگ</h2>
          </div>
          <div class="profileImage w-24 h-24 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
      <div
        class="componentSwitch bg-white my-2 w-11/12 flex self-center rounded justify-between align-center p-3 shadow-2xl"
      >
        <button
          @click="adminManagement = 'OrderManagement'"
          :class="{ 'bg-pink-200': adminManagement === 'OrderManagement' }"
          class="bg-pink-300 w-full rounded mx-2 h-full hover:text-white px-2 lg:py-5 md:py-4 sm:py-2 hover:bg-pink-500 hover:text-gray-50 transition focus:bg-pink-500 focus:text-white transform motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          سفارش ها
        </button>
        <button
          @click="adminManagement = ''"
          :class="{ 'bg-pink-200': adminManagement === 'mountlyReview' }"
          class="bg-pink-300 w-full rounded mx-2 h-full px-2 lg:py-5 md:py-4 sm:py-2 hover:bg-pink-500 hover:text-gray-50 transition focus:bg-pink-500 focus:text-white transform motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          گزارش ماهانه
        </button>
        <button
          @click="adminManagement = 'ProductManagement'"
          :class="{ 'bg-pink-200': adminManagement === 'ProductManagement' }"
          class="bg-pink-300 w-full rounded mx-2 h-full px-2 lg:py-5 md:py-4 sm:py-2 hover:bg-pink-500 hover:text-gray-50 focus:bg-pink-500 focus:text-white transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          مدیریت کالا
        </button>
      </div>
      <div class="w-full h-full">
        <transition @enter="enter" mode="out-in" appear>
          <component class="" :is="adminManagement"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ref } from "vue";
import ProductManagement from "../components/ProductManagement.vue";
import OrderManagement from "../components/OrderManagement.vue";

export default {
  components: { ProductManagement, OrderManagement },
  setup() {
    const adminManagement = ref("ProductManagement");

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

    return { adminManagement, leave, enter };
  },
};
</script>

<style></style>
