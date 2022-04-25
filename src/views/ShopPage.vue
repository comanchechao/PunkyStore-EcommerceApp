<template>
  <div
    id="main"
    class="w-screen flex flex-col justify-center align-center px-3 pt-6"
  >
    <div class="w-full background rounded-b-xl mb-8 mt-24">
      <div
        class="w-full h-20 flex justify-between lg:justify-between px-5 bg-gray-50 bg-opacity-60 items-center filter drop-shadow-2xl mb-3"
      >
        <!-- <DropDownMenu /> -->
        <div class="pt-2 relative text-white">
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg
              class="text-white h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
          <input
            class="border-2 placeholder-white transition ease-in duration-300 text-darkPurple hover:bg-white border-gray-300 bg-mainBlue h-10 px-5 pr-4 md:pr-16 rounded-full text-md focus:outline-none"
            type="search"
            name="search"
            placeholder="جستجو"
          />
        </div>
        <h1
          class="text-2xl font-extrabold flex text-Indigo-800 cursor-pointer p-3"
        >
          <span class="hidden lg:flex"> دسته بندی ها </span>
          <v-icon>mdi-menu</v-icon>
        </h1>
        <!-- <ListBox /> -->
      </div>
      <div class="w-full flex items-center space-x-3 justify-end p-2">
        <Switch
          v-model="available"
          :class="available ? 'bg-Sky-400' : 'bg-gray-300'"
          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span
            aria-hidden="true"
            :class="available ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
          >
          </span>
        </Switch>
        <h1 class="font-bold text-lg text-gray-500">کالاهای موجود</h1>
        <Switch
          v-model="discount"
          :class="discount ? 'bg-Sky-400' : 'bg-gray-300'"
          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span
            aria-hidden="true"
            :class="discount ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
          >
          </span>
        </Switch>
        <h1 class="font-bold text-lg text-gray-500">تخفیف دارها</h1>
        <DropDown>
          ><template #title> فیلترها </template>

          <template #firstOption>
            <p @click="order = 'created_at'">جدیدترین</p>
          </template>

          <template #secondOption> پربازدیدترین </template>

          <template #thirdOption>
            <span @click="(ascention = !ascention) (order = 'price')"> گرانترین </span>
          </template>
          <template #forthOption>
            <span @click="(ascention = !ascention) (order = 'price')">
              ارزانترین
            </span>
          </template>
        </DropDown>

        <DropDown
          ><template #title> هودی </template>
          <template #titlePicture>
            <img
              class="ml-3 rounded-lg cursor-pointer transition ease-in duration-300 p-2 hover:bg-white"
              src="../assets/images/HoodieIcon.webp"
              alt=""
            />
          </template>

          <template #firstOption> شلوار </template>
          <template #firstPicture>
            <img
              class="ml-15 mr-2"
              src="../assets/images/PantsIcon.webp"
              alt=""
            />
          </template>
          <template #secondOption> پیراهن </template>
          <template #secondPicture>
            <img
              class="ml-15 mr-0"
              src="../assets/images/ShirtIcon.webp"
              alt=""
            />
          </template>

          <template #thirdOption> هودی </template>
          <template #forthOption> هودی </template></DropDown
        >
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
      <div class="w-full flex p-2 justify-center">
        <div class="w-2/5">
          <v-pagination
            v-model="page"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            class="my-6"
            rounded="circle"
            :length="15"
            size="x-large"
          ></v-pagination>
        </div>
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
// import DropDownMenu from "../components/DropDownMenu.vue";
import DropDown from "../components/DropDown.vue";
import ProductCard from "../components/ProductCard.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
import { supabase } from "../supabase";
import { onMounted, watch } from "@vue/runtime-core";
import gsap from "gsap";
import { Switch } from "@headlessui/vue";

export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    ListBox,
    Switch,
    DropDown,
    ProductCard,
    Footer,
  },
  // props: ["category"],

  setup() {
    const discount = ref(false);
    const available = ref(false);
    const order = ref("price");
    const ascention = ref(false);
    const products = ref([]);
    const getPagination = (page, size) => {
      const limit = size ? +size : 3;
      const from = page ? page * limit : 0;
      const to = page ? from + size - 1 : size - 1;

      return { from, to };
    };

    watch(order, () => {
      getProducts();
      console.log(order);
    }),
      watch(ascention, () => {
        getProducts();
      });
    onMounted(() => {
      getProducts();
    });

    async function getProducts(page) {
      console.log("bull", order);
      console.log(ascention)
      // ascendtion = false;
      try {
        const { from, to } = getPagination(page, 4);
        const { data, error } = await supabase
          .from("products")
          .select()
          .order(order.value, { ascending: ascention.value })
          .range(from, to);
        // .eq("product-category", props.category.title);

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

    return {
      products,
      beforeEnter,
      enter,
      discount,
      available,
      getProducts,
      order,
      ascention,
    };
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
