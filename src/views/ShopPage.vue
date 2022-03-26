<template>
  <div
    id="main"
    class="w-screen flex flex-col justify-center align-center px-5 pt-6"
  >
    <div class="w-full background rounded-b-xl mb-8 mt-24 rounded-t-md">
      <div
        class="w-full h-20 flex justify-between p-7 items-center filter drop-shadow-2xl rounded-t-md bg-blue-400 mb-3"
      >
        <DropDownMenu />
        <h1 class="text-3xl font-extrabold bg-blue-500 p-3 bg-opacity-50">
          هودی ها
        </h1>
        <!-- <ListBox /> -->
      </div>

      <transition-group
        appear
        class="w-full h-full grid productCard lg:grid-cols-4 space-y-5 grid-cols-1 gap-6 p-10 mt-6 place-items-center self-center justify-self-center"
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="flex justify-center items-center"
        />
      </transition-group>
      <div class="px-14 md:px-52">
        <v-pagination
          v-model="page"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          class="my-6"
          rounded="circle"
          :length="15"
        ></v-pagination>
      </div>

      <!-- <DefaultButton
          class="rounded-full font-bold text-white bg-mainBlue self-center text-lg p-4 m-5"
          >نمایش کالاهای بیشتر</DefaultButton
        > -->
    </div>
    <Footer />
  </div>
</template>

<script>
import ListBox from "../components/ListBox.vue";
import DropDownMenu from "../components/DropDownMenu.vue";
import ProductCard from "../components/ProductCard.vue";
import Footer from "../components/Footer.vue";
import { ref } from "@vue/reactivity";
import { supabase } from "../supabase";
import { onMounted } from "@vue/runtime-core";
import gsap from "gsap";
export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    ListBox,
    DropDownMenu,
    ProductCard,
    Footer,
  },
  // props: ["catagory"],

  setup(props) {
    const products = ref([]);

    onMounted(() => {
      getProducts();
    });

    async function getProducts() {
      try {
        const { data, error } = await supabase.from("products").select();
        // .eq("product-category", props.catagory.title);

        if (error) throw error;
        products.value = data;
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
        delay: 0.2,
      });
    };

    return { products, beforeEnter, enter };
  },
};
</script>

<style scoped>
.background {
  backdrop-filter: blur(9px) saturate(109%);
  -webkit-backdrop-filter: blur(9px) saturate(109%);
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 0 0 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
