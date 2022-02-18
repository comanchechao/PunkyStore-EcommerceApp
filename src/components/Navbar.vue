<template>
  <div id="main" class="w-screen Navbar h-20 flex justify-center align-center">
    <MenuDrawer />
    <DefaultButton class="sm:text-1xl">درباره ی پانکی مانکی</DefaultButton>
    <DefaultButton class="text-white">
      <v-icon size="large">mdi-shopping</v-icon>
    </DefaultButton>
    <DefaultButton class="text-white">
      <v-icon size="large">mdi-home</v-icon>
    </DefaultButton>
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
  animation: 35s ease-in-out infinite alternate-reverse color-change;
  z-index: 250 !important;
}
@-webkit-keyframes color-change {
  0% {
    background-color: #ffca3a;
  }

  45% {
    background-color: #1982c4;
  }

  100% {
    background-color: #8ac926;
  }
}

@keyframes color-change {
  0% {
    background-color: #ffca3a;
  }

  50% {
    background-color: #660be7;
  }

  100% {
    background-color: #ff595e;
  }
}
</style>
