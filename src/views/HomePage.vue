<template>
  <div
    class="w-screen h-full flex space-y-16 justify-center align-center pt-10 flex-col overflow-hidden"
    id="main"
  >
    <div class="w-screen lg:h-rem33 h-56 p-6 mt-20">
      <div class="h-full w-full justify-center align-center flex">
        <img
          class="absolute PunkyColor"
          src="../assets/images/PunkyColor.webp"
          alt=""
        />
        <img
          class="absolute PunkyHighlights"
          src="../assets/images/PunkyHighlights.webp"
          alt=""
        />
        <img
          class="absolute PunkyOutlines"
          src="../assets/images/PunkyOutlines.webp"
          alt=""
        />

        <img
          class="absolute MonkeyColor"
          src="../assets/images/MonkeyColors.webp"
          alt=""
        />
        <img
          class="absolute PunkyHighlights"
          src="../assets/images/MonkeyHighlights.webp"
          alt=""
        />
        <img
          class="absolute MonkeyOutlines"
          src="../assets/images/MonkeyOutlines.webp"
          alt=""
        />
        <img
          class="absolute MonkeyHead2"
          src="../assets/images/MonkeyHead2.webp"
          alt=""
        />
      </div>
    </div>
    <h1
      class="mt-20 font-extrabold text-center text-4xl lg:text-7xl text-yellow-400 m-auto"
    >
      خوش اومدین
    </h1>
    <!-- <transition-group
      appear
      class="h-auto w-screen flex flex-col lg:flex-row flex-wrap justify-around align-center mt-20 space-y-16 p-7"
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <div class="w-full flex bg-purple-700 items-end">
        <CategoryCards @click="change('شلوار')" class="CategoryCards">
          <template #categoryPicture>
            <img
              class="w-full shadow-2xl h-full object-contain"
              src="../assets/images/pantsCategory.webp"
              alt=""
          /></template>

          <template #categoryName>شلوار</template>
        </CategoryCards>
      </div>
      <CategoryCards @click="change('تیشرت')" class="CategoryCards">
        <template #categoryPicture>
          <img
            class="w-full shadow-2xl h-full object-contain"
            src="../assets/images/shirtCategory.webp"
            alt=""
        /></template>

        <template #categoryName>تیشرت</template>
      </CategoryCards>
      <CategoryCards @click="change('کلاه')" class="CategoryCards">
        <template #categoryPicture>
          <img
            class="w-full shadow-2xl h-full object-contain"
            src="../assets/images/hatCategory.webp"
            alt=""
        /></template>

        <template #categoryName>کلاه</template>
      </CategoryCards>
      <CategoryCards @click="change('جوراب')" class="CategoryCards">
        <template #categoryPicture>
          <img
            class="w-full shadow-2xl h-full object-contain"
            src="../assets/images/socksCategory.webp"
            alt=""
        /></template>

        <template #categoryName>جوراب</template>
      </CategoryCards>
      <CategoryCards @click="change('کپ')" class="CategoryCards">
        <template #categoryPicture>
          <img
            class="w-full shadow-2xl h-full object-contain"
            src="../assets/images/capCategory.webp"
            alt=""
        /></template>

        <template #categoryName>کپ</template>
      </CategoryCards>
      <CategoryCards @click="change('اکسسوری')" class="CategoryCards">
        <template #categoryPicture>
          <img
            class="w-full shadow-2xl h-full object-contain"
            src="../assets/images/accessoryCategory.webp"
            alt=""
        /></template>

        <template #categoryName>اکسسوری</template>
      </CategoryCards>
      <CategoryCards @click="change('کفش')" class="CategoryCards">
        <template #categoryPicture>
          <img
            class="w-full shadow-2xl h-full object-contain"
            src="../assets/images/shoesCategory.webp"
            alt=""
        /></template>

        <template #categoryName>کفش</template>
      </CategoryCards>
    </transition-group> -->
    <div
      class="w-screen h-rem35 space-y-11 flex-col lg:flex-row bg-gray-900 flex justify-start items-center lg:space-x-20 lg:p-10"
    >
      <img
        src="../assets/images/offer.png"
        class="lg:order-last w-72 lg:w-96 mt-6"
        alt=""
      />
      <Carousel class="lg:px-10" />
    </div>
    <!-- <div class="w-3/4 h-96 bg-black"> -->
    <!-- </div> -->
    <div
      v-for="category in categories"
      :key="category.title"
      class="h-auto w-screen flex flex-col justify-center align-center"
    >
      <CategoryProductList :category="category" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import DefaultButton from "../components/DefaultButton.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { supabase } from "../supabase";
import gsap from "gsap";
import { productManagent } from "../store/productManagment";

export default {
  components: {
    CategoryCards: defineAsyncComponent(() =>
      import("../components/CategoryCards.vue")
    ),
    CategoryProductList: defineAsyncComponent(() =>
      import("../components/CategoryProductList.vue")
    ),
    DefaultButton,
    Carousel: defineAsyncComponent(() => import("../components/Carousel.vue")),
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
  },
  mounted() {
    this.animatePunkeyMonkey();
    this.animatePunkeyHighlights();
  },
  methods: {
    animatePunkeyMonkey() {
      const tl = gsap.timeline();
      tl.add();
      tl.from(".MonkeyHead2", {
        opacity: 0,
        duration: 0.7,
        ease: "expo.out",
      });
      tl.from(".PunkyOutlines", {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        delay: 2,
      });
      tl.from(".PunkyColor", {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });
      tl.from(".MonkeyOutlines", {
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
      });
      tl.from(".MonkeyColor", {
        opacity: 0,
        duration: 0.7,
        ease: "expo.out",
      });
    },
    animatePunkeyHighlights() {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.from(".PunkyHighlights", 1.1, {
        ease: "power1.inOut",
        delay: 5,
        opacity: 0,
        transformOrigin: "50% 100%",
      });
    },
  },
  setup() {
    const categories = ref({});

    const productManagment = productManagent();

    const change = function (selected) {
      productManagment.changeCategory(selected);
    };

    onMounted(() => {
      window.scrollTo(0, 0);
      getProducts();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title")
          .limit(3);
        if (error) throw error;
        categories.value = data;
      } catch (error) {
        alert(error.message);
      }
    }
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: 1.5,
      });
    };

    return { categories, beforeEnter, enter, change };
  },
};
</script>

<style></style>
