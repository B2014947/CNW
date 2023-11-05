const homepage = [
  // url for admin page
  {
    path: "/",
    name: "Homepage",
    component: () => import("../layouts/homepage.vue"),
    meta: {
      title: "Shineonyou",
    },
  },

  {
    path: "/login-page",
    name: "Login",
    component: () => import("../layouts/login.vue"),
    meta: {
      title: "Shineonyou - Đăng nhập/ Đăng kí",
    },
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../pages/login/index.vue"),
        meta: {
          title: "Shineonyou - Login",
        },
      },

      {
        path: "sign-up",
        name: "signup",
        component: () => import("../pages/sign-up/index.vue"),
        meta: {
          title: "Shineonyou - Sign up",
        },
      },
    ],
  },
];

export default homepage;
