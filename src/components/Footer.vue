<template>
  <div
    class="h-auto w-screen bg-gradient-to-b from-yellow-500 flex-col justify-between to-LightBlue-200 flex items-center"
  >
    <div
      class="w-80 h-80 mt-6 relative flex justify-center align-center NavbarTrigger logo"
    >
      <img
        class="absolute object-contain head"
        src="../assets/images/monkeyHead.webp"
        alt=""
      />
      <img
        class="absolute object-contain eyes"
        src="../assets/images/monkeyEyes.webp"
        alt=""
      />
    </div>
    <h1 class="text-4xl font-bold my-7 text-blueGray-900">
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
import gsap from "gsap";
export default {
  components: {
    DefaultButton,
  },
  mounted() {
    this.animateMonkey();
  },
  methods: {
    animateMonkey() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.from(".eyes", 2, {
        ease: "power1.inOut",
        opacity: 0,
        transformOrigin: "50% 100%",
      });
    },
  },
};
</script>

<style></style>
