<template>
  <div class="">
    <button
      @click="openModal"
      class="bg-mainYellow w-24 h-24 lg:w-28 lg:w-28 shadow-2xl rounded-xl"
    >
      <v-icon>mdi-card-plus</v-icon>
      <h2>کالا</h2>
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="div">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-full align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full h-full max-w-md my-4 overflow-hidden text-left align-middle transition-all transform bg-purple-100 shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="div"
                class="flex flex-row justify-around text-lg font-medium leading-6"
              >
                <button
                  @click="tab = 'product'"
                  :class="{ 'bg-pink-500 w-1/2': tab === 'product' }"
                  class="w-full bg-mainYellow h-full py-5 transition transform hover:bg-pink-500 hover:text-black active:ring-2"
                >
                  <h1
                    class="active:scale-125 transition hover:scale-125"
                    :class="{ 'scale-150': tab === 'product' }"
                  >
                    کالا
                  </h1>
                </button>
                <button
                  @click="tab = 'category'"
                  :class="{ 'bg-pink-500 w-1/2': tab === 'category' }"
                  class="w-full bg-mainYellow h-full py-5 transition transform hover:bg-pink-500 hover:text-black active:ring-2"
                >
                  <h1
                    class="active:scale-125 text-black transition hover:scale-125"
                    :class="{ 'scale-150': tab === 'category' }"
                  >
                    هوم
                  </h1>
                </button>
              </DialogTitle>
              <div class="">
                <button
                  type="button"
                  class="inline-flex w-full justify-center text-lg font-semibold px-4 py-2 hover:text-white font-medium text-red-600 transition-all bg-red-100 border border-transparent hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  <v-icon>mdi-close </v-icon>
                </button>
              </div>
              <div class="p-2">
                <form
                  v-show="tab === 'product'"
                  @submit.prevent=""
                  class="font-mainFont h-2/3"
                >
                  <div class="flex flex-wrap flex-col justify-center p-5">
                    <div
                      class="bg-Sky-500 flex justify-center rounded p-4 font-bold text-white"
                    >
                      <h1>کالا جدید</h1>
                    </div>
                    <div
                      class="flex flex-row justify-center align-center flex-wrap"
                    >
                      <div class="flex justify-center p-5">
                        <label
                          v-show="!uploading1"
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس اول
                        </label>
                        <v-progress-circular
                          v-show="uploading1"
                          :size="50"
                          color="amber"
                          indeterminate
                        ></v-progress-circular>
                        <input
                          type="file"
                          id="file"
                          class="inputfile rounded bg-mainPink"
                          accept="image/*"
                          @change="firstUpload"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          v-show="!uploading2"
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس دوم
                        </label>
                        <input
                          type="file"
                          id="file2"
                          class="inputfile rounded bg-mainPink"
                          accept="image/*"
                          :value="second_image"
                          @change="secondUpload"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          v-show="!uploading3"
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس سوم
                        </label>
                        <v-progress-circular
                          v-show="uploading3"
                          :size="50"
                          color="amber"
                          indeterminate
                        ></v-progress-circular>
                        <input
                          type="file"
                          id="file3"
                          aria-label="File browser example"
                          class="inputfile rounded bg-mainPink"
                          accept="image/*"
                          @change="uploadImage3"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          v-show="!uploading4"
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس چهار
                        </label>
                        <v-progress-circular
                          v-show="uploading4"
                          :size="50"
                          color="amber"
                          indeterminate
                        ></v-progress-circular>
                        <input
                          type="file"
                          id="file4"
                          class="inputfile rounded bg-mainPink"
                          accept="image/*"
                          @change="uploadImage4"
                        />
                      </div>
                    </div>
                    <div
                      class="mx-1 flex flex-row flex-wrap w-full h-full justify-center align-around z-10"
                    >
                      <div class="m-1">
                        <Switch
                          v-model="sm"
                          :class="sm ? 'bg-Sky-200' : 'bg-gray-300'"
                          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          <span
                            aria-hidden="true"
                            :class="sm ? 'translate-x-9' : 'translate-x-0'"
                            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                          >
                            <span class="">sm</span></span
                          >
                        </Switch>
                      </div>
                      <div class="m-1">
                        <Switch
                          v-model="md"
                          :class="md ? 'bg-Sky-200' : 'bg-gray-300'"
                          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          <span
                            aria-hidden="true"
                            :class="md ? 'translate-x-9' : 'translate-x-0'"
                            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                          >
                            <span class="">md</span></span
                          >
                        </Switch>
                      </div>
                      <div class="m-1">
                        <Switch
                          v-model="lg"
                          :class="lg ? 'bg-Sky-200' : 'bg-gray-300'"
                          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          <span
                            aria-hidden="true"
                            :class="lg ? 'translate-x-9' : 'translate-x-0'"
                            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                          >
                            <span class="">lg</span></span
                          >
                        </Switch>
                      </div>
                      <div class="m-1">
                        <Switch
                          v-model="xl"
                          :class="xl ? 'bg-Sky-200' : 'bg-gray-300'"
                          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          <span
                            aria-hidden="true"
                            :class="xl ? 'translate-x-9' : 'translate-x-0'"
                            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                          >
                            <span class="">xl</span></span
                          >
                        </Switch>
                      </div>
                      <div class="m-1">
                        <Switch
                          v-model="xxl"
                          :class="xxl ? 'bg-Sky-200' : 'bg-gray-300'"
                          class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          <span
                            aria-hidden="true"
                            :class="xxl ? 'translate-x-9' : 'translate-x-0'"
                            class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                          >
                            <span class="">2xl</span></span
                          >
                        </Switch>
                      </div>
                    </div>
                    <div class="mx-1 my-2">
                      <Listbox as="div" v-model="selected">
                        <ListboxLabel
                          class="text-right block text-sm text-xl text-gray-700"
                        >
                          انتخاب رنگ
                        </ListboxLabel>
                        <div class="mt-1 relative text-right">
                          <ListboxButton
                            :class="{
                              'focus:ring-pink-500': selected.name === 'صورتی',
                              'focus:ring-blue-500': selected.name === 'آبی',
                              'focus:ring-red-500': selected.name === 'قرمز',
                              'focus:ring-yellow-500': selected.name === 'زرد',
                              'focus:ring-purple-500': selected.name === 'بنفش',
                              'focus:ring-green-500': selected.name === 'سبز',
                              'focus:ring-purple-700': selected.name === 'نیلی',
                              'focus:ring-red-700': selected.name === 'یاقوتی',
                              'focus:ring-goldie': selected.name === 'طلایی',
                              'focus:ring-black': selected.name === 'سیاه',
                              'focus:ring-white': selected.name === 'سفید',
                            }"
                            class="relative w-full bg-gray-200 rounded-md shadow-sm pl-3 pr-10 py-2 text-right cursor-pointer focus:outline-none focus:ring-1 focus:ring-mainPurple focus:border-mainPurple sm:text-sm"
                          >
                            <span
                              class="flex items-center justify-start flex-row-reverse"
                            >
                              <div
                                :class="{
                                  'bg-pink-500': selected.name === 'صورتی',
                                  'bg-blue-500': selected.name === 'آبی',
                                  'bg-red-500': selected.name === 'قرمز',
                                  'bg-yellow-500': selected.name === 'زرد',
                                  'bg-purple-500': selected.name === 'بنفش',
                                  'bg-green-500': selected.name === 'سبز',
                                  'bg-purple-700': selected.name === 'نیلی',
                                  'bg-red-700': selected.name === 'یاقوتی',
                                  'bg-goldie': selected.name === 'طلایی',
                                  'bg-black': selected.name === 'سیاه',
                                  'bg-white': selected.name === 'سفید',
                                }"
                                alt=""
                                class="flex-shrink-0 h-6 w-6 rounded-full"
                              ></div>
                              <span class="mr-3 block truncate text-right">{{
                                selected.name
                              }}</span>
                            </span>
                            <span
                              class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                            >
                              <SelectorIcon
                                class="h-5 w-5 text-gray-700"
                                aria-hidden="true"
                              />
                            </span>
                          </ListboxButton>

                          <transition
                            leave-active-class="transition ease-in duration-100"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                          >
                            <ListboxOptions
                              class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                            >
                              <ListboxOption
                                as="template"
                                v-for="person in colors"
                                :key="person.id"
                                :value="person"
                                v-slot="{ active, selected }"
                              >
                                <li
                                  :class="[
                                    active
                                      ? 'text-white bg-indigo-600'
                                      : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-3 pr-9',
                                  ]"
                                >
                                  <div class="flex items-center">
                                    <div
                                      :class="{
                                        'bg-pink-500': person.name === 'صورتی',
                                        'bg-blue-500': person.name === 'آبی',
                                        'bg-red-500': person.name === 'قرمز',
                                        'bg-yellow-500': person.name === 'زرد',
                                        'bg-purple-500': person.name === 'بنفش',
                                        'bg-green-500': person.name === 'سبز',
                                        'bg-purple-700': person.name === 'نیلی',
                                        'bg-red-700': person.name === 'یاقوتی',
                                        'bg-goldie': person.name === 'طلایی',
                                        'bg-black': person.name === 'سیاه',
                                        'bg-white': person.name === 'سفید',
                                      }"
                                      alt=""
                                      class="flex-shrink-0 h-6 w-6 rounded-full"
                                    ></div>
                                    <span
                                      :class="[
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'ml-3 block truncate',
                                      ]"
                                    >
                                      {{ person.name }}
                                    </span>
                                  </div>

                                  <span
                                    v-if="selected"
                                    :class="[
                                      active
                                        ? 'text-gray-900'
                                        : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                    ]"
                                  >
                                    <CheckIcon
                                      class="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </li>
                              </ListboxOption>
                            </ListboxOptions>
                          </transition>
                        </div>
                      </Listbox>
                    </div>

                    <div class="">
                      <input
                        v-model="title"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded transition w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-gray-200 focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="نام کالا"
                      />
                    </div>

                    <div class="">
                      <input
                        v-model="price"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded transition w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-gray-200 focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="number"
                        placeholder="قیمت"
                      />
                    </div>

                    <div class="">
                      <textarea
                        v-model="description"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded transition w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-gray-200 focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="جزئیات کالا"
                      />
                    </div>

                    <div
                      class="m-1 flex w-full justify-center space-x-4 align-center"
                    >
                      <Switch
                        v-model="inStock"
                        :class="inStock ? 'bg-Sky-200' : 'bg-gray-300'"
                        class="relative inline-flex align-center flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        <span
                          aria-hidden="true"
                          :class="inStock ? 'translate-x-9' : 'translate-x-0'"
                          class="pointer-events-none align-center justify-center inline-flex h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                        >
                          <span class=""></span
                        ></span>
                      </Switch>
                      <span class="text-xl font-bold">:موجودی</span>
                    </div>
                    <div class="mb-4">
                      <div class="flex justify-center my-2">
                        <DefaultButton
                          @click="addProduct"
                          v-show="!loading"
                          class="px-6 py-4 rounded bg-Sky-500 text-white"
                        >
                          تایید
                        </DefaultButton>
                        <v-progress-circular
                          v-show="loading"
                          :size="50"
                          color="red"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </div>
                  </div>
                </form>

                <form
                  v-show="tab === 'category'"
                  @submit.prevent=""
                  class="font-mainFont h-screen"
                >
                  <div class="flex flex-wrap flex-col justify-center p-5">
                    <div
                      class="bg-Sky-500 flex justify-center rounded p-4 font-bold text-white"
                    >
                      <h1>کتگوری جدید</h1>
                    </div>
                    <div class="">
                      <input
                        v-model="categoryTitle"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded transition w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-gray-200 focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="نام کتگوری"
                      />
                    </div>
                    <div class="flex justify-center p-5">
                      <label
                        v-show="!uploadingCategory"
                        for="file"
                        class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                      >
                        <v-icon>mdi-upload</v-icon>
                        عکس کتگوری
                      </label>
                      <input
                        type="file"
                        id="file"
                        aria-label="File browser example"
                        class="inputfile rounded bg-mainPink"
                        accept="image/*"
                        @change="categoryImageUpload"
                      />
                    </div>

                    <div class="">
                      <div class="flex justify-center my-2">
                        <DefaultButton
                          v-show="!loading"
                          class="px-6 py-4 rounded bg-Sky-500 text-white"
                        >
                          تایید
                        </DefaultButton>
                        <v-progress-circular
                          v-show="loading"
                          :size="50"
                          color="red"
                          indeterminate
                        ></v-progress-circular>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import DefaultButton from "../components/DefaultButton.vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { supabase } from "../supabase";
import {
  TransitionRoot,
  TransitionChild,
  Switch,
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

const colors = [
  {
    id: 1,
    name: "آبی",
  },
  {
    id: 2,
    name: "قرمز",
  },
  {
    id: 3,
    name: "صورتی",
  },
  {
    id: 4,
    name: "زرد",
  },
  {
    id: 5,
    name: "بنفش",
  },
  {
    id: 6,
    name: "سبز",
  },
  {
    id: 7,
    name: "نیلی",
  },
  {
    id: 8,
    name: "یاقوتی",
  },
  {
    id: 9,
    name: "طلایی",
  },
  {
    id: 10,
    name: "سیاه",
  },
  {
    id: 11,
    name: "سفید",
  },
];

const size = [
  { name: "2xl" },
  { name: "xl" },
  { name: "lg" },
  { name: "md" },
  { name: "sm" },
  { name: "xl" },
];

export default {
  components: {
    TransitionRoot,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    DefaultButton,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    Switch,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    const tab = ref("product");
    const isOpen = ref(false);
    const loading = ref(false);
    const uploading1 = ref(false);
    const uploading2 = ref(false);
    const uploading3 = ref(false);
    const uploading4 = ref(false);
    const selected = ref(colors[3]);
    const title = ref("");
    const price = ref();
    const category = ref(null);
    const description = ref("");
    const inStock = ref(false);
    const sm = ref(false);
    const md = ref(false);
    const lg = ref(false);
    const xl = ref(false);
    const xxl = ref(false);
    const productColor = ref([]);
    const selectedColor = ref(colors[0]);
    let first_image = ref(null);
    let second_image = ref(null);
    let third_image = ref(null);
    let forth_image = ref(null);

    function closeModal() {
      isOpen.value = false;
    }
    function openModal() {
      isOpen.value = true;
    }

    const addProduct = async function () {
      try {
        loading.value = true;
        const { error } = await supabase.from("products").insert([
          {
            title: title.value,
            price: price.value,
            inStock: inStock.value,
            "product-category": category.value,
            first_image: first_image.value,
            second_image: second_image.value,
            third_image: third_image.value,
            forth_image: forth_image.value,
          },
        ]);
        if (error) throw error;
        alert("product added");
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        title.value = null;
        price.value = null;
        inStock.value = null;
        loading.value = false;
      }
    };

    const firstUpload = async function (event) {
      console.log(event);
      first_image.value = event.target.files[0];
      // eslint-disable-next-line no-console
      console.log(first_image.value);
      try {
        uploading1.value = true;
        if (!first_image.value || first_image.value.length === 0) {
          throw new Error("You must select an image to upload.");
        }
        // eslint-disable-next-line no-console
        console.log(first_image.value);
        const file = first_image.value;
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        let filePath = `${fileName}`;
        first_image.value = filePath;

        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filePath, file, { returning: "minimal" });

        if (uploadError) throw uploadError;
      } catch (error) {
        alert(error.message);
      } finally {
        // eslint-disable-next-line no-console
        console.log(first_image.value);
        uploading1.value = false;
      }
    };

    const secondUpload = async function (event) {
      second_image.value = event.target.files[0];
      console.log(event.target.files);
      // eslint-disable-next-line no-console
      console.log(second_image.value);
      try {
        uploading2.value = true;
        if (!second_image.value || second_image.value.length === 0) {
          throw new Error("You must select an image to upload.");
        }
        // eslint-disable-next-line no-console
        console.log(second_image.value);
        const file = second_image.value;
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        let filePath = `${fileName}`;
        second_image.value = filePath;

        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filePath, file, { returning: "minimal" });

        if (uploadError) throw uploadError;
      } catch (error) {
        alert(error.message);
      } finally {
        // eslint-disable-next-line no-console
        console.log(second_image.value);
        uploading2.value = false;
      }
    };

    const uploadImage3 = async function (event) {
      third_image.value = event.target.files[0];
      // eslint-disable-next-line no-console
      console.log(this.image);
      try {
        uploading3.value = true;
        if (!third_image.value || third_image.value.length === 0) {
          throw new Error("You must select an image to upload.");
        }
        // eslint-disable-next-line no-console
        console.log(third_image.value);
        const file = third_image.value;
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        let filePath = `${fileName}`;
        filePath = third_image.value;

        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filePath, file);

        if (uploadError) throw uploadError;
      } catch (error) {
        alert(error.message);
      } finally {
        // eslint-disable-next-line no-console
        console.log(third_image.value);
        uploading3.value = false;
      }
    };

    const uploadImage4 = async function (event) {
      forth_image.value = event.target.files[0];
      // eslint-disable-next-line no-console
      console.log(forth_image.value);
      try {
        uploading4.value = true;
        if (!forth_image.value || forth_image.value.length === 0) {
          throw new Error("You must select an image to upload.");
        }
        // eslint-disable-next-line no-console
        console.log(forth_image.value);
        const file = forth_image.value;
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        let filePath = `${fileName}`;
        forth_image.value = filePath;

        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filePath, file);

        if (uploadError) throw uploadError;
      } catch (error) {
        alert(error.message);
      } finally {
        // eslint-disable-next-line no-console
        console.log(forth_image.value);
        uploading4.value = false;
      }
    };

    return {
      closeModal,
      openModal,
      isOpen,
      tab,
      uploading1,
      uploading2,
      uploading3,
      uploading4,
      selected,
      colors,
      title,
      price,
      sm,
      md,
      lg,
      xl,
      xxl,
      inStock,
      description,
      selectedColor,
      size,
      firstUpload,
      secondUpload,
      uploadImage3,
      uploadImage4,
      addProduct,
      loading,
    };
  },
};
</script>

<style scoped>
.inputfile {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.inputLabel {
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease-out;
}
</style>
