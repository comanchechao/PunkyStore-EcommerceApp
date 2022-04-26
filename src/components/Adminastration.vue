<template>
  <div class="">
    <button
      @click="openModal"
      class="bg-mainYellow w-24 h-24 shadow-2xl rounded-xl"
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
              class="inline-block w-full h-full max-w-md my-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="div"
                class="flex flex-row justify-around text-lg font-medium leading-6 text-white"
              >
                <button
                  @click="tab = 'product'"
                  :class="{ 'bg-pink-500 w-1/2': tab === 'product' }"
                  class="w-full bg-mainYellow h-full py-5 transition transform hover:bg-yellow-300 active:ring-2"
                >
                  <h1
                    class="active:scale-125 transition"
                    :class="{ 'scale-150': tab === 'product' }"
                  >
                    کالا
                  </h1>
                </button>
                <button
                  @click="tab = 'category'"
                  :class="{ 'bg-pink-500 w-1/2': tab === 'category' }"
                  class="w-full bg-mainYellow h-full py-5 transition transform hover:bg-yellow-300 active:ring-2"
                >
                  <h1
                    class="active:scale-125 transition"
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
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس اول
                        </label>
                        <input
                          type="file"
                          id="file"
                          aria-label="File browser example"
                          class="inputfile rounded bg-mainPink"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس دوم
                        </label>
                        <input
                          type="file"
                          id="file"
                          aria-label="File browser example"
                          class="inputfile rounded bg-mainPink"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس سوم
                        </label>
                        <input
                          type="file"
                          id="file"
                          aria-label="File browser example"
                          class="inputfile rounded bg-mainPink"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          for="file"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس چهار
                        </label>
                        <input
                          type="file"
                          id="file"
                          aria-label="File browser example"
                          class="inputfile rounded bg-mainPink"
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
                            class="relative w-full bg-gray-200 rounded-md shadow-sm pl-3 pr-10 py-2 text-right cursor-pointer focus:outline-none focus:ring-1 focus:ring-mainPurple focus:border-mainPurple sm:text-sm"
                          >
                            <span
                              class="flex items-center justify-start flex-row-reverse"
                            >
                              <img
                                :src="selected.avatar"
                                alt=""
                                class="flex-shrink-0 h-6 w-6 rounded-full"
                              />
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
                                v-for="person in people"
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
                                    <img
                                      :src="person.avatar"
                                      alt=""
                                      class="flex-shrink-0 h-6 w-6 rounded-full"
                                    />
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
                        v-model="productTitle"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded transition w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-gray-200 focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="email"
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
                    <div class="mb-4">
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

                <form
                  v-show="tab === 'category'"
                  @submit.prevent=""
                  class="font-mainFont h-screen"
                >
                  <div class="flex flex-wrap flex-col justify-center p-5">
                    <div
                      class="bg-Sky-500 flex justify-center rounded p-4 font-bold text-white"
                    >
                      <h1>دسته جدید</h1>
                    </div>
                    <div class="">
                      <input
                        v-model="categoryTitle"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="نام دسته"
                      />
                    </div>

                    <div class="mx-1">
                      <input
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        type="checkbox"
                        value=""
                        checked
                      /><span class="ml-2 text-gray-700">xl</span>
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

const people = [
  {
    id: 1,
    name: "آبی",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "قرمز",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "صورتی",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "زرد",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "بنفش",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "سبز",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "نیلی",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "یاقوتی",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "طلایی",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "سیاه",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const people2 = [
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
    const uploading = ref(false);
    const selected = ref(people[3]);
    const productTitle = ref("");
    const price = ref();
    const description = ref("");
    const sm = ref(false);
    const md = ref(false);
    const lg = ref(false);
    const xl = ref(false);
    const xxl = ref(false);
    const productColor = ref([]);
    const selectedPerson = ref(people[0]);

    function closeModal() {
      isOpen.value = false;
    }
    function openModal() {
      isOpen.value = true;
    }

    return {
      closeModal,
      openModal,
      isOpen,
      tab,
      uploading,
      selected,
      people,
      productTitle,
      price,
      sm,
      md,
      lg,
      xl,
      xxl,
      description,
      selectedPerson,
      people2,
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
