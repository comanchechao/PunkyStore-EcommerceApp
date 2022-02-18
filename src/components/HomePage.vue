<template>
  <div class="w-screen flex justify-center align-center flex-col" id="main">
    <div
      class="h-auto w-screen flex flex-col justify-center align-center space-y-5 p-7"
    >
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
    </div>
    <div class="h-screen w-screen bg-blue-500"></div>
    <div class="h-screen w-screen bg-yellow-500"></div>
  </div>
</template>

<script>
import CategoryCards from "./CategoryCards.vue";
export default {
  components: { CategoryCards },
};
</script>

<style></style>
