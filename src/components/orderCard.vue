<template>
       <div
        class="flex flex-wrap p-2 shadow-2xl rounded flex-row-reverse lg:px-6 h-36 bg-gray-100 items-center justify-between align-center my-1"
      >
        <h2>نام کامل</h2>
        <h2 class="border-b-2 border-mainYellow">2022/21/2</h2>
        <h2 class="text-black border-b-2 border-mainYellow"><v-icon>mdi-check</v-icon></h2>
        <DefaultButton class="text-white bg-Sky-500 text-lg p-4">رهگیری</DefaultButton>
        <DefaultButton class="text-white bg-mainYellow text-lg p-4"
          >جزئیات بیشتر</DefaultButton
        >
      </div>
</template>

<script>
import DefaultButton from './DefaultButton.vue'


export default {

    components:{
        DefaultButton
    }

}
</script>

<style>

</style>