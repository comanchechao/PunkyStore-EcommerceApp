<template>
  <div
    class="cardBackground h-96 pb-2 w-full flex flex-col justify-center align-center p-5 space-y-2"
  >
    <div class="w-full h-2/3 bg-mainPurple"></div>
    <div
      class="bg-white w-full h-1/3 flex flex-col justify-center align-center"
    >
      <h3 class="text-gray-400">{{ product.category }}</h3>
      <h1 class="text-black font-bold text-2xl">{{ product.title }}</h1>
      <h2 class="text-mainBlue">{{ product.price }}</h2>
      <p class="text-mainBlue text-center">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.cardBackground {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: transparent;
}
</style>
