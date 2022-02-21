<template>
  <div class="text-center flex w-full justify-center">
    <v-dialog v-model="dialog" width="100%" height="100%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          @click="dialog = true"
          color="amber lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          بازیابی گذرواژه
        </v-btn>
      </template>

      <v-card color="#6A4C93" width="500">
        <v-card-title
          class="text-h5 flex justify-center text-center grey lighten-2"
        >
          <h4>نجات پانکی مانکی</h4>
        </v-card-title>

        <v-card-text>
          <form @submit.prevent="resetPasswordRequest" action="">
            <v-text-field
              v-model="email"
              label="ایمیل خود را جهت بازیابی گذرواژه وارد کنید"
              placeholder=""
              solo
            ></v-text-field>

            <v-text-field
              v-show="token !== ''"
              v-model="password"
              label="New password"
              hint="pick strong password"
              type="password"
              outlined
            ></v-text-field>
          </form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="flex justify-center text-center w-full">
          <v-spacer></v-spacer>
          <DefaultButton @click="resetPasswordRequest"> تایید </DefaultButton>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import DefaultButton from "./DefaultButton.vue";
import { supabase } from "../supabase";

export default {
  props: {},
  data() {
    return {
      dialog: false,
      email: "",
      password: "",
      token: "",
    };
  },

  mounted() {},

  methods: {
    sessionActivator(token) {
      this.dialog = !this.dialog;
      console.log(token)
    },
    async resetPasswordRequest() {
      try {
        const { error } = await supabase.auth.api.resetPasswordForEmail(
          this.email,
          {
            redirectTo: "http://localhost:3000",
          }
        );
        if (error) throw error;
        alert("check your inbox for recovery link");
      } catch (error) {
        alert(error.message);
      }
    },

    async passwordReset() {
      try {
        const { error } = await supabase.auth.api.updateUser(
          this.token.access_token,
          {
            password: this.password,
          }
        );
        if (error) throw error;
        alert("password update successful");
      } catch (error) {
        alert(error.message);
      }
    },
  },
  // setup(props) {
  //   const dialog = ref(false);
  //   const recoveryEmail = ref("");
  //   const password = ref("");
  //   const token = ref(props.token);

  //   const passwordReset = async () => {
  //     try {
  //       const { error } = await supabase.auth.api.updateUser(
  //         token.value.access_token,
  //         {
  //           password: password.value,
  //         }
  //       );
  //       if (error) throw error;
  //       alert("password update successful");
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };

  //   return { dialog, resetPasswordRequest };
  // },
  components: { DefaultButton },
};
</script>
