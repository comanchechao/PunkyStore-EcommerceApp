<template>
  <button class="Button py-3 cursor-pointer rounded-lg px-2">
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

 
.Button:active {
  filter: brightness(1.5);
  transform: scale(1.06);
}
</style>
