const admin = [
  // url for admin page
  {
    path: "/admin",
    component: () => import("../layouts/admin.vue"),
    children: [
      {
        path: "users",
        name: "admin-users",
        component: () => import("../pages/admin/users/index.vue"),
        meta: { title: "List accounts" },
      },
      {
        path: "products",
        name: "admin-products",
        component: () => import("../pages/admin/products/index.vue"),
        meta: { title: "List Products" },
      },
      {
        path: "settings",
        name: "admin-settings",
        component: () => import("../pages/admin/settings/index.vue"),
        meta: { title: "Setting" },
      },
    ],
  },
];

export default admin;
