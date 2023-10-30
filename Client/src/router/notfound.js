//url page not found
const notfound = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../pages/NotFound.vue"),
  },
];

export default notfound;
