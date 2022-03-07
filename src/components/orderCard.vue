<template>
  <div
    class="flex flex-wrap p-3 shadow-2xl rounded flex-row-reverse lg:px-6 h-36 bg-gray-100 items-center justify-between align-center my-1"
  >
    <div>
      <h2>نام کامل</h2>
    </div>
    <div><h2 class="border-b-2 border-mainYellow">2022/21/2</h2></div>
    <div>
      <h2 class="text-black border-b-2 border-mainYellow">
        <v-icon>mdi-check</v-icon>
      </h2>
    </div>
    <div class="p-2 mx-1">
      <DefaultButton
        :class="{ hidden: displayName !== 'processing' }"
        class="text-white self-center bg-Sky-500 text-lg p-3 rounded-xl shadow-xl"
        >رهگیری</DefaultButton
      >
      <DefaultButton
        :class="{ hidden: displayName !== 'delivered' }"
        class="text-white bg-mainGreen text-lg p-3 rounded-xl shadow-xl"
        >دریافتی</DefaultButton
      >
      <DefaultButton
        :class="{ hidden: displayName !== 'waitList' }"
        class="text-white bg-mainPink text-lg p-3 rounded-xl shadow-xl"
        >تایید</DefaultButton
      >
    </div>
    <div>
      <DefaultButton class="text-white bg-mainYellow text-lg p-4 rounded-xl"
        >بیشتر</DefaultButton
      >
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from "vue";
import DefaultButton from "./DefaultButton.vue";

export default {
  props: ["display"],
  components: {
    DefaultButton,
  },
  setup(props) {
    const displayName = computed(() => {
      return props.display;
    });

    return { displayName };
  },
};
</script>

<style></style>
