const homepage = [
  // url for admin page
  {
    path: "/",
    name: "Homepage",
    component: () => import("../pages/users/homepage.vue"),
    meta: { title: "Shineonyou" },
  },
];

export default homepage;
