<template>
  <div class="p-8 max-w-screen" id="main">
    <div class="pt-6 mt-32 background">
      <div
        class="flex justify-between space-y-4 lg:space-x-7 items-center w-full py-4 px-7 flex-col lg:flex-row lg:h-96 h-62 mt-7"
      >
        <div
          class="flex justify-center w-full self-center h-full lg:w-8/12 lg:h-96"
        >
          <inner-image-zoom
            hideCloseButton="true"
            :src="firstImage"
            class="w-carousel self-center flex justify-center items-center lg:w-2/3 rounded-md shadow-xl"
          />
        </div>
        <div class="lg:w-10/12 w-full h-full">
          <v-carousel
            class="bg-white rounded-md shadow-xl border-2 border-Sky-400"
            cycle
            width="300"
            height="350"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(image, i) in images"
              :key="i"
              :src="image"
              full
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>

      <!-- Product info -->
      <div
        class="max-w-2xl text-right mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 grid-flow-dense lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"
      >
        <div
          class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 bg-Indigo-600 p-5 shadow-2xl"
        >
          <h1
            class="text-4xl text-center lg:text-right font-extrabold tracking-tight text-white sm:text-3xl"
          >
            {{ product.title }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <div
            class="text-3xl p-4 bg-Indigo-500 rounded shadow-xl flex justify-center lg:justify-end space-x-2 font-bold text-gray-600"
          >
            <span class="text-white">تومان</span>
            <span class="text-white">{{ product.price }}</span>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-lg text-darkPurple font-bold">انتخاب رنگ</h3>

              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only">
                  یک رنگ رو انتخاب کنید
                </RadioGroupLabel>
                <div
                  class="flex items-center space-x-3 bg-Indigo-600 p-2 rounded-2xl"
                >
                  <RadioGroupOption
                    as="template"
                    v-for="color in product.colors"
                    :key="color.name"
                    :value="color"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        active && checked
                          ? 'ring ring-yellow-400  ring-offset-1'
                          : '',
                        !active && checked ? 'ring-2 ring-yellow-400' : '',
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
                        class="h-6 w-6 border border-black border-opacity-10 rounded-full"
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
                  class="bg-Indigo-600 p-2 rounded-2xl grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  <RadioGroupOption
                    as="div"
                    v-for="size in product.size"
                    :key="size.id"
                    :value="size"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        size
                          ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                        active && checked
                          ? 'ring-2 ring-yellow-500 text-gray-900'
                          : 'text-gray-500 ring-yellow-500 ',
                        !active && checked ? 'ring-2 ring-Amber-500' : '',
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
            <v-alert
              v-show="addedToCart"
              outlined
              shaped
              text
              absolute
              class="h-20 absolute transform -translate-y-24 w-68 flex right-12 justify-start items-center"
              type="success"
            >
              به سبد خرید اضافه شد</v-alert
            >
            <v-alert
              v-show="faildToAddColor"
              outlined
              shaped
              text
              absolute
              class="h-20 absolute transform -translate-y-24 w-68 flex right-12 justify-start text-white items-center"
              type="error"
              color="red"
            >
              <p class="text-white">رنگ محصول رو انتخاب کنید</p></v-alert
            >
            <v-alert
              v-show="faildToAddSize"
              outlined
              shaped
              text
              absolute
              class="h-20 absolute transform -translate-y-24 w-68 flex right-12 justify-start text-white items-center"
              type="error"
              color="red"
            >
              <p class="text-white">سایز محصول رو انتخاب کنید</p></v-alert
            >
            <DefaultButton
              @click.prevent="addToCart"
              class="mt-10 w-full bg-goldie text-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-xl font-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              اضافه کردن
            </DefaultButton>
          </form>
        </div>

        <div
          class="py-10 px-4 bg-Indigo-800 shadow-2xl lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-2xl font-semibold text-white">
                {{ product.description }}
              </p>
            </div>
          </div>

          <div class="mt-10">
            <div class="mt-4">
              <ul role="list" class="pl-4 text-right text-sm space-y-2">
                <li class="text-gray-600 text-lg font-bold">
                  <span class="text-white">{{ product.features }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <div class="mt-4 space-y-6">
              <p class="text-gray-600 text-md font-bold">
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
import { onMounted, onUpdated, ref, watch } from "vue";
import { StarIcon } from "@heroicons/vue/solid";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import DefaultButton from "../components/DefaultButton.vue";
import { supabase } from "../supabase";

const reviews = { href: "#", average: 4, totalCount: 117 };

import { productManagent } from "../store/productManagment";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";
import { useRoute } from "vue-router";
import { CardManagement } from "../store/cardManagment";
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
    const manageCard = CardManagement();
    const route = useRoute();
    const images = ref([]);
    const firstImage = ref(null);
    const secondImage = ref(null);
    const thirdImage = ref(null);
    const forthImage = ref(null);
    const addedToCart = ref(false);
    const faildToAddColor = ref(false);
    const Product = ref({
      item: null,
      quantity: 1,
      color: null,
      size: null,
    });
    const product = ref({
      name: "تیشرت متالیکایی",
      price: "تومان ۲۰۰۰",
      href: "#",
      breadcrumbs: [
        { id: 1, name: "خرید", href: "/shop" },
        { id: 2, name: "خونه", href: "/" },
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
      console.log(product.value);
      getProduct();
      window.scroll(0, 0);
    });

    onUpdated(() => {
      console.log(route.params.id);
    });

    watch(product, () => {
      Product.value.item = product.value;
      console.log(Product.value);
    });

    watch(selectedColor, () => {
      Product.value.color = selectedColor.value.name;
    });

    watch(selectedSize, () => {
      Product.value.size = selectedSize.value;
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
        getImage2();
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
    const getImage2 = async function () {
      if (product.value.second_image) {
        try {
          const { data, error } = await supabase.storage
            .from("product-images")
            .download(product.value.second_image);
          if (error) throw error;
          secondImage.value = URL.createObjectURL(data);
        } catch (error) {
          alert(error.error_description || error.message);
        } finally {
          images.value.push(secondImage.value);
          getImage3();
        }
      }
    };
    const getImage3 = async function () {
      if (product.value.third_image) {
        try {
          const { data, error } = await supabase.storage
            .from("product-images")
            .download(product.value.third_image);
          if (error) throw error;
          thirdImage.value = URL.createObjectURL(data);
        } catch (error) {
          alert(error.error_description || error.message);
        } finally {
          images.value.push(thirdImage.value);
          getImage4();
        }
      }
    };

    const getImage4 = async function () {
      if (product.value.forth_image) {
        try {
          const { data, error } = await supabase.storage
            .from("product-images")
            .download(product.value.forth_image);
          if (error) throw error;
          forthImage.value = URL.createObjectURL(data);
        } catch (error) {
          alert(error.error_description || error.message);
        } finally {
          images.value.push(forthImage.value);
        }
      }
    };

    const addToCart = function () {
      if (Product.value.color !== null && Product.value.size !== null) {
        manageCard.addToCart(Product.value);
        addedToCart.value = true;
        setTimeout(() => {
          addedToCart.value = false;
        }, 2000);
      } else if (Product.value.color === null) {
        faildToAddColor.value = true;
        setTimeout(() => {
          faildToAddColor.value = false;
        }, 2000);
      } else if (Product.value.size === null) {
        faildToAddSize.value = true;
        setTimeout(() => {
          faildToAddSize.value = false;
        }, 2000);
      }
    };

    return {
      product,
      reviews,
      selectedColor,
      selectedSize,
      firstImage,
      addToCart,
      images,
      addedToCart,
      faildToAddColor,
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
