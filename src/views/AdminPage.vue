<template>
  <div class="flex justify-center main w-full h-full bg-pink-200">
    <div class="flex flex-col w-full h-screen mt-20">
      <div class="topBar w-full bg-Indigo-900">
        <div
          class="adminSection p-5 w-full flex flex-row justify-around align-center"
        >
          <div class="adminName font-bold text-white text-2xl text-right">
            <h2>کیارش کینگ</h2>
          </div>
          <div class="profileImage w-24 h-24 bg-gray-500 rounded-full"></div>
        </div>

      

        <div
          class="componentSwitch w-full flex justify-between align-center p-4"
        >
          <button
            @click="adminManagement = 'OrderManagement'"
            :class="{ 'bg-green-500': adminManagement === 'OrderManagement' }"
            class="bg-Sky-500 w-full rounded mx-2 h-full text-white py-5 hover:bg-green-400 transition focus:bg-green-500 transform motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            سفارش ها
          </button>
          <button
            @click="adminManagement = ''"
            :class="{ 'bg-green-500': adminManagement === 'mountlyReview' }"
            class="bg-Sky-500 w-full rounded mx-2 h-full text-white py-5 hover:bg-green-400 transition focus:bg-green-500 transform motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            گزارش ماهانه
          </button>
          <button
            @click="adminManagement = 'ProductManagement'"
            :class="{ 'bg-green-500': adminManagement === 'ProductManagement' }"
            class="bg-Sky-500 w-full rounded mx-2 h-full text-white py-5 hover:bg-green-400  focus:bg-green-500 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
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
