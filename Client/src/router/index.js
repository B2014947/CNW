import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin";
import homepage from "./homepage";
import notfound from "./notfound";
const routes = [...admin, ...homepage, ...notfound];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
