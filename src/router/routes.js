const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      { path: "/Movie", component: () => import("pages/IndexPage.vue") },
      { path: "/Serie", component: () => import("pages/SerieIndex.vue") },
      { path: "/Game", component: () => import("pages/GameIndex.vue") },
    ],
  },

  // { path: "/Movie", component: () => import("src/pages/Movie.vue") },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
