<template>
  <div class="text-center" position="center">
    <v-dialog
      class="w-full self-center"
      position="center"
      v-model="dialog"
      width="100%"
    >
      <template v-slot:activator="{ on, attrs }">
        <DefaultButton v-bind="attrs" v-on="on" @click="dialog = true">
          ورود
        </DefaultButton>
      </template>

      <v-card position="right" class="self-center">
        <div
          class="absolute bg-mainPink rounded-full transform -translate-x-28 -translate-y-28 w-80 h-80"
        ></div>
        <v-card-title class="text-6xl grey lighten-2">
          <div
            class="z-10 flex flex-col align-center w-full justify-center space-y-6 p-4"
          >
            <h3>ورود به</h3>
            <h3 class="Punky">پانکی</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <div class="w-full h-full flex flex-col items-end justify-end p-5">
            <form class="flex flex-col" action="">
              <input
                class="border-2 border-b placeholder-black text-1xl outline-0 m-5 p-4 px-12"
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <input
                class="border-2 placeholder-black text-1xl border-b outline-0 m-5 p-4 px-12"
                type="password"
                placeholder="رمز خود را وارد کنید"
              />
            </form>
          </div>
        </v-card-text>

        <v-card-actions class="flex flex-col space-y-3 my-2">
          <DefaultButton
            @click="dialog = false"
            class="text-xl text-darkPurple rounded-full bg-goldie"
          >
            ورود
          </DefaultButton>
          <DefaultButton
            @click="dialog = false"
            class="text-xl text-darkPurple rounded-full bg-goldie"
          >
            ایجاد حساب جدید؟
          </DefaultButton>
          <DefaultButton class="text-xl text-darkPurple rounded-full">
            بازیابی گذرواژه
          </DefaultButton>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import DefaultButton from "./DefaultButton.vue";

export default {
  components: {
    DefaultButton,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped></style>
