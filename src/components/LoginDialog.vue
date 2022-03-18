<template>
  <div class="text-center">
    <v-dialog class="w-full" v-model="dialog" width="100%" height="75%">
      <template v-slot:activator="{}">
        <DefaultButton @click="dialog = true" class="text-white">
          <v-icon>mdi-login-variant</v-icon>
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
            <h3>ورود به</h3>
            <h3 class="Punky">پانکی</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <div class="w-full h-full flex flex-col justify-center">
            <form class="flex flex-col justify-center" action="">
              <input
                v-model="email"
                class="border-2 border-b placeholder-black text-start text-1xl outline-0 m-5 p-4 px-12"
                type="email"
                placeholder=" ایمیل"
              />
              <input
                v-model="password"
                class="border-2 placeholder-black text-1xl border-b outline-0 m-5 p-4 px-12"
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
            class="text-lg text-black font-bold px-4 rounded-full bg-goldie"
          >
            ورود
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
            class="text-lg text-black font-bold rounded-full bg-goldie"
          >
            ایجاد حساب جدید؟
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
    </v-dialog>
  </div>
</template>

<script>
import SignUpDialogVue from "./SignUpDialog.vue";
import ForgottenPasswordDialog from "./ForgottenPasswordDialog.vue";
import DefaultButton from "./DefaultButton.vue";
import { ref, onMounted, computed } from "vue";
import { supabase } from "../supabase";
import { store } from "../store.js";

export default {
  components: {
    DefaultButton,
    SignUpDialogVue,
    ForgottenPasswordDialog,
  },

  setup() {
    const dialog = ref(false);
    const email = ref("");
    const password = ref("");
    const loadingSignUp = ref(false);
    const loadingLogin = ref(false);
    const user = computed(() => {
      return supabase.auth.user();
    });

    const createUser = async () => {
      try {
        loadingSignUp.value = true;
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        alert("check your inbox for conformation");
      } catch (error) {
        alert(error.message);
      } finally {
        loadingSignUp.value = false;
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
        alert("login successfuly");
        dialog.value = false;
      } catch (error) {
        alert(error.message);
      } finally {
        loadingLogin.value = false;
      }
    };

    return {
      dialog,
      user,
      email,
      password,
      loadingSignUp,
      loadingLogin,
      createUser,
      loginAction,
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
