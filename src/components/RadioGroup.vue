<template>
  <div class="w-full px-4 py-16">
    <div class="w-full max-w-md mx-auto">
      <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
        <div class="space-y-2 text-right">
          <RadioGroupOption
            as="template"
            v-for="plan in plans"
            :key="plan.name"
            :value="plan"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-Sky-300 ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white ',
              ]"
              class="relative transition-all flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
            >
              <div class="flex flex-row-reverse items-center justify-between w-full">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium"
                    >
                      <slot name="itemTitle"></slot>
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="div"
                      :class="checked ? 'text-white' : 'text-gray-500'"
                      class=" flex justify-around"
                    >
                      <slot name="itemDetail">
                        <span aria-hidden="true"> &middot; </span>
                      </slot>
                    </RadioGroupDescription>
                  </div>
                </div>
                <div v-show="checked" class="flex-shrink-0 text-white">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#fff"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

const selected = ref(plans[0]);
</script>
