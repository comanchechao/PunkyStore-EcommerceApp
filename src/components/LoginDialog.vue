<template>
  <div class="text-center">
    <v-dialog class="w-full" v-model="dialog" width="50%" height="75%">
      <template v-slot:activator="{}">
        <DefaultButton @click="dialog = true" class="text-white">
          <v-icon>mdi-login</v-icon>
        </DefaultButton>
      </template>

      <v-card class="p-5 w-full justify-center">
        <div
          id="ball"
          class="ball absolute bg-mainPink rounded-full transform -translate-x-28 -translate-y-64 w-80 h-80"
        ></div>
        <v-card-title class="text-5xl grey lighten-2">
          <div
            class="z-10 flex flex-col align-center w-full justify-center space-y-6 p-4"
          >
            <h3>ورود به</h3>
            <h3 class="Punky">پانکی</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <div class="w-full h-full flex flex-col justify-center">
            <form class="flex flex-col justify-center" action="">
              <input
                v-model="email"
                class="border-2 border-b text-gray-900 placeholder-gray-900 text-start text-1xl outline-0 m-5 p-4 px-12"
                type="email"
                placeholder=" ایمیل"
              />
              <input
                v-model="password"
                class="border-2 text-gray-900 placeholder-gray-900 text-1xl border-b outline-0 m-5 p-4 px-12"
                type="password"
                placeholder="گذرواژه "
              />
            </form>
          </div>
        </v-card-text>

        <v-card-actions class="flex flex-col space-y-3 my-2">
          <DefaultButton
            v-show="!loadingLogin"
            @click="loginAction"
            :class="{ disabled: loadingLogin === true }"
            class="text-lg text-black font-bold px-4 rounded-full bg-goldie px-4"
          >
            ورود به حساب
          </DefaultButton>
          <v-progress-circular
            v-show="loadingLogin"
            :size="50"
            color="amber"
            indeterminate
          ></v-progress-circular>
          <DefaultButton
            v-show="!loadingSignUp"
            @click="createUser"
            :class="{ disabled: loadingSignUp === true }"
            class="text-lg text-black font-bold rounded-full bg-goldie px-4"
          >
            ایجاد حساب جدید
          </DefaultButton>
          <v-progress-circular
            v-show="loadingSignUp"
            :size="50"
            color="amber"
            indeterminate
          ></v-progress-circular>
          <ForgottenPasswordDialog ref="ForgottenPasswordDialog" />
        </v-card-actions>
      </v-card>
      <v-alert
        v-show="loggedIn"
        dismissible
        outlined
        shaped
        text
        class="h-20 flex items-center bottom-0 right-0 left-0 justify-center"
        type="success"
        >ورود موفقیت آمیز بود رفیق</v-alert
      >
      <v-alert
        v-show="errorLoggingIn"
        dismissible
        outlined
        shaped
        absolute
        text
        class="h-20 flex items-center bottom-0 right-0 left-0 justify-center"
        type="error"
        >یه مشکلی پیش اومده، یبار دیگه امتحان کن</v-alert
      >
      <v-alert
        v-show="confirmation"
        dismissible
        outlined
        shaped
        absolute
        text
        class="h-20 flex items-center bottom-0 right-0 left-0 justify-center"
        type="info"
        >ایمیلتون رو برای ورود چک کنید</v-alert
      >
    </v-dialog>
  </div>
</template>

<script>
import SignUpDialogVue from "./SignUpDialog.vue";
import { defineAsyncComponent } from "vue";
import DefaultButton from "./DefaultButton.vue";
import { ref, onMounted, computed } from "vue";
import { supabase } from "../supabase";
import { store } from "../store.js";
import { UserManagement } from "../store/UserManagement";

export default {
  components: {
    DefaultButton,
    SignUpDialogVue,
    ForgottenPasswordDialog: defineAsyncComponent(() =>
      import("./ForgottenPasswordDialog.vue")
    ),
  },

  setup() {
    const dialog = ref(false);
    const email = ref("");
    const password = ref("");
    const loadingSignUp = ref(false);
    const loadingLogin = ref(false);
    const loggedIn = ref(false);
    const errorLoggingIn = ref(false);
    const confirmation = ref(false);

    const createUser = async () => {
      try {
        loadingSignUp.value = true;
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loadingSignUp.value = false;
        confirmation.value = true;
        setTimeout(() => {
          dialog.value = false;
        }, 3000);
      }
    };

    const loginAction = async () => {
      try {
        loadingLogin.value = true;
        const { user, session, error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        UserManagement().setUser(user);
        loggedIn.value = true;
        setTimeout(() => {
          dialog.value = false;
        }, 3000);
      } catch (error) {
        errorLoggingIn.value = true;
      } finally {
        loadingLogin.value = false;
        console.log(UserManagement().user);
      }
    };

    return {
      dialog,
      email,
      password,
      loadingSignUp,
      loadingLogin,
      createUser,
      loginAction,
      loggedIn,
      errorLoggingIn,
      confirmation,
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
