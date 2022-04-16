<template>
  <div class="w-screen h-screen p-6 bg-pink-600">
    <div class="h-full w-full justify-center align-center flex">
      <img
        class="absolute MonkeyNeck"
        src="../assets/images/aboutUsMonkeyNeck.webp"
        alt=""
      />
      <img
        class="absolute MonkeyHead"
        src="../assets/images/aboutUsMonkeyHead.webp"
        alt=""
      />
      <img
        class="absolute MonkeyEarings"
        src="../assets/images/aboutUsMonkeyEarings.webp"
        alt=""
      />
    </div>
  </div>
  <div class="h-screen w-screen bg-pink-800"></div>
  <Footer />
</template>

<script>
import gsap from "gsap";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
  mounted() {
    this.animateMonkey();
  },
  methods: {
    animateMonkey() {
      const tl = gsap.timeline();
      tl.add();
      tl.from(".MonkeyNeck", {
        opacity: 0,
        duration: 0.7,
        ease: "expo.out",
        delay: 1.7,
      });
      tl.from(".MonkeyHead", {
        opacity: 0,
        duration: 1,
        y: 200,
        ease: "expo.out",
        delay: 0.7,
      });
      tl.from(".MonkeyEarings", {
        opacity: 0,
        duration: 1,
        y: -200,
        ease: "expo.out",
      });
    },
  },
};
</script>

<style></style>
