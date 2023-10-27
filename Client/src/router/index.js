import { createWebHistory, createRouter } from "vue-router";
import adminPage from "@/layouts/admin.vue";

const routes = [
  {
    path: "/admin",
    component: adminPage,
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("../View/admin/users/index.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../View/notFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
