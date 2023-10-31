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
      },
      {
        path: "roles",
        name: "admin-products",
        component: () => import("../pages/admin/products/index.vue"),
      },
      {
        path: "settings",
        name: "admin-settings",
        component: () => import("../pages/admin/settings/index.vue"),
      },
    ],
  },
];

export default admin;
