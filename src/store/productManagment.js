import { defineStore } from "pinia";

export const productManagent = defineStore("products", {
  state: () => ({
    cart: [],
  }),

  actions: {
    addToCart(product) {
      console.log(product.item.id);
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

  removeProduct(state,product) {
     state.cart.filter((item) => {
      return item.item.id !== product.item.id;
    });
  },

  getters: {
    cartItemCount(state) {
      return state.cart.length;
    },

    cartTotalPrice() {
      let total = 0 

      this.cart.forEach((item) => {
        total += item.item.price * item.quantity  
      })

      return total
    },

   
  },
});
