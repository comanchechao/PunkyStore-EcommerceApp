<template>
  <div class="text-center">
    <v-dialog
      class="w-full"
      position="center"
      v-model="dialog"
      width="100%"
      height="100%"
    >
      <template v-if="!store.user" v-slot:activator="{ on, attrs }">
        <DefaultButton
          v-bind="attrs"
          v-on="on"
          @click="dialog = true"
          class="text-white"
        >
          <v-icon size="large">mdi-login-variant</v-icon>
        </DefaultButton>
      </template>

      <template v-else v-slot:activator="{}">
        <DefaultButton class="text-darkPurple" @click="signOut">
          <v-icon size="large">mdi-login-variant</v-icon>
        </DefaultButton>
      </template>

      <v-card class="">
        <div
          id="ball"
          class="ball absolute bg-mainPink rounded-full transform -translate-x-28 -translate-y-28 w-80 h-80"
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
                v-model="email"
                class="border-2 border-b placeholder-black text-1xl outline-0 m-5 p-4 px-12"
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <input
                v-model="password"
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
            @click="createUser"
            :class="{ disabled: loading === true }"
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
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";
import { store } from "../store";

export default {
  components: {
    DefaultButton,
  },

  setup() {
    const dialog = ref(false);
    const email = ref("");
    const password = ref("");
    const loading = ref(false);

    onMounted(() => {
      supabase.auth.onAuthStateChange(() => {
        store.user = supabase.auth.user();
      });
    });

    const createUser = async () => {
      try {
        loading.value = false;
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        alert("check your inbox for conformation");
      } catch (error) {
        alert(error.message);
      }
    };

    async function signOut() {
      try {
        loading.value = true;
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    return { dialog, store, email, password, loading, createUser, signOut };
  },
  // data() {
  //   return {
  //     dialog: false,
  //     email: "",
  //     password: "",
  //     loading: false,
  //   };
  // },

  // mounted() {},

  // methods: {
  //   async createUser() {
  //     try {
  //       this.loading = true;
  //       const { error } = await supabase.auth.signUp(
  //         {
  //           email: this.email,
  //           password: this.password,
  //         },
  //         {
  //           data: {
  //             username: this.displayName,
  //             email: this.email,
  //           },
  //         }
  //       );
  //       if (error) throw error;
  //       alert("Check your inbox for conformtion");
  //     } catch (error) {
  //       alert(error.error_description || error.message);
  //     } finally {
  //       this.email = "";
  //       this.password = "";
  //       this.dialog = false;
  //       this.loading = false;
  //     }
  //   },
  // },
};
</script>

<style scoped></style>
