<template>
  <div
    class="h-auto w-screen bg-gradient-to-b from-goldie flex-col justify-between to-LightBlue-200 flex items-center"
  >
    <div
      class="w-72 h-72 mt-6 relative flex justify-center align-center NavbarTrigger logo"
    >
      <img
        class="absolute object-contain transform-gpu head"
        src="../assets/images/monkeyHead.webp"
        alt=""
      />
      <img
        class="absolute object-contain transform-gpu eyes"
        src="../assets/images/monkeyEyes.webp"
        alt=""
      />
    </div>
    <h1 class="text-4xl font-bold my-7 text-blueGray-900">
      با ما در تماس باشین
    </h1>
    <div
      class="flex justify-around flex-col items-center w-screen md:h-72 h-dialog bg-darkPurple"
    >
      <div
        class="flex w-screen justify-center items-center lg:space-x-6 space-x-1"
      >
        <a href="https://goo.gl/maps/2H2mjfhrhaA3zEin8">
          <img
            class="filter drop-shadow-2xl cursor-pointer icons object-contain w-16 lg:w-24 bg-Rose-300 p-2 rounded-full bg-opacity-10"
            src="../assets/images/mapIcon.webp"
            alt=""
          />
        </a>

        <a href="https://www.instagram.com/punky.stores">
          <img
            class="filter drop-shadow-2x cursor-pointer icons object-contain w-16 lg:w-24 bg-Rose-300 p-2 rounded-full bg-opacity-10"
            src="../assets/images/instagramIcon.webp"
            alt=""
          />
        </a>
        <a href="https://t.me/punkystore">
          <img
            class="filter drop-shadow-2x cursor-pointer object-contain w-16 lg:w-24 icons bg-Rose-300 p-2 rounded-full bg-opacity-10"
            src="../assets/images/telegramIcon.webp"
            alt=""
          />
        </a>
        <a href="https://wa.me/+989148000357">
          <img
            class="filter drop-shadow-2x cursor-pointer icons object-contain w-16 lg:w-24 bg-Rose-300 p-2 rounded-full bg-opacity-10"
            src="../assets/images/whatsappIcon.webp"
            alt=""
          />
        </a>
      </div>
      <div
        class="text-center w-screen space-y-6 flex justify-center items-center px-5 flex-col"
      >
        <h1 class="lg:text-4xl flex px-4 text-xl font-bold text-purple-200">
          آدرس: ارومیه، خیابان خیام جنوبی، سنگ فرش پاساژ اخوان، زیر زمین، پلاک
          ۴، بوتیک پانکی مانکی
          <!-- <v-icon color="pink">mdi-map-marker</v-icon> -->
        </h1>
        <h1
          class="lg:text-4xl flex lg:flex-row-reverse flex-col space-x-5 lg:space-x-7 text-xl justify-start text-left items-center font-bold text-purple-200"
        >
          <span class="lg:ml-4"> :شماره تماس </span>
          <span>۰۴۴۳۲۲۵۶۲۱۶</span>
          <span>۰۴۴۳۲۲۵۹۰۰۴</span>
        </h1>
        <div
          class="h-full w-full flex flex-col justify-center text-center items-center"
        >
          <h1
            class="flex flex-col font-mainFont space-y-2 font-thin capitalize text-center text-lg lg:text-xl text-mainBlue"
          >
            توسعه سایت توسط
            <a
              href="https://www.instagram.com/comanche.chao/?hl=en"
              class="Chao"
              >Comanche Chao🧙</a
            >
            <a href="https://www.instagram.com/just_greez/?hl=en" class="Greez">
              Greez🐻</a
            >
          </h1>
          <h1
            class="flex flex-col font-mainFont text-center space-y-2 font-thin capitalize text-lg lg:text-xl text-mainBlue"
          >
            هنر توسط
            <a href="https://www.instagram.com/payamone/?hl=en" class="payamone"
              >PayamOne🌴</a
            >
          </h1>
        </div>
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
    this.animateMonkeyEyes();
    this.animateMonkeyHead();
  },
  methods: {
    animateMonkeyEyes() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.from(".eyes", 0.6, {
        ease: "power1.inOut",
        opacity: 0,
        rotation: -20,
        x: 10,
        transformOrigin: "50% 100%",
        delay: 0.09,
      });
    },
    animateMonkeyHead() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.from(".head", 0.6, {
        ease: "power1.inOut",
        rotation: -20,
        x: 10,
        delay: 0.09,

        transformOrigin: "50% 100%",
      });
    },
  },
};
</script>

<style>
.payamone {
  color: #971bfc;
  transition: ease-in-out 0.3s;
}
.Chao {
  color: #971bfc;
  transition: ease-in-out 0.3s;
}
.Chao:hover {
  color: #ec18ff;
}
.Chao:active {
  color: #571bfc;
  scale: 0.8;
}
.Greez {
  color: #971bfc;
  transition: ease-in-out 0.3s;
}
.Greez:hover {
  color: #00e1ff;
}
.Greez:active {
  color: #7583ff;
  scale: 0.8;
}

.payamone:hover {
  color: #fbff00;
}

/* .kesler:active {
  transition: all ease-in-out 0.3s;
  scale: 1.5;
} */
.payamone:active {
  color: #ff758c;
  scale: 0.8;
}
.icons:hover {
  transition: ease-in-out 0.5s;
  background-color: aquamarine;
  transform: scale(1.08);
}
</style>
