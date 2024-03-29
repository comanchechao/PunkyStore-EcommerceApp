import { defineStore } from "pinia";

export const productManagent = defineStore("products", {
  state: () => ({
    cart: [],
    category: "تیشرت",
  }),

  actions: {
    addToCart(product) {
      const productInCart = this.cart.find(
        (item) => item.item.id === product.item.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        this.cart.push(product);
      }
    },
    deleteProduct(product) {
      this.cart = this.cart.filter((item) => {
        console.log(item.item.id);
        return item.item.id !== product.item.id;
      });
    },
    changeCategory(selected) {
      this.category = selected;
    },
  },

  getters: {
    getCart(state) {
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.length;
    },

    cartTotalPrice() {
      let total = 0;

      this.cart.forEach((item) => {
        total += item.item.price * item.quantity;
      });

      return total;
    },
  },
  persist: {
    enabled: true,
  },
});
