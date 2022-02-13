<template>
  <div
    class="Navbar text-white fixed w-full space-x-6 h-20 lg:h-24 bg-goldie Navbar opacity-100 z-50 flex items-center justify-center"
  >
    <DefaultButton>درباره ی پانکی مانکی</DefaultButton>
    <DefaultButton>خونه</DefaultButton>
    <DefaultButton>خرید</DefaultButton>
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue";

export default {
  components: {
    DefaultButton,
  },
  name: "Navbar",
};
</script>

<style>
.Navbar {
  z-index: 250 !important;
}
</style>
