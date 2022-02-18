<template>
  <button
    class="Button py-3 text-darkPurple rounded-full font-mainFont text-3xl font-bold"
  >
    <slot>Default</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.Button {
  transition: transform ease-in-out 0.5s;
}
.Button:hover {
  filter: brightness(80%);
  filter: drop-shadow(1.5);
}
.Button:active {
  filter: brightness(1.2);
  transform: scale(1.06);
}
</style>
