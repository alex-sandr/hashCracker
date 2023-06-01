export default [
  {
    path: "/",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/hash-add",
    component: () => import("./pages/HashAdd.vue"),
  },
  {
    path: "/submit",
    component: () => import("./pages/Submit.vue"),
  },
  {
    path: "/login",
    component: () => import("./pages/Login.vue"),
    meta: {
      layout: "EmptyLayout",
    },
  },
  {
    path: "/register",
    component: () => import("./pages/Register.vue"),
    meta: {
      layout: "EmptyLayout",
    },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("./pages/ErrorPage.vue"),
    meta: {
      layout: "EmptyLayout",
    },
  },
];
