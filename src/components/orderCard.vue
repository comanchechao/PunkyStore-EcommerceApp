<template>
  <Disclosure v-slot="{ open }">
    <div
      class="flex flex-row-reverse justify-around w-full h-16 text-gray-900 border-b-2 hover:bg-Sky-100 hover:border-b-4 transition transform p-1 rounded my-1 border-white align-center"
    >
      <DisclosureButton>
        <ChevronDownIcon
          :class="open ? 'transform rotate-180' : ''"
          class="w-5 h-5 transition text-black"
        />
      </DisclosureButton>

      <div
        class="date bg-mainGreen hover:text-gray-50 transition text-black px-4 py-2 rounded flex"
      >
        2022/2/2
      </div>
      <div
        class="w-32 flex-col text-center text-black text-lg font-black align-center justify-center transition ease-in duration-200 w-full py-2 bg-mainGreen rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <h1
          class="self-center align-center transition ease-in duration-200 hover:text-white"
        >
          {{ order.fullname }}
        </h1>
      </div>
      <div class="customerInfo">
        <div
          class="w-32 flex-col text-center text-black text-lg font-black align-center justify-center transition ease-in duration-200 w-full py-2 bg-mainGreen rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <h1
            class="self-center align-center transition ease-in duration-200 hover:text-white"
          >
            {{ order.city }}
          </h1>
        </div>
      </div>

      <div class="orderInfo">
        <div
          class="xs:hidden w-32 flex-col text-center text-black text-lg font-black align-center justify-center transition ease-in duration-200 w-full py-2 bg-mainGreen rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <h1
            class="self-center align-center transition ease-in duration-200 hover:text-white"
          >
            {{ order.phone_number }}
          </h1>
        </div>
      </div>
    </div>
    
    <DisclosurePanel>
     <div class="flex border-b-2 border-Amber-400 justify-center w-full transform transition bg-Sky-100 py-5 h-full">
       <div class="flex w-full justify-around">
         <h2 class="border-b-2  transition">{{ order.email_address}}</h2>
           <h2 class="border-b-2  transition">{{ order.province}}</h2>
             <h2 class="border-b-2  transition">{{ order.full_address}}</h2>
               <h2 class="border-b-2  transition">{{ order.email_address}}</h2>
       </div>
     </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { computed, onMounted, watch } from "vue";
import modal from "../components/Modal.vue";
import DefaultButton from "./DefaultButton.vue";
import RadioGroup from "../components/RadioGroup.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  props: ["display", "order"],
  components: {
    DefaultButton,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup(props) {
    const displayName = computed(() => {
      return props.display;
    });
    const order = computed(() => {
      return props.order;
    });

    onMounted(() => {
      console.log(props.order);
    });

    return { displayName };
  },
};
</script>

<style></style>
