<template>
  <div
    class="w-screen flex space-y-16 justify-center align-center flex-col"
    id="main"
  >
    <transition-group
      appear
      class="h-auto w-screen flex flex-col justify-center align-center mt-20 space-y-16 p-7"
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <CategoryCards
        v-for="catagory in catagories"
        :key="catagory.title"
        :catagory="catagory"
        class="CategoryCards"
      />
    </transition-group>
    <div
      class="w-screen h-rem35 space-y-11 flex-col lg:flex-row bg-gray-800 flex justify-start items-center lg:space-x-20 lg:p-10"
    >
      <img src="../assets/images/offer.png" class="lg:order-last" alt="" />
      <Carousel class="lg:px-10" />
    </div>
    <!-- <div class="w-3/4 h-96 bg-black"> -->
    <!-- </div> -->
    <div
      v-for="catagory in catagories"
      :key="catagory.title"
      class="h-screen w-screen flex flex-col justify-center align-center"
    >
      <CategoryProductList :catagory="catagory" />
    </div>
    <Footer />
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue";
import CategoryCards from "../components/CategoryCards.vue";
import CategoryProductList from "../components/CategoryProductList.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { supabase } from "../supabase";
import gsap from "gsap";

export default {
  components: {
    CategoryCards,
    CategoryProductList,
    DefaultButton,
    Carousel,
    Footer,
  },
  mounted() {
    // this.animateCategoryCards();
  },
  methods: {
    // animateCategoryCards() {
    //   gsap.from(".CategoryCards", {
    //     y: 200,
    //     delay: 2,
    //     duration: 1,
    //     ease: "power4.out",
    //   });
    // },
  },
  setup() {
    const catagories = ref({});

    onMounted(() => {
      getProducts();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title");
        if (error) throw error;
        catagories.value = data;
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

    return { catagories, beforeEnter, enter };
  },
};
</script>

<style></style>
