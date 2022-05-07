<template>
  <div class="w-72 flex justify-center items-center text-right card">
    <div class="w-full">
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
      <div
        class="card flex flex-col justify-center p-10 bg-white bg-opacity-25 rounded-lg shadow-2xl"
      >
        <div class="prod-img">
          <div class="w-full my-2 h-52 bg-mainBlue object-cover object-center">
            <img :src="firstImage" alt="" />
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
          <div>
            <ul class="flex flex-row justify-center space-x-2 items-center text-center">
              <li
                v-for="color in product.colors"
                :key="color.id"
                class="last:mr-0"
              >
                <span
                  class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <p
                    :class="{
                      'bg-pink-500': color.name === 'صورتی',
                      'bg-blue-500': color.name === 'آبی',
                      'bg-red-500': color.name === 'قرمز',
                      'bg-yellow-500': color.name === 'زرد',
                      'bg-purple-500': color.name === 'بنفش',
                      'bg-green-500': color.name === 'سبز',
                      'bg-purple-700': color.name === 'نیلی',
                      'bg-red-700': color.name === 'یاقوتی',
                      'bg-goldie': color.name === 'طلایی',
                      'bg-black': color.name === 'سیاه',
                      'bg-white': color.name === 'سفید',
                    }"
                    class="block w-6 h-6 rounded-full"
                  ></p>
                </span>
              </li>
            </ul>
          </div>
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
                @click="addToCart"
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
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { productManagent } from "../store/productManagment";
import { onMounted } from "@vue/runtime-core";
import { supabase } from "../supabase";

export default {
  props: ["product"],

  setup(props) {
    const Product = ref({
      item: props.product,
      quantity: 1,
    });
    const firstImage = ref(null);
    const productManagment = productManagent();
    const addedToCart = ref(false);

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
      productManagment.addToCart(Product.value);
      addedToCart.value = true;
      setTimeout(() => {
        addedToCart.value = false;
      }, 2000);
    };

    return { addToCart, addedToCart, firstImage };
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
