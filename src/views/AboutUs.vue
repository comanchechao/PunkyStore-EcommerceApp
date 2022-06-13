<template>
  <div class="w-screen h-screen p-6 bg-pink-600">
    <div class="h-full w-full justify-center align-center flex">
      <div></div>
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
      class="w-full h-full flex justify-start space-y-8 py-8 items-center flex-col bg-goldie mainTextDiv"
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
        class="w-full my-52 flex flex-col lg:flex-row justify-around items-center"
      >
        <div class="space-y-7 flex flex-col items-center">
          <div class="w-40 h-40 bg-white rounded-full"></div>
          <h1 class="text-3xl font-black text-black">رلی موسوی</h1>
          <h3 class="text-2xl font-medium text-darkPurple">بنیان گذار</h3>
          <div class="w-40 h-40 bg-white rounded-full"></div>
          <h1 class="text-3xl font-black text-black">کیارش واحدی</h1>
          <h3 class="text-2xl font-medium text-darkPurple">
            عضو تیم پانکی مانکی
          </h3>
          <div class="w-40 h-40 bg-white rounded-full"></div>
          <h1 class="text-3xl font-black text-black">بهرام محمدزاده</h1>
          <h3 class="text-2xl font-medium text-darkPurple">با تشکر ویژه از</h3>
        </div>
        <!-- <div class="space-y-7 flex flex-col items-center">
          <div class="w-40 h-40 bg-white rounded-full"></div>
          <h1 class="text-3xl font-black text-white">بهرام</h1>
          <h3 class="text-2xl font-medium text-LightBlue-400">
            عضو تیم پانکی مانکی
          </h3>
        </div> -->
      </div>
      <!-- <h1 class="text-7xl">و</h1>
      <div class="space-y-7 flex flex-col items-center">
        <div class="w-36 h-36 bg-white rounded-full"></div>
        <h1 class="text-3xl font-black text-black">پاتریک مقدس</h1>
        <h3 class="text-2xl font-medium text-purple-900">
          عضو ویژه ی تیم پانکی مانکی
        </h3>
      </div> -->
    </div>
  </div>
  <Footer />
</template>

<script>
import gsap from "gsap";
import { defineAsyncComponent } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
  },
  mounted() {
    // this.animateTextDiv();
    this.animateMonkey();
    this.animateMonkeyHead();
    this.animateMonkeyEarings();
    this.animateMonkeyNeck();
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
    animateMonkeyHead() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(".MonkeyHead", 0.9, {
        ease: "power1.inOut",
        rotation: -15,

        transformOrigin: "50% 100%",
      });
      tl.to(".MonkeyHead", 0.9, {
        ease: "power1.inOut",
        rotation: 15,

        transformOrigin: "50% 100%",
      });
    },
    animateMonkeyEarings() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(".MonkeyEarings", 0.9, {
        ease: "power1.inOut",
        rotation: -15,

        transformOrigin: "50% 100%",
      });
      tl.to(".MonkeyEarings", 0.9, {
        ease: "power1.inOut",
        rotation: 15,

        transformOrigin: "50% 100%",
      });
    },
    animateMonkeyNeck() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(".MonkeyNeck", 0.9, {
        ease: "power1.inOut",
        rotation: -15,

        transformOrigin: "50% 100%",
      });
      tl.to(".MonkeyNeck", 0.9, {
        ease: "power1.inOut",
        rotation: 15,

        transformOrigin: "50% 100%",
      });
    },
    // animateTextDiv() {
    //   const tl = gsap.timeline();
    //   tl.from(".textDiv", {
    //     opacity: 0,
    //     y: 900,
    //     ease: "expo.out",
    //     scrollTrigger: {
    //       scrub: 1.5,
    //       start: "top bottom",
    //       end: "top center",
    //       trigger: ".mainTextDiv",
    //       toggleActions: "play none none reset",
    //     },
    //   });
    // },
  },
};
</script>

<style></style>
