<template>
  <div class="w-full h-full justify-center flex flex-col">
    <div
      class="flex flex-col align-center my-5 bg-blue-500 h-full justify-start text-right w-full"
    >
      <div
        class="flex bg-blue-800 shadow-2xl lg:flex-row lg:space-y-0 lg:space-x-9 flex-col justify-center space-y-9 align-center px-4 w-full lg:w-11/12 rounded md:w-1/2 h-full"
      >
        <div>
          <Adminastration />
        </div>

        <modal>
          <template #openButton>
            <button
              @click="openModal"
              class="bg-mainYellow text-white w-48 h-24 lg:w-44 filter drop-shadow-lg rounded-4xl"
            >
              <v-icon class="text-black">mdi-card</v-icon>
              <h2 class="font-extralight text-2xl text-black">انبار کالا</h2>
            </button>
          </template>
          <template #modalTitle> کالا ها </template>

          <template #modalBody>
            <div class="mt-10 flex flex-col w-full h-full">
              <Menu as="div" class="text-right my-2 w-1/2 self-center">
                <div>
                  <MenuButton
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-50 bg-purple-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    دسته ها
                    <ChevronDownIcon
                      :class="open ? 'transform rotate-180' : ''"
                      class="w-5 h-5 text-white transition transform"
                    />
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div
                      v-for="item in categories"
                      :key="item.title"
                      @click="category = item.title"
                      class="px-1 py-1"
                    >
                      <MenuItem v-slot="{ active }">
                        <button
                          class="text-right"
                          :class="[
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900',
                            'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                          ]"
                        >
                          <EditIcon
                            :active="active"
                            class="w-5 text-right h-5 mr-2 text-violet-400"
                            aria-hidden="true"
                          />
                          {{ item.title }}
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <Disclosure
                as="div"
                class="bg-mainGreen w-full lg:w-full self-center"
                v-slot="{ open }"
              >
                <DisclosureButton
                  class="flex justify-center text-center transition w-full px-4 py-2 text-sm font-medium bg-Sky-600 text-white rounded-lg hover:bg-Sky-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                  <span class="self-center">نمایش کالا ها</span>
                  <ChevronDownIcon
                    :class="open ? 'transform rotate-180' : ''"
                    class="w-5 h-5 text-white transition transform"
                  />
                </DisclosureButton>
                <DisclosurePanel
                  class="p-4 align-center justify-center bg-white divide-y-2 text-sm text-black flex flex-col"
                >
                  <div
                    v-for="item in products"
                    :key="item.id"
                    class="w-full flex align-round justify-between h-12"
                  >
                    <div
                      class="flex flex-row justify-between align-center w-full"
                    >
                      <h2>
                        {{ item.title }}
                      </h2>
                      <h2>
                        {{ item.price }}
                      </h2>
                    </div>
                    <div class="flex flex-row justify-center align-center mx-1">
                      <EditModal :item="item" />
                      <button @click="removeProduct(item.id)">
                        <v-icon class="font-bold text-red-800"
                          >mdi-delete</v-icon
                        >
                      </button>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </template>
        </modal>
        <modal>
          <template #openButton>
            <button
              @click="openModal"
              class="bg-mainYellow text-white w-48 h-24 lg:w-44 filter drop-shadow-lg rounded-4xl"
            >
              <v-icon class="text-black">mdi-card</v-icon>
              <h2 class="font-extralight text-lg text-black">پیشنهاد ویژه</h2>
            </button>
          </template>
          <template #modalTitle> کالا ها </template>

          <template #modalBody>
            <div class="mt-10 flex flex-col w-full h-full">
              <Menu as="div" class="text-right my-2 w-1/2 self-center">
                <div>
                  <MenuButton
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-50 bg-purple-600 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    دسته ها
                    <ChevronDownIcon
                      :class="open ? 'transform rotate-180' : ''"
                      class="w-5 h-5 text-white transition transform"
                    />
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div
                      v-for="item in categories"
                      :key="item.title"
                      @click="category = item.title"
                      class="px-1 py-1"
                    >
                      <MenuItem v-slot="{ active }">
                        <button
                          class="text-right"
                          :class="[
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900',
                            'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                          ]"
                        >
                          {{ item.title }}
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
              <Disclosure
                as="div"
                class="bg-mainPink w-full self-center"
                v-slot="{ open }"
              >
                <DisclosureButton
                  class="flex justify-center transition w-full px-4 py-2 text-sm font-medium text-left bg-Sky-600 text-white rounded-lg hover:bg-Sky-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                  <span class="self-center">نمایش کالا ها</span>
                  <ChevronDownIcon
                    :class="open ? 'transform rotate-180' : ''"
                    class="w-5 h-5 text-white transition transform"
                  />
                </DisclosureButton>
                <DisclosurePanel
                  class="p-4 align-center bg-red-500 justify-center divide-y-2 text-sm text-black flex flex-col"
                >
                  <div
                    v-for="item in products"
                    :key="item.id"
                    class="w-full flex align-center justify-between h-12"
                  >
                    <div class="flex flex-row justify-around w-1/2">
                      <h2>
                        {{ item.title }}
                      </h2>
                      <h2>
                        {{ item.price }}
                      </h2>
                    </div>
                    <div class="flex flex-row">
                      <button
                        class="pointer-cursor bg-purple rounded-full justify-center p-1"
                        v-show="item.offer === true"
                        @click="makeSpecialOffer(item)"
                      >
                        <v-icon class="font-bold text-Amber-400"
                          >mdi-star</v-icon
                        >
                      </button>
                      <button
                        class="pointer-cursor bg-purple rounded-full justify-center p-1"
                        v-show="item.offer === false"
                        @click="makeSpecialOffer(item)"
                      >
                        <v-icon class="font-bold text-Amber-400"
                          >mdi-star-outline</v-icon
                        >
                      </button>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </template>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, watch } from "vue";
import { ref } from "vue";
import { supabase } from "../supabase";
import { storeToRefs } from "pinia";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Adminastration: defineAsyncComponent(() =>
      import("../components/Adminastration.vue")
    ),
    Menu,
    MenuButton,
    modal: defineAsyncComponent(() => import("../components/Modal.vue")),
    EditModal: defineAsyncComponent(() =>
      import("../components/editModal.vue")
    ),
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
  setup() {
    const categories = ref([]);
    const products = ref([]);
    const category = ref("");

    onMounted(() => {
      getcategories();
      getProducts();
    });

    watch(category, () => {
      console.log(category);
      getProducts();
    });

    async function getProducts() {
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

    async function removeProduct(id) {
      try {
        console.log(id);
        const { data, error } = await supabase
          .from("products")
          .delete()
          .match({ id: id });
        if (error) throw error;
        console.log(data);
        alert("success");
      } catch (error) {
        console.log("error", error);
      } finally {
        getProducts();
      }
    }

    const makeSpecialOffer = async function (item) {
      if (item.offer === true) {
        try {
          const { data, error } = await supabase
            .from("products")
            .update({
              offer: false,
            })
            .match({ id: item.id });
          if (error) throw error;
          alert("product updated");
        } catch (error) {
          alert(error.error_description || error.message);
        } finally {
          getProducts();
        }
      } else {
        try {
          const { data, error } = await supabase
            .from("products")
            .update({
              offer: true,
            })
            .match({ id: item.id });
          if (error) throw error;
          alert("product updated");
        } catch (error) {
          alert(error.error_description || error.message);
        } finally {
          getProducts();
        }
      }
    };

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
    return { categories, products, category, removeProduct, makeSpecialOffer };
  },
};
</script>

<style></style>
