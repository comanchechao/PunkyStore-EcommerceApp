import { defineStore } from "pinia";

export const orderManagement = defineStore("orders", {
  state: () => ({
    fullName: "",
    phoneNumber: "",
    fullAddress: "",
    emailAddress: "",
    city: "",
    province: "",
  }),

  actions: {
    setInfo(fullName, phoneNumber, fullAddress, emailAddress, city, province) {
      this.fullName = fullName;
      this.phoneNumber = phoneNumber;
      this.fullAddress = fullAddress;
      this.emailAddress = emailAddress;
      this.city = city;
      this.province = province;
    },
  },

  getters: {},

  persist: {
    enabled: true,
  },
});
