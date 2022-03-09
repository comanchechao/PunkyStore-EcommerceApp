<template>
  <div class="p-2 w-full justify-around h-28 border-b-2 flex">
    <div class="w-full h-full flex justify-center align-center space-x-3">
      <div class="bg-green-300 flex rounded-full w-24 h-24">
        {{ item.item.title }}
      </div>
      <div class="space-y-2 flex justify-end flex-col align-start">
        <button
          class="py-1 bg-mainYellow border-2 border-pink-800 rounded-full"
          @click.prevent="removeCartProduct(item)"
        >
          <span class="p-5 font-mainFont text-2xl text-white"> {{item.quantity}} </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  setup(props) {
    const item = props.item;

    return { item };
  },
};
</script>

<style></style>
