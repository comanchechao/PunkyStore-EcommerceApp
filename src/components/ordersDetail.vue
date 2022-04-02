<template>
  <div class="displayContainer flex w-full h-full flex-col">
    <div
      class="barContainer h-20 text-white px-3 flex flex-row my-2 w-full items-center align-start content-center justify-between border-b-2 border-mainYellow"
    >
      <DefaultButton
        @click="display = 'waitList'"
        class="cursor-pointer bg-Sky-300 hover:bg-Sky-500 px-2 w-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
        :class="{
          'border-b-4 border-mainYellow': display === 'waitList',
        }"
      >
        در انتظار 
      </DefaultButton>
      <DefaultButton
        @click="display = 'processing'"
        class="cursor-pointer bg-Sky-300 hover:bg-Sky-500 px-2 w-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
        :class="{
          'border-b-4 border-mainYellow': display === 'processing',
        }"
      >
        درحال پردازش
      </DefaultButton>
      <DefaultButton
        @click="display = 'delivered'"
        class="cursor-pointer bg-Sky-300 hover:bg-Sky-500 px-2 w-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
        :class="{
          'border-b-4 border-mainYellow': display === 'delivered',
        }"
      >
        دریافت شده
      </DefaultButton>
    </div>

    <!-- delivered orders container change by click from barContainer  -->
    <div
      :class="{ hidden: display !== 'delivered' }"
      class="deliveredContainer max-h-96 overflow-y-scroll"
    >
      <OrderCard :display="display"/>
      <OrderCard :display="display"/>
      <OrderCard :display="display"/>
      <OrderCard :display="display"/>
      <OrderCard :display="display"/>
      <OrderCard :display="display"/>
      <OrderCard :display="display"/>
    </div>

    <!-- wait list container change by click from barContainer  -->
    <div
      :class="{ hidden: display !== 'waitList' }"
      class="waitListContainer h-full"
    >
      <OrderCard :display="display"/>
    </div>

    <!-- processing orders container change by click from barContainer  -->

    <div
      :class="{ hidden: display !== 'processing' }"
      class="processingContainer h-full"
    >
      <OrderCard :display="display"/>
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
