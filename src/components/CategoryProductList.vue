<template>
  <div class="flex flex-col w-full h-full">
    <div class="w-full h-24 bg-Rose-400 flex justify-between align-center p-5">
      <DefaultButton>
        <v-icon size="x-large">mdi-login-variant</v-icon>
      </DefaultButton>
      <h1 class="text-black text-3xl font-extrabold">اسم کتگوری</h1>
    </div>
    <div
      class="w-full h-4/5 gap-3 bg-mainYellow grid grid-flow-row grid-cols-2 grid-rows-3 place-items-center"
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

<style></style>
