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
      class="flex space-y-4 justify-center flex-col items-center w-screen md:h-72 h-96 bg-darkPurple"
    >
      <div
        class="flex w-screen justify-center items-center lg:space-x-6 space-x-1"
      >
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
      <div class="text-center flex justify-center items-center px-5 flex-col">
        <h1 class="lg:text-4xl flex text-xl font-bold text-purple-200">
          آدرس: ارومیه، خیابان خیام جنوبی، سنگ فرش پاساژ اخوان، زیر زمین، پلاک
          ۴، بوتیک پانکی مانکی
          <v-icon color="pink">mdi-map-marker</v-icon>
        </h1>
        <h1
          class="lg:text-4xl flex lg:flex-row-reverse flex-col space-x-5 lg:space-x-7 text-xl justify-start text-left items-center font-bold text-purple-200"
        >
          <span class="lg:ml-4">
            :شماره تماس <v-icon color="blue">mdi-phone-in-talk</v-icon>
          </span>
          <span>۰۴۴۳۲۲۵۶۲۱۶</span>
          <span>۰۴۴۳۲۲۵۹۰۰۴</span>
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
