<template>
  <div class="w-72 flex justify-center items-center text-right card">
    <div class="w-full">
      <div
        class="card flex flex-col justify-center p-10 bg-white bg-opacity-25 rounded-lg shadow-2xl"
      >
        <div class="prod-img">
          <div
            class="w-full flex justify-center align-center my-2 h-52 object-cover object-center"
          >
            <transition
              appear
              class=""
              tag="div"
              @before-enter="beforeEnter"
              @enter="enter"
            >
              <img v-show="firstImage" :src="firstImage" alt="" />
            </transition>
            <v-progress-circular
              v-show="!firstImage"
              :size="50"
              color="amber"
              position="center"
              indeterminate
            ></v-progress-circular>
          </div>
        </div>
        <div class="prod-title my-2">
          <p class="text-2xl uppercase text-gray-900 font-bold">
            {{ product.title }}
          </p>
          <p class="uppercase text-sm text-gray-400">
            {{ product.description }}
          </p>
        </div>
        <div class="prod-info grid gap-6">
          <div class="flex flex-row w-full justify-center">
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
                      active && checked
                        ? 'ring ring-Amber-500 ring-offset-1'
                        : '',
                      !active && checked ? 'ring-2 ring-Amber-500' : '',
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
          <RadioGroup v-model="selectedSize" class="mt-4">
            <RadioGroupLabel class="sr-only"> انتخاب کن </RadioGroupLabel>
            <div
              class="grid items-center w-red-500 w-full grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
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
                      ? 'bg-gray-200 shadow-sm text-gray-900 cursor-pointer'
                      : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                    active && checked
                      ? 'ring-2 ring-Amber-500 text-gray-900'
                      : 'text-gray-500',
                    !active && checked ? 'ring-2 ring-Amber-500' : '',
                    'group relative transition border space-x-5 text-gray-500 rounded-md py-3 px-4 flex items-center hover:text-white justify-center text-sm font-medium uppercase hover:bg-gray-500 focus:outline-none sm:flex-1 sm:py-6',
                  ]"
                >
                  <RadioGroupLabel as="p" class="bg-transparent">
                    {{ size }}
                  </RadioGroupLabel>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
          <div
            class="flex flex-col md:flex-row justify-between items-center space-y-3 text-gray-900"
          >
            <p class="font-bold text-xl">
              {{ product.price }}
            </p>
            <button
              @click.prevent="addToCart"
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              <v-icon class="hover:text-white">mdi-shopping-outline</v-icon>

              اضافه کردن
            </button>
            <router-link
              :to="{
                name: 'ProductDetailPage',
                params: {
                  id: product.id,
                  productTitle: product.title,
                  product: product,
                },
              }"
            >
              <button
                class="px-6 py-2 transition ease-in duration-200 btn uppercase rounded-full border-2 hover:border-gray-900 focus:outline-none"
              >
                <v-icon class=" ">mdi-card-account-details </v-icon>

                بیشتر نشونم بده
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <v-alert
      v-show="addedToCart"
      outlined
      shaped
      text
      absolute
      class="h-20 w-72 flex justify-start items-center right-0"
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
      class="h-20 w-72 flex justify-start text-white items-center right-0"
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
      class="h-20 w-72 flex justify-start text-white items-center right-0"
      type="error"
      color="red"
    >
      <p class="text-white">سایز محصول رو انتخاب کنید</p></v-alert
    >
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { productManagent } from "../store/productManagment";
import { computed, onMounted, watch } from "@vue/runtime-core";
import { supabase } from "../supabase";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import gsap from "gsap";
import { CardManagement } from "../store/cardManagment";

export default {
  props: ["product"],

  components: { RadioGroup, RadioGroupLabel, RadioGroupOption },

  setup(props) {
    const Product = ref({
      item: props.product,
      quantity: 1,
      color: null,
      size: null,
    });

    const product = computed(() => {
      return Product.value;
    });
    const firstImage = ref(null);
    const productManagment = productManagent();
    const manageCard = CardManagement();
    const addedToCart = ref(false);
    const faildToAddColor = ref(false);
    const faildToAddSize = ref(false);
    const selectedColor = ref();
    const selectedSize = ref();

    watch(selectedColor, () => {
      Product.value.color = selectedColor.value.name;
      console.log(product.value);
    });

    watch(selectedSize, () => {
      Product.value.size = selectedSize.value;
      console.log(selectedSize.value);
    });

    onMounted(() => {
      setTimeout(() => {
        getImage();
      }, 2000);
    });

    const getImage = async function () {
      if (props.product.first_image) {
        try {
          const { data, error } = await supabase.storage
            .from("product-images")
            .download(props.product.first_image);
          if (error) throw error;
          firstImage.value = URL.createObjectURL(data);
        } catch (error) {
          alert(error.error_description || error.message);
        }
      }
    };

    const addToCart = function () {
      if (Product.value.color !== null && Product.value.size !== null) {
        manageCard.addToCart(product.value);
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

    const beforeEnter = (el) => {
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        duration: 0.2,
        onComplete: done,
      });
    };

    return {
      addToCart,
      addedToCart,
      faildToAddColor,
      faildToAddSize,
      firstImage,
      selectedColor,
      selectedSize,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style scoped>
/* .card:hover {
  transition: ease-in 0.5s;
  transform: scale(1.005);
  background: linear-gradient(
    rgba(143, 143, 143, 0.452),
    rgba(165, 165, 165, 0.438)
  );
  filter: drop-shadow(2);
} */
.btn {
  color: black;
  border: 2px solid black;
  filter: drop-shadow(1.5);
}
.btn:hover {
  background: black;
  color: white;

  filter: drop-shadow(1.5);
}
.cardBackground {
  backdrop-filter: saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(207, 207, 207, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
