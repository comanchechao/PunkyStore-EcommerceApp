<template>
  <div
    class="h-rem33 w-screen bg-gradient-to-b from-yellow-500 flex-col justify-between to-LightBlue-200 flex items-center"
  >
    <h1 class="text-4xl font-bold mt-7 text-blueGray-900">
      با ما در تماس باشین
    </h1>
    <div class="space-x-6">
      <DefaultButton class="text-3xl">
        <v-icon x-large class="icon-3d transform lg:scale-150">
          mdi-telegram</v-icon
        >
      </DefaultButton>
      <DefaultButton class="text-3xl">
        <v-icon x-large class="icon-3d transform lg:scale-150"
          >mdi-google</v-icon
        >
      </DefaultButton>
      <DefaultButton class="text-3xl">
        <v-icon x-large class="icon-3d transform lg:scale-150"
          >mdi-instagram</v-icon
        >
      </DefaultButton>
      <DefaultButton class="text-3xl">
        <v-icon x-large class="icon-3d transform lg:scale-150"
          >mdi-whatsapp</v-icon
        >
      </DefaultButton>
    </div>
    <img
      src="../assets/images/Monkey.png"
      class="w-96 self-start object-contain"
      alt=""
    />
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue";
export default {
  components: {
    DefaultButton,
  },
};
</script>

<style></style>
