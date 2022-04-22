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
  <div class="h-auto w-screen bg-pink-800">
    <div
      class="bg-pink-100 rounded-lg mainTextDiv w-full p-10 justify-self-start space-y-11 flex justify-center align-center text-center"
    >
      <h1 class="font-black text-4xl">پانکی مانکی کیه؟</h1>
    </div>
    <div
      class="w-full h-full flex justify-start space-y-8 py-8 items-center flex-col bg-goldie"
    >
      <div
        class="w-3/4 h-auto text-center flex items-start justify-center bg-gray-200 rounded-3xl textDiv"
      >
        <h2 class="font-black text-2xl lg:text-3xl p-3 my-6 leading-normal">
          ما یک مجموعه ی فروشگاه های پوشاک در ارومیه هستیم، که از سال 2010 شروع
          به فعالیت کردیم
        </h2>
      </div>
      <div
        class="w-3/4 h-auto text-center flex items-start justify-center bg-gray-200 rounded-3xl textDiv"
      >
        <h2 class="font-black text-2xl lg:text-3xl p-3 my-6 leading-normal">
          به دلیل اهمیتِ دیدگاه علمی و روانشناختی نسبت به مد و پوشاک، ما سعی
          داریم با ارائه ی به روز ترین و معروف ترین برندها، استایل های متناسب با
          خصوصیات شما رو معرفی کنیم
        </h2>
      </div>
      <div
        class="w-3/4 h-auto text-center flex items-start justify-center bg-gray-200 rounded-3xl textDiv"
      >
        <h2 class="font-black text-2xl lg:text-3xl p-3 my-6 leading-normal">
          ما میتونیم صفر تا صد نیازهای پوشاک شما رو، هرجای ایران که باشید،
          برآورده کنیم. علاوه بر این، پانکی مانکی همواره در تلاشِِ که از
          هنرمندهای کمتر شناخته شده ی کشورمون، تو تموم زمینه ها، حمایت کنه
        </h2>
      </div>
      <h1 class="text-5xl my-6 font-extralight text-center">
        تیم ما رو بیشتر بشناسید
      </h1>
      <div
        class="w-full lg:h-72 h-screen bg-Indigo-900 flex flex-col lg:flex-row justify-around items-center"
      >
        <div class="space-y-7 flex flex-col items-center">
          <div class="w-40 h-40 bg-white rounded-full"></div>
          <h1 class="text-3xl font-black text-white">کیارش کینگ</h1>
        </div>
        <div class="space-y-7 flex flex-col items-center">
          <div class="w-40 h-40 bg-white rounded-full"></div>
          <h1 class="text-3xl font-black text-white">رلی</h1>
        </div>
        <div class="space-y-7 flex flex-col items-center">
          <div class="w-40 h-40 bg-white rounded-full"></div>
          <h1 class="text-3xl font-black text-white">بهمیکس</h1>
        </div>
      </div>
      <h1 class="text-7xl">و</h1>
      <div class="space-y-7 flex flex-col items-center">
        <div class="w-36 h-36 bg-white rounded-full"></div>
        <h1 class="text-3xl font-black text-black">پاتریک مقدس</h1>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import gsap from "gsap";
import Footer from "../components/Footer.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Footer,
  },
  mounted() {
    this.animateMonkey();
    this.animateTextDiv();
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
    animateTextDiv() {
      const tl = gsap.timeline();
      tl.from(".textDiv", {
        opacity: 0,
        y: 700,
        ease: "expo.out",
        scrollTrigger: {
          scrub: 1.5,
          start: "top bottom",
          end: "top 60%",
          trigger: ".textDiv",
          toggleActions: "play none none reverse",
        },
      });
    },
  },
};
</script>

<style></style>
