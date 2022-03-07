<template>
  <div class="w-72 flex justify-center items-center text-right">
    <div class="w-full">
      <div
        class="card flex flex-col justify-center p-10 bg-white bg-opacity-25 rounded-lg shadow-2xl"
      >
        <div class="prod-img">
          <div
            class="w-full my-2 h-52 bg-mainBlue object-cover object-center"
          ></div>
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
            <ul class="flex flex-row justify-center items-center text-center">
              <li class="last:mr-0">
                <span
                  class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a
                    href="#blue"
                    class="block w-6 h-6 bg-blue-900 rounded-full"
                  >
                  </a>
                </span>
              </li>
              <li class="last:mr-0">
                <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a
                    href="#yellow"
                    class="block w-6 h-6 bg-yellow-500 rounded-full"
                  >
                  </a>
                </span>
              </li>
              <li class="last:mr-0">
                <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full">
                  </a>
                </span>
              </li>
              <li class="last:mr-0">
                <span
                  class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300"
                >
                  <a
                    href="#green"
                    class="block w-6 h-6 bg-green-500 rounded-full"
                  >
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col md:flex-row justify-between items-center text-gray-900"
          >
            <p class="font-bold text-xl">
              {{ product.price }}
            </p>
            <button
              class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              <v-icon class="hover:text-white">mdi-shopping-outline</v-icon>

              اضافه کردن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>
.cardBackground {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(207, 207, 207, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
