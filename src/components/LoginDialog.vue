<template>
  <div class="text-center" position="center">
    <v-dialog
      class="w-full self-center"
      position="center"
      v-model="dialog"
      width="100%"
    >
      <template v-slot:activator="{ on, attrs }">
        <DefaultButton
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          @click="dialog = true"
        >
          ورود
        </DefaultButton>
      </template>

      <v-card position="right" class="self-center">
        <div
          class="absolute bg-mainPink rounded-full transform -translate-x-28 -translate-y-28 w-80 h-80"
        ></div>
        <v-card-title class="text-h5 grey lighten-2">
          <div class="z-10 flex w-full justify-center p-4">
            <h3>ورود به پانکی</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <div class="w-full h-full flex flex-col items-end justify-end p-5">
            <form class="flex flex-col" action="">
              <input
                class="border-2 border-b outline-0 m-5 p-4 px-12"
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید ..."
              />
              <input
                class="border-2 border-b outline-0 m-5 p-4 px-12"
                type="password"
                placeholder="رمز خود را وارد کنید"
              />
            </form>
              <v-btn color="#FFCA3A" text> <h1>بازیابی گذرواژه</h1> </v-btn>
            
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#FFCA3A" text @click="dialog = false">
            <h1>ورود</h1>
          </v-btn>
          <v-btn color="#FFCA3A" text @click="dialog = false">
            <h1>ایجاد حساب جدید؟</h1>
          </v-btn>
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
