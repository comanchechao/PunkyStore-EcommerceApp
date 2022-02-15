<template>
  <div
    id="main"
    class="w-full h-20 flex justify-center align-center bg-transparent"
  >
    <MenuDrawer />
    <DefaultButton>درباره ی پانکی مانکی</DefaultButton>
    <DefaultButton>خونه</DefaultButton>
    <DefaultButton>خرید</DefaultButton>
    <LoginDialog />
    <ShoppingCartDrawer />
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import MenuDrawer from "./MenuDrawer.vue";
import ShoppingCartDrawer from "./ShoppingCartDrawer.vue";
import LoginDialog from "./LoginDialog.vue";

export default {
  components: {
    DefaultButton,
    MenuDrawer,
    ShoppingCartDrawer,
    LoginDialog,
  },
  setup() {},
};
</script>

<style scoped>
.Navbar {
  z-index: 250 !important;
}
</style>
