<template>
  <div class="w-screen flex justify-center align-center flex-col" id="main">
    <div
      class="h-auto w-screen flex flex-col justify-center align-center space-y-5 p-7"
    >
      <CategoryCards class="NavbarTrigger" />
      <CategoryCards />
      <CategoryCards />
    </div>
    <div class="h-screen w-screen p-3 flex justify-center align-center">
      <CategoryProductList />
    </div>
    <div class="h-screen w-screen bg-yellow-500"></div>
  </div>
</template>

<script>
import CategoryCards from "./CategoryCards.vue";
import CategoryProductList from "./CategoryProductList.vue";
export default {
  components: { CategoryCards, CategoryProductList },
};
</script>

<style></style>
