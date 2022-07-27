<template>
  <button class="Button py-3 cursor-pointer rounded-md px-2">
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
  background: linear-gradient(
    rgba(100, 100, 100, 0.171),
    rgba(102, 102, 102, 0.199)
  );
  filter: drop-shadow(1.5);
}

.Button:active {
  filter: brightness(1.5);
  transform: scale(1.06);
}
</style>
