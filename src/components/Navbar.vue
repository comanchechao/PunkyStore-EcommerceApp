<template>
  <div
    class="Navbar fixed w-screen space-x-6 h-20 lg:h-24 bg-mainBlue Navbar opacity-100 z-50 flex items-center justify-center"
  >
    <h1 class="text-4xl text-gray-50 rounded-full px-7 py-1">درباره ی ما</h1>
    <h1 class="text-4xl text-gray-50 rounded-full px-7 py-1">خانه</h1>
    <h1 class="text-4xl text-gray-50 rounded-full px-7 py-1">خرید</h1>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.Navbar {
  z-index: 250 !important;
}
</style>
