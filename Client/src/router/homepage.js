const homepage = [
  // url for admin page
  {
    path: "/",
    name: "Homepage",
    component: () => import("../pages/users/homepage.vue"),
  },
];

export default homepage;
