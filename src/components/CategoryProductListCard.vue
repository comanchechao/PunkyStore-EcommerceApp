<template>
  <div
    class="bg-white w-4/5 flex-col h-full lg:h-full my-9 wrapper rounded-lg p-7 flex"
  >
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
    <div class="flex h-full justify-center align-center">
      <img
        v-show="cardImage"
        class="object-contain w-full h-full"
        :src="cardImage"
        alt=""
      />
      <v-progress-circular
        v-show="!cardImage"
        :size="50"
        color="amber"
        position="center"
        indeterminate
      ></v-progress-circular>
    </div>
    <div
      class="w-full h-full flex flex-col text-center align-center justify-center space-y-3 my-4 lg:space-x-9"
    >
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
            v-slot="{ active }"
          >
            <div
              :class="[
                size
                  ? 'bg-gray-200 shadow-sm text-gray-900 cursor-pointer'
                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                active
                  ? 'ring-2 ring-Amber-500 text-gray-900'
                  : 'text-gray-500',
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
      <h1 class="text-black font-bold text-2xl lg:text-3xl prod-title">
        {{ product.title }}
      </h1>
      <h2 class="text-Emerald-600 font-bold text-1xl lg:text-3xl">
        {{ product.price }}
      </h2>
      <router-link to="/shop">
        <DefaultButton class="bg-goldie font-bold text-xl px-4 rounded-full"
          >نشونم بده</DefaultButton
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";
import { ref } from "@vue/reactivity";
import { productManagent } from "../store/productManagment";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { onMounted } from "@vue/runtime-core";
import { supabase } from "../supabase";

export default {
  components: {
    DefaultButton,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  props: ["product"],

  setup(props) {
    const addedToCart = ref(false);
    const Product = ref({
      item: props.product,
      quantity: 1,
    });
    const productManagment = productManagent();

    const cardImage = ref();

    onMounted(() => {
      getImage();
    });

    const getImage = async function () {
      if (props.product.first_image) {
        try {
          const { data, error } = await supabase.storage
            .from("product-images")
            .download(props.product.first_image);
          if (error) throw error;
          cardImage.value = URL.createObjectURL(data);
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

    return { addToCart, addedToCart, cardImage };
  },
};
</script>

<style scoped>
.wrapper {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #f0f0f0;
  border-radius: 10px;
}
</style>
