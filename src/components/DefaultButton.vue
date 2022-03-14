<template>
  <button class="Button py-3 cursor-pointer rounded-3xl px-3">
    <slot>Default</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.Button {
  transition: ease-in 0.3s;
}
.Button:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.466));
  filter: drop-shadow(1.5);
}
.Button:active {
  filter: brightness(1.5);
  transform: scale(1.06);
}
</style>
