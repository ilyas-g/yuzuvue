import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () =>
      import("../views/TeamView.vue"),
  },
  {
    path: "/player/:name",
    name: "player",
    component: () =>
      import("../views/PlayerView.vue"),
  },
  {
    path: "/searchplayers",
    name: "searchplayers",
    component: () =>
      import("../views/SearchPlayersView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
