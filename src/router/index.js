import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import ShopPage from "../views/ShopPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Shop",
    name: "ShopPage",
    component: ShopPage,
  },
  {
    path: "/ProductDetail",
    name: "ProductDetailPage",
    component: ProductDetailPage,
  },
  {
    path: "/CheckoutPage",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
