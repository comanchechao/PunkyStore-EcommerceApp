<template>
  <button
    class="Button py-3 px-6 drop-shadow-2xl text-white rounded-full font-mainFont text-3xl font-bold"
  >
    <slot>Default</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.Button:hover {
  filter: brightness(0.5);
  filter: drop-shadow(1.5);
  transition: ease-in-out 0.3s;
}
.Button:active {
  filter: brightness(1.2);
  scale: 1.1;
  transition: ease-in-out 0.3s;
}
</style>
