<template>
  <div class="displayContainer flex w-full h-full flex-col">
    <div 
      class="barContainer bg-darkPurple h-24 text-white p-5 flex flex-row my-2 w-full items-center align-center content-center justify-around border-b-2 border-mainYellow"
    >
      <h3
        @click="display = 'waitList'"
        class="cursor-pointer"
        :class="{
          'border-b-4 border-mainYellow': display === 'waitList',
        }"
      >
        در انتظار تایید
      </h3>
      <h3
        @click="display = 'processing'"
        class="cursor-pointer"
        :class="{
          'border-b-4 border-mainYellow': display === 'processing',
        }"
      >
        درحال پردازش
      </h3>
      <h3
        @click="display = 'delivered'"
        class="cursor-pointer"
        :class="{
          'border-b-4 border-mainYellow': display === 'delivered',
        }"
      >
        دریافت شده
      </h3>
    </div>

    <!-- delivered orders container change by click from barContainer  -->
    <div
      :class="{ hidden: display !== 'delivered' }"
      class="deliveredContainer max-h-96 overflow-y-scroll"
    >
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>

    <!-- wait list container change by click from barContainer  -->
    <div
      :class="{ hidden: display !== 'waitList' }"
      class="waitListContainer h-full"
    >
      <OrderCard />
    </div>

    <!-- processing orders container change by click from barContainer  -->

    <div
      :class="{ hidden: display !== 'processing' }"
      class="processingContainer h-full"
    >
      <OrderCard />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import DefaultButton from "./DefaultButton.vue";
import OrderCard from "./orderCard.vue";

export default {
  setup() {
    const display = ref("processing");

    return { display };
  },
  components: { DefaultButton, OrderCard },
};
</script>

<style scoped>
.displayContainer {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #ffffff2a;
}
</style>
