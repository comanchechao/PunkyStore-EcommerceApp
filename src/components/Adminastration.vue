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
                          multiple
                          class="inputfile rounded bg-mainPink"
                          accept="image/*"
                          @input="uploadImage1"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          v-show="!uploading2"
                          for="file2"
                          class="inputLabel bg-Sky-800 cursor-pointer text-white rounded w-full h-14 flex flex-col justify-center align-center p-2 lg:p-5"
                        >
                          <v-icon>mdi-upload</v-icon>
                          عکس دوم
                        </label>
                        <v-progress-circular
                          v-show="uploading2"
                          :size="50"
                          color="amber"
                          indeterminate
                        ></v-progress-circular>
                        <input
                          type="file"
                          id="file2"
                          class="inputfile rounded bg-mainPink"
                          accept="image/*"
                          @change="uploadImage2"
                        />
                      </div>
                      <div class="flex justify-center p-5">
                        <label
                          v-show="!uploading3"
                          for="file3"
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
                          for="file4"
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
                          class="hidden rounded bg-mainPink"
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
                      <div
                        v-for="color in addedColors"
                        :key="color.id"
                        class="flex w-full justify-between flex-row-reverse bg-purple-200 rounded p-2 my-1"
                      >
                        <div class="flex space-x-2 justify-start">
                          <div
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
                            alt=""
                            class="flex-shrink-0 h-6 w-6 rounded-full"
                          ></div>
                          <span class="mr-3 block truncate text-right">{{
                            color.name
                          }}</span>
                        </div>
                        <button @click="removeColor(color.id)" class="text-red-500">
                          <v-icon>mdi-delete</v-icon>
                        </button>
                      </div>
                      <Listbox as="div" v-model="selectedColor">
                        <ListboxLabel
                          class="text-right block text-sm text-xl text-gray-700"
                        >
                          انتخاب رنگ
                        </ListboxLabel>
                        <div class="mt-1 relative text-right">
                          <ListboxButton
                            :class="{
                              'focus:ring-pink-500':
                                selectedColor.name === 'صورتی',
                              'focus:ring-blue-500':
                                selectedColor.name === 'آبی',
                              'focus:ring-red-500':
                                selectedColor.name === 'قرمز',
                              'focus:ring-yellow-500':
                                selectedColor.name === 'زرد',
                              'focus:ring-purple-500':
                                selectedColor.name === 'بنفش',
                              'focus:ring-green-500':
                                selectedColor.name === 'سبز',
                              'focus:ring-purple-700':
                                selectedColor.name === 'نیلی',
                              'focus:ring-red-700':
                                selectedColor.name === 'یاقوتی',
                              'focus:ring-goldie':
                                selectedColor.name === 'طلایی',
                              'focus:ring-black': selectedColor.name === 'سیاه',
                              'focus:ring-white': selectedColor.name === 'سفید',
                            }"
                            class="relative w-full bg-gray-200 rounded-md shadow-sm pl-3 pr-10 py-2 text-right cursor-pointer focus:outline-none focus:ring-1 focus:ring-mainPurple focus:border-mainPurple sm:text-sm"
                          >
                            <span
                              class="flex items-center justify-start flex-row-reverse"
                            >
                              <div
                                :class="{
                                  'bg-pink-500': selectedColor.name === 'صورتی',
                                  'bg-blue-500': selectedColor.name === 'آبی',
                                  'bg-red-500': selectedColor.name === 'قرمز',
                                  'bg-yellow-500': selectedColor.name === 'زرد',
                                  'bg-purple-500':
                                    selectedColor.name === 'بنفش',
                                  'bg-green-500': selectedColor.name === 'سبز',
                                  'bg-purple-700':
                                    selectedColor.name === 'نیلی',
                                  'bg-red-700': selectedColor.name === 'یاقوتی',
                                  'bg-goldie': selectedColor.name === 'طلایی',
                                  'bg-black': selectedColor.name === 'سیاه',
                                  'bg-white': selectedColor.name === 'سفید',
                                }"
                                alt=""
                                class="flex-shrink-0 h-6 w-6 rounded-full"
                              ></div>
                              <span class="mr-3 block truncate text-right">{{
                                selectedColor.name
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
                                v-for="color in colors"
                                :key="color.id"
                                :value="color"
                                v-slot="{ active, selectedColor }"
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
                                      alt=""
                                      class="flex-shrink-0 h-6 w-6 rounded-full"
                                    ></div>
                                    <span
                                      :class="[
                                        selectedColor
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'ml-3 block truncate',
                                      ]"
                                    >
                                      {{ color.name }}
                                    </span>
                                  </div>

                                  <span
                                    v-if="selectedColor"
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

                    <div class="mx-1 my-2">
                      <Listbox as="div" v-model="selectedCategory">
                        <ListboxLabel
                          class="text-right block text-sm text-xl text-gray-700"
                        >
                          انتخاب کتگوری
                        </ListboxLabel>
                        <div class="mt-1 relative text-right">
                          <ListboxButton
                            class="relative w-full bg-gray-200 rounded-md shadow-sm pl-3 pr-10 py-2 text-right cursor-pointer focus:outline-none focus:ring-1 focus:ring-mainPurple focus:border-mainPurple sm:text-sm"
                          >
                            <span
                              class="flex items-center justify-start flex-row-reverse"
                            >
                              <div
                                alt=""
                                class="flex-shrink-0 h-6 w-6 rounded-full"
                              ></div>
                              <span class="mr-3 block truncate text-right">
                                {{ selectedCategory }}
                              </span>
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
                                v-for="category in categories"
                                :key="category.id"
                                :value="category.title"
                                v-slot="{ active, selectedCategory }"
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
                                      alt=""
                                      class="flex-shrink-0 h-6 w-6 rounded-full"
                                    ></div>
                                    <span
                                      :class="[
                                        selectedCategory
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'ml-3 block truncate',
                                      ]"
                                    >
                                      {{ category.title }}
                                    </span>
                                  </div>

                                  <span
                                    v-if="selectedCategory"
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

                     <div class="">
                      <textarea
                        v-model="features"
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded transition w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-gray-200 focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="نکات مهم"
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
                        class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded transition w-full my-2 py-6 px-4 text-gray-700 leading-tight focus:outline-gray-200 focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="نام کتگوری"
                      />
                    </div>
                    <div class="flex justify-center p-5">
                      <label
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
import { computed, onMounted, ref, watch, watchEffect } from "vue";
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
    const size = ref([]);
    const productColor = ref([]);
    const selectedColor = ref(colors[0]);
    const selectedCategory = ref();
    const categories = ref([]);
    const addedColors = ref([]);
    const features = ref('')

    watch(selectedColor, (newvalue, oldvalue) => {
      addedColors.value.push(newvalue);
      console.log(addedColors.value)
    });

    function removeColor(id){
      addedColors.value = addedColors.value.filter((color) => {
        return color.id !== id
      })
    }

    let first_image = ref(null);
    let second_image = ref(null);
    let third_image = ref(null);
    let forth_image = ref(null);

    onMounted(() => {
      getcategories();
    });

    watch(sm, () => {
      if (size.value.indexOf("sm") === -1) {
        size.value.push("sm");
        console.log(size.value);
      }
      if (sm.value === false) {
        let indexofSm = size.value.indexOf("sm");
        size.value.splice(indexofSm, 1);
      }
    });

    watch(md, () => {
      if (size.value.indexOf("md") === -1) {
        size.value.push("md");
        console.log(size.value);
      }
      if (md.value === false) {
        let indexofMd = size.value.indexOf("md");
        size.value.splice(indexofMd, 1);
      }
    });
    watch(lg, () => {
      if (size.value.indexOf("lg") === -1) {
        size.value.push("lg");
        console.log(size.value);
      }
      if (lg.value === false) {
        let indexofLg = size.value.indexOf("lg");
        size.value.splice(indexofLg, 1);
      }
    });
    watch(xl, () => {
      if (size.value.indexOf("xl") === -1) {
        size.value.push("xl");
      }
      if (xl.value === false) {
        let indexofXl = size.value.indexOf("xl");
        size.value.splice(indexofXl, 1);
      }
    });
    watch(xxl, () => {
      if (size.value.indexOf("2xl") === -1) {
        size.value.push("2xl");
      }
      if (xxl.value === false) {
        let indexofXxl = size.value.indexOf("2xl");
        size.value.splice(indexofXxl, 1);
      }
    });

    function closeModal() {
      isOpen.value = false;
    }
    function openModal() {
      isOpen.value = true;
    }

    async function getcategories() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title");
        // .eq("product-category", props.category.title);

        if (error) throw error;
        categories.value = data;
      } catch (error) {
        alert(error.message);
      }
    }

    const addProduct = async function () {
      try {
        loading.value = true;
        const { error } = await supabase.from("products").insert([
          {
            title: title.value,
            price: price.value,
            inStock: inStock.value,
            "product-category": selectedCategory.value,
            colors: addedColors.value,
            description: description.value,
            first_image: first_image.value,
            second_image: second_image.value,
            third_image: third_image.value,
            forth_image: forth_image.value,
            size: size.value,
            features: features.value
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

    const uploadImage1 = async function (event) {
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

    const uploadImage2 = async function (event) {
      second_image.value = event.target.files[0];
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
        third_image.value = filePath;

        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filePath, file, { returning: "minimal" });

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
      console.log(event);
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
      uploadImage1,
      uploadImage2,
      uploadImage3,
      uploadImage4,
      addProduct,
      loading,
      selectedCategory,
      categories,
      addedColors,
      removeColor,
      features
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
