<template>
  <div
    id="main"
    class="w-screen flex flex-col justify-center align-center px-3 pt-6"
  >
    <div
      class="w-full mt-24 z-50 h-20 flex justify-between lg:justify-between px-5 bg-gray-50 items-center"
    >
      <!-- <DropDownMenu /> -->
      <div class="pt-2 relative text-white">
        <button
          type="submit"
          class="absolute flex items-center right-0 top-0 mt-5 mr-4"
        >
          <v-progress-circular
            v-show="loading"
            :size="25"
            color="blue"
            indeterminate
          ></v-progress-circular>
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
          v-model="SearchIndex"
          class="border-2 placeholder-white transition ease-in duration-300 text-darkPurple hover:bg-white border-gray-300 bg-mainBlue h-10 px-5 pr-4 md:pr-16 rounded-full text-md focus:outline-none"
          type="search"
          name="search"
          placeholder="جستجو"
        />
      </div>
      <MegaMenu>
        <template #Hat>
          <div @click="category = 'کلاه'" class="">
            <img
              src="../assets/images/Hat.webp"
              class="object-contain h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-xl text-center text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              کلاه
            </h1>
          </div>
        </template>
        <template #Pants>
          <div @click="category = 'شلوار'" class="">
            <img
              src="../assets/images/Pants.webp"
              class="object-contain h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              شلوار
            </h1>
          </div>
        </template>
        <template #Hoodie>
          <div @click="category = 'هودی'" class="">
            <img
              src="../assets/images/Hoodie.webp"
              class="object-contain h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              هودی
            </h1>
          </div>
        </template>
        <template #Shirt>
          <div @click="category = 'پیراهن'" class="">
            <img
              src="../assets/images/Shirt.webp"
              class="object-contain h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-xl text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              پیراهن
            </h1>
          </div>
        </template>
        <template #Socks>
          <div @click="category = 'جوراب'" class="">
            <img
              src="../assets/images/Socks.webp"
              class="object-contain h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-xl text-center text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              جوراب
            </h1>
          </div>
        </template>
        <template #Accessory>
          <div @click="category = 'اکسسوری'" class="flex items-center flex-col">
            <img
              src="../assets/images/accessory.webp"
              class="object-contain lg:w-36 w-20 h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-center text-xl text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              اکسسوری
            </h1>
          </div>
        </template>
        <template #Cap>
          <div @click="category = 'کپ'" class="">
            <img
              src="../assets/images/Cap.webp"
              class="object-contain h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-xl text-center text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              کپ
            </h1>
          </div>
        </template>
        <template #Shoes>
          <div @click="category = 'کفش'" class="">
            <img
              src="../assets/images/Shoe.webp"
              class="object-contain h-36"
              alt=""
            />
            <h1
              class="lg:text-4xl text-center text-xl text-darkPurple transition ease-in duration-200 hover:bg-LightBlue-500 border-b-4 lg:p-5 p-2 border-b-mainBlue rounded-lg"
            >
              کفش
            </h1>
          </div>
        </template>
      </MegaMenu>

      <!-- <ListBox /> -->
    </div>
    <div class="w-full background rounded-b-xl mb-8">
      <div
        class="w-full flex items-center space-x-3 justify-end p-2 flex-col space-y-6 lg:flex-row"
      >
        <div class="flex items-center space-x-3">
          <Switch
            v-model="inStock"
            :class="inStock ? 'bg-green-500' : 'bg-gray-300'"
            class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <span
              aria-hidden="true"
              :class="inStock ? 'translate-x-9' : 'translate-x-0'"
              class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
            >
            </span>
          </Switch>
          <h1 class="font-bold text-lg text-gray-700">کالاهای موجود</h1>
          <Switch
            v-model="isDiscounted"
            :class="isDiscounted ? 'bg-green-500' : 'bg-gray-300'"
            class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <span
              aria-hidden="true"
              :class="isDiscounted ? 'translate-x-9' : 'translate-x-0'"
              class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
            >
            </span>
          </Switch>
          <h1 class="font-bold text-lg text-gray-700">تخفیف دارها</h1>
        </div>
        <div class="flex items-center justify-center space-x-3">
          <DropDown>
            ><template #title> فیلترها </template>

            <template #firstOption>
              <p @click="order = 'created_at'" class="w-full h-full">
                جدیدترین
              </p>
            </template>

            <template #secondOption> پربازدیدترین </template>

            <template #thirdOption>
              <span
                class="w-full h-full"
                @click="(ascention = false)((order = 'price'))"
              >
                گرانترین
              </span>
            </template>
            <template #forthOption>
              <span
                class="w-full h-full"
                @click="(ascention = true)((order = 'price'))"
              >
                ارزانترین
              </span>
            </template>
          </DropDown>

          <DropDown>
            <template #title> زیرمجموعه ها </template>

            <template #firstOption>
              <p class="w-full h-full" @click="category = 'شلوار'">شلوار</p>
            </template>
            <template #secondOption>
              <p class="w-full h-full" @click="category = 'پیراهن'">پیراهن</p>
            </template>
            <template #thirdOption>
              <p class="w-full h-full" @click="category = 'کلاه'">کلاه</p>
            </template>
            <template #forthOption>
              <p class="w-full h-full" @click="category = 'کفش'">کفش</p>
            </template>
            <template #fifthOption>
              <p class="w-full h-full" @click="category = 'هودی'">هودی</p>
            </template>
          </DropDown>
        </div>
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
import { defineAsyncComponent } from "vue";
import { productManagent } from "../store/productManagment";
import { storeToRefs } from "pinia";
import DropDown from "../components/DropDown.vue";
import { ref } from "vue";
import { supabase } from "../supabase";
import { computed, onMounted, watch } from "@vue/runtime-core";
import gsap from "gsap";
import { Switch } from "@headlessui/vue";

export default {
  data() {
    // return {
    //   page: 1,
    // };
  },
  components: {
    ListBox: defineAsyncComponent(() => import("../components/ListBox.vue")),
    Switch,
    DropDown,
    ProductCard: defineAsyncComponent(() =>
      import("../components/ProductCard.vue")
    ),
    Footer: defineAsyncComponent(() => import("../components/Footer.vue")),
    MegaMenu: defineAsyncComponent(() => import("../components/MegaMenu.vue")),
  },
  // props: ["category"],

  setup() {
    const isDiscounted = ref(false);
    const inStock = ref(true);
    const order = ref("price");
    const SearchIndex = ref("");
    const ascention = ref();
    const page = ref();
    const loading = ref(false);
    const products = ref([]);
    const from = ref(1);
    const to = ref(4);
    const productManagment = productManagent();

    let { category } = storeToRefs(productManagment);

    watch(order, () => {
      getProducts();
      console.log(order);
    }),
      watch(inStock, () => {
        getProducts();
        console.log(order);
      });
    watch(isDiscounted, () => {
      getProducts();
      console.log(isDiscounted);
    }),
      watch(ascention, () => {
        getProducts();
      });
    watch(SearchIndex, () => {
      SearchProducts();
    });

    watch(category, () => {
      changeCategories();
      console.log(category);
    });
    watch(page, () => {
      // from.value = page.value * 2;
      to.value = page.value * 4;
      getProducts();

      console.log(from, to);
    });
    onMounted(() => {
      // getcategories();
      console.log(category);
      getProducts();
    });
    async function SearchProducts() {
      try {
        loading.value = true;

        const { data, error } = await supabase
          .from("products")
          .select()
          .textSearch("title", SearchIndex.value, {
            config: "english",
          });
        // .eq("product-category", props.category.title);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }
    // async function getcategories() {
    //   try {
    //     const { data, error } = await supabase
    //       .from("product-category")
    //       .select("title");
    //     console.log(categories);
    //     // .eq("product-category", props.category.title);

    //     if (error) throw error;
    //     categories.value = data;
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // }
    async function changeCategories() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .eq("product-category", category.value);
        // .eq("product-category", props.category.title);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      }
    }
    async function Discount() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .order(order.value, { ascending: ascention.value })
          .range(from.value, to.value);

        // .eq("product-category", props.category.title);

        if (error) throw error;
        products.value = data;
      } catch (error) {
        alert(error.message);
      }
    }
    async function getProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .order(order.value, { ascending: ascention.value })
          .range(from.value, to.value)
          .is("inStock", inStock.value);

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
      Discount,
      products,
      beforeEnter,
      enter,
      isDiscounted,
      inStock,
      getProducts,
      order,
      ascention,
      page,
      SearchIndex,
      loading,
      category,
      from,
      to,
    };
  },
};
</script>

<style scoped>
.background {
  backdrop-filter: saturate(109%);
  -webkit-backdrop-filter: blur(9px) saturate(109%);
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 0 0 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
