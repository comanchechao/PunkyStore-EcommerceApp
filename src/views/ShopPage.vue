<template>
  <div id="main" class="w-screen flex justify-center align-center p-6">
    <div class="w-full h-screen background rounded-b-xl">
      <div class="w-full h-20 flex justify-center align-center bg-mainPink">
        <ListBox />
      </div>
    </div>
  </div>
</template>

<script>
import ListBox from "../components/ListBox.vue";
export default {
  components: {
    ListBox,
  },
};
</script>

<style scoped>
.background {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: white;
}
</style>
