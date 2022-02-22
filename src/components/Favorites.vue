<template>
  <div class="flex flex-col w-full h-full rounded">
    <div class="w-full h-24 bg-darkPurple flex justify-between align-center p-5">
      <DefaultButton class="text-white">
        <v-icon size="x-large">mdi-heart</v-icon>
      </DefaultButton>
      <h1 class="text-white text-3xl font-extrabold">برگزیده</h1>
    </div>
    <div
      class="w-full h-full py-4 gap-5 grid px-3 grid-flow-row grid-cols-2 grid-rows-2 place-items-center background"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import DefaultButton from "./DefaultButton.vue";

export default {
  components: {
    ProductCard,
    DefaultButton,
  },
};
</script>

<style scoped>
.background {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #ffffff2a;
}
</style>
