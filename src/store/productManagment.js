import { defineStore } from "pinia";

export const productManagent = defineStore("products", {
  state: () => ({
    cart: [],
  }),

  actions: {
    addToCart(product) {
        console.log(product.item.id)
      const productInCart = this.cart.find(
        (item) => item.item.id === product.item.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        this.cart.push(product);
      }
    },
  },
});
