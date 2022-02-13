<template>
  <div
    class="Navbar text-white fixed w-full space-x-6 h-20 lg:h-24 bg-goldie Navbar opacity-100 z-50 flex items-center justify-center"
  >
    <DefaultButton>درباره ی پانکی مانکی</DefaultButton>
    <DefaultButton>خونه</DefaultButton>
    <DefaultButton>خرید</DefaultButton>
    <MenuDrawer />
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import MenuDrawer from "./MenuDrawer.vue";

export default {
  components: {
    MenuDrawer,
    DefaultButton,
  },
};
</script>

<style>
.Navbar {
  z-index: 250 !important;
}
</style>
