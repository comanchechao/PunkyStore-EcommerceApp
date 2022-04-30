<template>
  <div class="displayContainer flex w-full h-full flex-col">
    <div
      class="barContainer h-20 text-white px-3 flex flex-row my-2 w-full items-center align-start content-center justify-between border-b-2 border-mainYellow"
    >
      <div>
        <DefaultButton
          v-show="!loading"
          @click="display = 'waitList'"
          class="cursor-pointer bg-Sky-300 hover:bg-Sky-500 px-2 w-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
          :class="{
            'border-b-4 border-mainYellow': display === 'waitList',
          }"
        >
          در انتظار
        </DefaultButton>
        <v-progress-circular
          v-show="loading"
          :size="50"
          color="amber"
          indeterminate
        ></v-progress-circular>
      </div>
      <div>
        <DefaultButton
          v-show="!loading"
          @click="display = 'processing'"
          class="cursor-pointer bg-Sky-300 hover:bg-Sky-500 px-2 w-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
          :class="{
            'border-b-4 border-mainYellow': display === 'processing',
          }"
        >
          درحال پردازش
        </DefaultButton>
        <v-progress-circular
          v-show="loading"
          :size="50"
          color="amber"
          indeterminate
        ></v-progress-circular>
      </div>
      <div>
        <DefaultButton
          v-show="!loading"
          @click="display = 'delivered'"
          class="cursor-pointer bg-Sky-300 hover:bg-Sky-500 px-2 w-16 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none"
          :class="{
            'border-b-4 border-mainYellow': display === 'delivered',
          }"
        >
          دریافت شده
        </DefaultButton>
        <v-progress-circular
          v-show="loading"
          :size="50"
          color="amber"
          indeterminate
        ></v-progress-circular>
      </div>
    </div>

    <!-- delivered orders container change by click from barContainer  -->
    <div
      :class="{ hidden: display !== 'delivered' }"
      class="deliveredContainer max-h-96 overflow-y-scroll"
    >
      <!-- <OrderCard
        v-for="order in allOrders"
        :order="order"
        :key="order.id"
        :display="display"
      /> -->
    </div>

    <!-- wait list container change by click from barContainer  -->
    <div
      :class="{ hidden: display !== 'waitList' }"
      class="waitListContainer h-full"
    ></div>

    <!-- processing orders container change by click from barContainer  -->

    <div
      :class="{ hidden: display !== 'processing' }"
      class="processingContainer h-full"
    >
      <OrderCard
        v-for="order in allOrders"
        :order="order"
        :key="order.id"
        :display="display"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import DefaultButton from "./DefaultButton.vue";
import { defineAsyncComponent } from "vue";
import { supabase } from "../supabase";

export default {
  components: {
    DefaultButton,
    OrderCard: defineAsyncComponent(() =>
      import("../components/orderCard.vue")
    ),
  },
  setup() {
    const display = ref("processing");
    const allOrders = ref();
    const user = ref(null);
    const loading = ref(false);

    onMounted(() => {
      userOrders();
      console.log(allOrders.value);
    });

    async function userOrders() {
      try {
        user.value = supabase.auth.user();
        loading.value = true;

        let { data, error, status } = await supabase
          .from("order_detail")
          .select()
          .eq("user_id", user.value.id);

        if (error && status !== 406) throw error;

        if (data) {
          console.log(data);
          allOrders.value = data;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    return { display, allOrders, loading };
  },
};
</script>

<style scoped>
.displayContainer {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #ffffff2a;
}
</style>
