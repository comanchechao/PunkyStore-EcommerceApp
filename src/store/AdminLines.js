import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const AdminLines = defineStore("admin", {
  state: () => ({
    categories: [],
  }),

  actions: {
    async getcategories() {
      try {
        const { data, error } = await supabase
          .from("product-category")
          .select("title");

        if (error) throw error;
        this.categories = data;
      } catch (error) {
        alert(error.message);
      }
    },
  },
});
