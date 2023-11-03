import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin";
import homepage from "./homepage";
import notfound from "./notfound";
const routes = [...admin, ...homepage, ...notfound];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? "Default Title";
  next();
});
export default router;
