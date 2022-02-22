<template>
  <div class="w-screen flex justify-center align-center flex-col" id="main">
    <div
      class="h-auto w-screen flex flex-col justify-center align-center space-y-5 p-7"
    >
      <CategoryCards class="NavbarTrigger" />
      <CategoryCards />
      <CategoryCards />
    </div>
    <div
      class="h-screen w-screen p-3 flex flex-col justify-center align-center"
    >
      <CategoryProductList />
      <DefaultButton
        class="rounded-full font-bold text-white bg-mainBlue text-lg p-4 m-5"
        >نمایش کالاهای بیشتر</DefaultButton
      >
    </div>
    <div
      class="h-screen w-screen p-3 flex flex-col justify-center align-center"
    >
      <CategoryProductList class="" />
      <DefaultButton
        class="rounded-full font-bold text-white bg-mainBlue text-lg p-4 m-5"
        >نمایش کالاهای بیشتر</DefaultButton
      >
    </div>
    <div
      class="h-screen w-screen p-3 flex flex-col justify-center align-center"
    >
      <CategoryProductList />
      <DefaultButton
        class="rounded-full font-bold text-white bg-mainBlue text-lg p-4 m-5"
        >نمایش کالاهای بیشتر</DefaultButton
      >
    </div>
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue";
import CategoryCards from "../components/CategoryCards.vue";
import CategoryProductList from "../components/CategoryProductList.vue";
export default {
  components: { CategoryCards, CategoryProductList, DefaultButton },
};
</script>

<style></style>
