<template>
  <div class="text-center">
    <v-dialog class="w-full" v-model="signUpDialog" width="100%" height="60%">
      <template v-slot:activator="{}">
        <DefaultButton @click="signUpDialog = true" class="text-white">
          <h4 class="text-lg p-4 text-darkPurple rounded-full bg-goldie">
            ایجاد حساب جدید
          </h4>
        </DefaultButton>
      </template>

      <v-card class="p-5 w-full justify-center">
        <div
          id="ball"
          class="ball absolute bg-mainPink rounded-full transform -translate-x-28 -translate-y-28 w-80 h-80"
        ></div>
        <v-card-title class="text-5xl grey lighten-2">
          <div
            class="z-10 flex flex-col align-center w-full justify-center space-y-6 p-4"
          >
            <h3>ایجاد حساب در</h3>
            <h3 class="Punky">پانکی مانکی</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <div class="w-full h-full flex flex-col z-30 justify-center">
            <form @submit.prevent class="flex flex-col justify-center">
              <input
                v-model="signUpEmail"
                class="border-2 border-b placeholder-black text-right text-start text-1xl outline-0 m-5 p-4 px-12"
                type="email"
                placeholder="ایمیل "
              />
              <input
                v-model="signUpPassword"
                class="border-2 border-b placeholder-black text-right text-start text-1xl outline-0 m-5 p-4 px-12"
                type="password"
                placeholder="گذرواژه "
              />
            </form>
          </div>
        </v-card-text>

        <v-card-actions class="flex flex-col space-y-3 my-2">
          <DefaultButton
            v-show="!loading"
            @click="createUser"
            :class="{ disabled: loading === true }"
            class="text-lg p-4 text-darkPurple rounded-full bg-goldie"
          >
            ثبت نام
          </DefaultButton>
          <v-progress-circular
            v-show="loading"
            :size="50"
            color="amber"
            indeterminate
          ></v-progress-circular>
        </v-card-actions>
      </v-card>
      <v-alert
        v-show="signedUp"
        dismissible
        outlined
        shaped
        text
        class="h-20"
        type="success"
      >
        ثبت نام موفقیت آمیز بود رفیق</v-alert
      >
      <v-alert
        v-show="!signedUp"
        dismissible
        outlined
        shaped
        text
        class="h-20"
        type="error"
      >
        یه مشکلی پیش اومده، یبار دیگه امتحان کن</v-alert
      >
    </v-dialog>
  </div>
</template>

<script>
import ForgottenPasswordDialog from "./ForgottenPasswordDialog.vue";
import DefaultButton from "./DefaultButton.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";
import { store } from "../store.js";

export default {
  name: "signUpDialog",
  components: {
    DefaultButton,
  },

  setup() {
    const signUpDialog = ref(false);
    const signUpEmail = ref("");
    const signUpPassword = ref("");
    const loading = ref(false);
    const sessionActive = ref(false);
    const signedUp = ref();

    const createUser = async () => {
      try {
        loading.value = true;
        const { error } = await supabase.auth.signUp({
          email: signUpEmail.value,
          password: signUpPassword.value,
        });
        if (error) throw error;
        alert("check your inbox for conformation");
      } catch (error) {
        alert(error.message);
      } finally {
        signUpDialog.value = false;
        signedUp.value = true;
      }
    };

    return {
      signedUp,
      signUpDialog,
      store,
      signUpEmail,
      signUpPassword,
      loading,
      createUser,
      sessionActive,
    };
  },

  watch: {
    sessionActive() {
      this.$refs.ForgottenPasswordDialog.sessionActivator();
    },
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
