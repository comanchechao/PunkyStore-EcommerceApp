import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const AdminLines = defineStore("admin", {
  state: () => ({
    catagories: [],
  }),

  actions: {
    async getCatagories() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title");

        if (error) throw error;
        this.catagories = data;
      } catch (error) {
        alert(error.message);
      }
    },
  },
});
