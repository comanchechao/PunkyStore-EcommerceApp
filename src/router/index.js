import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import ShopPage from "../views/ShopPage.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
