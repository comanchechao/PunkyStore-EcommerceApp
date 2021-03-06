import {
  createWebHistory,
  createRouter,
  createWebHashHistory,
} from "vue-router";
import Home from "../views/HomePage.vue";
import ShopPage from "../views/ShopPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import AdminPage from "../views/AdminPage.vue";
import AboutUs from "../views/AboutUs.vue";
import { UserManagement } from "../store/UserManagement";

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
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
    beforeEnter(to, from, next) {
      if (UserManagement().admin === true) {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/ProductDetail/:id",
    name: "ProductDetailPage",
    component: ProductDetailPage,
  },
  {
    path: "/CheckoutPage",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
