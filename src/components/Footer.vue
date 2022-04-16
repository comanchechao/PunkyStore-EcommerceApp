<template>
  <div
    class="h-auto w-screen bg-gradient-to-b from-goldie flex-col justify-between to-LightBlue-200 flex items-center"
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
    <div
      class="space-y-9 flex justify-center flex-col items-center w-screen md:h-72 h-96 bg-darkPurple py-8"
    >
      <div class="flex lg:space-x-6 space-x-1 sm:px-6">
        <img
          class="filter drop-shadow-2xl cursor-pointer icons bg-Rose-300 p-2 rounded-full bg-opacity-10"
          src="../assets/images/mapIcon.webp"
          alt=""
        />

        <img
          class="filter drop-shadow-2x cursor-pointer icons bg-Rose-300 p-2 rounded-full bg-opacity-10"
          src="../assets/images/instagramIcon.webp"
          alt=""
        />
        <img
          class="filter drop-shadow-2x cursor-pointer icons bg-Rose-300 p-2 rounded-full bg-opacity-10"
          src="../assets/images/telegramIcon.webp"
          alt=""
        />

        <img
          class="filter drop-shadow-2x cursor-pointer icons bg-Rose-300 p-2 rounded-full bg-opacity-10"
          src="../assets/images/whatsappIcon.webp"
          alt=""
        />
      </div>
      <div
        class="text-center md:text-right flex justify-center items-center flex-col px-6"
      >
        <h1 class="lg:text-4xl text-2xl font-bold md:my-7 text-purple-200">
          آدرس: اول خیام، دوم خیام، چهارراه ولفولکس، پاساژ لولولند، پانکی مانکی
          <v-icon color="pink">mdi-map-marker</v-icon>
        </h1>
        <h1 class="lg:text-4xl my-4 text-2xl font-bold md:my-7 text-purple-200">
          شماره تماس: 0215951656
          <v-icon color="blue">mdi-phone-in-talk</v-icon>
        </h1>
      </div>
    </div>
    <!-- <img
      src="../assets/images/Monkey.png"
      class="w-96 self-start object-contain"
      alt=""
    /> -->
  </div>
</template>

<script>
// import DefaultButton from "../components/DefaultButton.vue";
import gsap from "gsap";
export default {
  components: {
    // DefaultButton,
  },
  mounted() {
    this.animateMonkey();
  },
  methods: {
    animateMonkey() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.from(".eyes", 1, {
        ease: "power1.inOut",
        opacity: 0,
        transformOrigin: "50% 100%",
      });
    },
  },
};
</script>

<style>
.icons:hover {
  transition: ease-in-out 0.5s;
  background-color: aquamarine;
  transform: scale(1.08);
}
</style>
