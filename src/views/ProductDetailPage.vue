<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="p-8 max-w-screen" id="main">
    <div class="pt-6 mt-32 background">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="max-w-2xl mx-auto px-4 flex flex-row-reverse items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li class="">
            <a
              aria-current="page"
              class="font-medium text-4xl text-gray-500 hover:text-gray-600"
            >
              {{ product.title }}
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <a class="mr-2 text-xl font-black text-gray-900"> </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-4 h-5 text-gray-900"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="flex justify-between items-center w-full py-4 px-7 flex-col lg:flex-row h-screen mt-7"
      >
        <inner-image-zoom
          hideCloseButton="true"
          :src="firstImage"
          class="w-carousel bg-gray-800 flex justify-center items-center h-96"
        />
        <v-carousel
          class="bg-mainGreen"
          cycle
          width="200"
          height="400"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
            :src="image.src"
            cover
          ></v-carousel-item>
        </v-carousel>

        <!-- <img
            :src="product.images[0].src"
            :alt="product.images[0].alt"
            class="w-full h-full object-center object-cover"
          /> -->
        <!-- <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="product.images[1].src"
              :alt="product.images[1].alt"
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              :src="product.images[2].src"
              :alt="product.images[2].alt"
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div
          class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
        >
          <img
            :src="product.images[3].src"
            :alt="product.images[3].alt"
            class="w-full h-full object-center object-cover"
          />
        </div> -->
      </div>

      <!-- Product info -->
      <div
        class="max-w-2xl text-right mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ product.title }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <p class="text-4xl font-extrabold text-gray-900">
            {{ product.price }}
          </p>

          <!-- Reviews -->
          <!-- <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    reviews.average > rating
                      ? 'text-gray-900'
                      : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ reviews.average }} از پنج ستاره</p>
              <a
                :href="reviews.href"
                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >{{ reviews.totalCount }} نظرات</a
              >
            </div>
          </div> -->

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-md text-gray-900 font-bold">انتخاب رنگ</h3>

              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only">
                  یک رنگ رو انتخاب کنید
                </RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption
                    as="template"
                    v-for="color in product.colors"
                    :key="color.name"
                    :value="color"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active && checked ? 'ring ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                      ]"
                    >
                      <RadioGroupLabel as="p" class="sr-only">
                        {{ color.name }}
                      </RadioGroupLabel>
                      <span
                        :class="{
                          'bg-pink-500': color.name === 'صورتی',
                          'bg-blue-500': color.name === 'آبی',
                          'bg-red-600': color.name === 'قرمز',
                          'bg-yellow-500': color.name === 'زرد',
                          'bg-purple-500': color.name === 'بنفش',
                          'bg-green-500': color.name === 'سبز',
                          'bg-purple-700': color.name === 'نیلی',
                          'bg-red-700': color.name === 'یاقوتی',
                          'bg-goldie': color.name === 'طلایی',
                          'bg-black': color.name === 'سیاه',
                          'bg-white': color.name === 'سفید',
                        }"
                        aria-hidden="true"
                        class="h-6 w-6 border rounded-full border-black border-opacity-10 rounded-full"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-center">
                <a
                  href="#"
                  class="text-lg font-bold text-darkPurple hover:text-Indigo-500"
                  >انتخاب سایز</a
                >
              </div>

              <RadioGroup v-model="selectedSize" class="mt-4">
                <RadioGroupLabel class="sr-only"> انتخاب کن </RadioGroupLabel>
                <div
                  class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  <RadioGroupOption
                    as="div"
                    v-for="size in product.size"
                    :key="size.id"
                    :value="size"
                    v-slot="{ active }"
                  >
                    <div
                      :class="[
                        size.name
                          ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                        active ? 'ring-2 ring-indigo-500 text-gray-900' : 'text-gray-500',
                        'group relative border text-gray-500 rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                      ]"
                    >
                      <RadioGroupLabel as="p">
                        {{ size }}
                      </RadioGroupLabel>
                     </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <DefaultButton
              @click.prevent="addToCart"
              class="mt-10 w-full bg-goldie text-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-xl font-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              اضافه کردن
            </DefaultButton>
          </form>
        </div>

        <div
          class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-md font-semibold text-gray-900">
                {{ product.description }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-xl font-black text-gray-900">نکات مهم</h3>

            <div class="mt-4">
              <ul role="list" class="pl-4 text-right text-sm space-y-2">
                <li
                  v-for="highlight in product.highlights"
                  :key="highlight"
                  class="text-gray-900 text-md font-bold"
                >
                  <span class="text-gray-900">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-xl font-black text-gray-900">جزییات کالا</h2>

            <div class="mt-4 space-y-6">
              <p class="text-gray-900 text-md font-bold">
                {{ product.details }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="comments my-10 bg-darkPurple p-10 rounded-2xl"
      aria-labelledby="comment"
    >
      <h2 id="comment" class="text-white text-right text-3xl font-black">
        نظرات
      </h2>
      <Disqus />
    </section>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref } from "vue";
import { StarIcon } from "@heroicons/vue/solid";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import DefaultButton from "../components/DefaultButton.vue";
import { supabase } from "../supabase";

const reviews = { href: "#", average: 4, totalCount: 117 };

import { productManagent } from "../store/productManagment";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      // zoomerOptions: {
      //   zoomFactor: 3,
      //   pane: "pane",
      //   hoverDelay: 300,
      //   namespace: "zoomer-bottom",
      //   move_by_click: false,
      //   scroll_items: 4,
      //   choosed_thumb_border_color: "#dd2c00",
      //   scroller_position: "bottom",
      //   zoomer_pane_position: "right",
      // },
      // images: {
      //   thumbs: [
      //     {
      //       id: 1,
      //       url: "http://yoohooworld.com/images/vue-product-zoomer/images/thumbs/1.jpeg",
      //     },
      //     {
      //       id: 2,
      //       url: "http://yoohooworld.com/images/vue-product-zoomer/images/thumbs/2.jpeg",
      //     },
      //   ],
      //   normal_size: [
      //     {
      //       id: 1,
      //       url: "http://yoohooworld.com/images/vue-product-zoomer/images/normal_size/1.jpeg",
      //     },
      //     {
      //       id: 2,
      //       url: "http://yoohooworld.com/images/vue-product-zoomer/images/normal_size/2.jpeg",
      //     },
      //   ],
      //   large_size: [
      //     {
      //       id: 1,
      //       url: "http://yoohooworld.com/images/vue-product-zoomer/images/large_size/1.jpeg",
      //     },
      //     {
      //       id: 2,
      //       url: "http://yoohooworld.com/images/vue-product-zoomer/images/large_size/2.jpeg",
      //     },
      //   ],
      // },
      // images: [
      //   {
      //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      //     alt: "Two each of gray, white, and black shirts laying flat.",
      //   },
      //   {
      //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      //     alt: "Model wearing plain black basic tee.",
      //   },
      //   {
      //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      //     alt: "Model wearing plain gray basic tee.",
      //   },
      //   {
      //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      //     alt: "Model wearing plain white basic tee.",
      //   },
      // ],
    };
  },
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    DefaultButton,
    StarIcon,
    "inner-image-zoom": InnerImageZoom,
  },
  setup() {
    const selectedColor = ref();
    const selectedSize = ref();
    const route = useRoute();
    const firstImage = ref(null);
    const product = ref({
      name: "تیشرت متالیکایی",
      price: "تومان ۲۰۰۰",
      href: "#",
      breadcrumbs: [
        { id: 1, name: "خرید", href: "/shop" },
        { id: 2, name: "خونه", href: "/" },
      ],

      images: [
        {
          src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
          alt: "Two each of gray, white, and black shirts laying flat.",
        },
        {
          src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
          alt: "Model wearing plain black basic tee.",
        },
        {
          src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
          alt: "Model wearing plain gray basic tee.",
        },
        {
          src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
          alt: "Model wearing plain white basic tee.",
        },
      ],
      colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      ],
      sizes: [
        { name: "XXS", inStock: false },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "2XL", inStock: true },
        { name: "3XL", inStock: true },
      ],
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
      highlights: [
        "لورم ایپسوم متن ساختگی با از صنعت چاپ",
        "لورم ایپسوم متن ساختگی صنعت چاپ",
        "ایپسوم متن ساختگی",
        "قابل شستشو",
      ],
      details:
        " نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته   نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آیندحال و آیند",
    });

    onMounted(() => {
      console.log(route.params.id);
      getProduct();
    });

    onUpdated(() => {
      console.log(route.params.id);
    });

    async function getProduct() {
      console.log(product.value);
      try {
        const { data, error } = await supabase
          .from("products")
          .select()
          .eq("id", route.params.id);
        // .eq("product-category", props.category.title);

        if (error) throw error;
        product.value = data[0];
        console.log(product.value);
      } catch (error) {
        alert(error.message);
      } finally {
        getImage();
      }
    }

    const getImage = async function () {
      if (product.value.first_image) {
        try {
          const { data, error } = await supabase.storage
            .from("product-images")
            .download(product.value.first_image);
          if (error) throw error;
          firstImage.value = URL.createObjectURL(data);
        } catch (error) {
          alert(error.error_description || error.message);
        }
      }
    };

    const addToCart = function () {
      productManagent.addToCart(route.params.product);
    };

    return {
      product,
      reviews,
      selectedColor,
      selectedSize,
      firstImage,
      addToCart,
    };
  },
};
</script>

<style scoped>
.background {
  backdrop-filter: blur(9px) saturate(109%);
  -webkit-backdrop-filter: blur(9px) saturate(109%);
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>
