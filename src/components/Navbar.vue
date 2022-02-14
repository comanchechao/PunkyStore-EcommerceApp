<template>
  <div class="w-full h-20 flex justify-center align-center bg-mainBlue">
    <MenuDrawer />
    <DefaultButton>درباره ی پانکی مانکی</DefaultButton>
    <DefaultButton>خونه</DefaultButton>
    <DefaultButton>خرید</DefaultButton>
    <ShoppingCartDrawer />
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import MenuDrawer from "./MenuDrawer.vue";
import ShoppingCartDrawer from "./ShoppingCartDrawer.vue";
export default {
  components: {
    DefaultButton,
    MenuDrawer,
    ShoppingCartDrawer,
  },
};
</script>

<style scoped>
.Navbar {
  z-index: 250 !important;
}
</style>
