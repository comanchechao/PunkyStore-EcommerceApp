import { defineStore } from "pinia";

export const UserManagement = defineStore("user", {
  state: () => {
    return {
      user: null,
    };
  },

  actions: {
    setUser(user) {
      return (this.user = user);
    },
  },

  getters: {
    getUser() {
      return this.user;
    },
  },
});
