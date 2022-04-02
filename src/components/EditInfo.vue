<template>
  <div class="flex flex-col w-full h-full rounded">
    <div
      class="w-full h-24 bg-Sky-400 flex justify-between align-center p-5"
    >
      <DefaultButton class="text-white">
        <v-icon size="x-large">mdi-account</v-icon>
      </DefaultButton>
      <h1 class="text-white text-2xl font-bold">اطلاعات کاربری</h1>
    </div>
    <div class="w-full h-full p-4 background">
      <form @submit.prevent="" class="font-mainFont">
        <div class="">
          <input
            v-model="username"
            class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="نام کاربری"
          />
        </div>
        <div class="">
          <input
            v-model="phone_number"
            class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="شماره همراه"
          />
        </div>
        <div class="">
          <input
            class="bg-gray-200 appearance-none border-2 text-right border-gray-200 rounded w-full my-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="آدرس"
          />
        </div>
        <DefaultButton
          v-show="!loading"
          @click="updateProfile"
          class="px-4 py-2 rounded bg-mainPink text-white"
        >
          تایید
        </DefaultButton>
        <v-progress-circular
          v-show="loading"
          :size="50"
          color="red"
          indeterminate
        ></v-progress-circular>
      </form>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import { store } from "../store";
import { onMounted, ref } from "vue";
import DefaultButton from "./DefaultButton.vue";

export default {
  components: { DefaultButton },
  setup() {
    const user = ref(null);
    const loading = ref(true);
    const username = ref("");
    const full_name = ref("");
    const phone_number = ref("");

    async function getProfile() {
      try {
        loading.value = true;
        user.value = supabase.auth.user();

        let { data, error, status } = await supabase
          .from("profiles")
          .select(`username, full_name, phone_number`)
          .eq("id", user.value.id)
          .single();

        if (error && status !== 406) throw error;

        if (data) {
          username.value = data.username;
          full_name.value = data.full_name;
          phone_number.value = data.phone_number;
        }
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
      }
    }

    async function updateProfile() {
      try {
        loading.value = true;
        user.value = supabase.auth.user();

        const updates = {
          id: user.value.id,
          username: username.value,
          full_name: full_name.value,
          phone_number: phone_number.value,
          updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        });

        if (error) throw error;
      } catch (error) {
        alert(error.message);
      } finally {
        loading.value = false;
        alert('profile updated')
      }
    }

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

    onMounted(() => {
      getProfile();
    });

    return {
      store,
      loading,
      username,
      full_name,
      phone_number,

      updateProfile,
      signOut,
    };
  },
};
</script>

<style scoped>
.background {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-color: #ffffff2a;
}
</style>
