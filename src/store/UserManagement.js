import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const UserManagement = defineStore("user", {
  state: () => {
    return {
      user: null,
      admin: false,
    };
  },

  actions: {
    setUser(user) {
      return (this.user = user);
    },
    async isAdmin() {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select()
          .eq("id", this.user.id);

        if (error) throw error;
        if (data[0].admin === true) {
          this.admin = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async resetAdmin() {
      try {
        if(this.admin === true){
          this.admin = false
        }
      } catch (error) {
        consonle.log(error.message)
      }
    },
  },

  getters: {
    getUser() {
      return this.user;
    },
  },
  persist: {
    enabled: true,
  },
});
