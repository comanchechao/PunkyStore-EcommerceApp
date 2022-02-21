<template>
       <div
        class="flex flex-wrap p-2 shadow-2xl rounded flex-row h-36 bg-gray-100 items-center justify-between align-center my-1"
      >
        <h2>نام کامل</h2>
        <h2 class="border-b-2 border-mainYellow">2022/21/2</h2>
        <h2 class="border-b-2 border-mainYellow">021 2548987</h2>
        <DefaultButton class="bg-Sky-500 text-lg p-4">رهگیری</DefaultButton>
        <DefaultButton class="bg-mainYellow text-lg p-4"
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