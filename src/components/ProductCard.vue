<template>
  <div
    class="cardBackground pb-2 w-full h-full flex flex-col justify-center align-center space-y-2"
  >
    <div class="w-full h-full rounded-t-lg"></div>
    <div
      class="bg-gradient-to-r from-white via-mainPurple to-white w-full h-full flex flex-col justify-center space-y-2 align-center"
    >
      <h3 class="text-gray-400">کتگوری کالا</h3>
      <h1 class="text-black font-bold text-2xl">اسم کالا</h1>
      <h2 class="text-mainBlue">قیمت کالا</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cardBackground {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: transparent;
}
</style>
