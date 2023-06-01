import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, fa } from "vuetify/iconsets/fa";
import vueCookies from "vue-cookies";
import { isAuthenticated } from "./utils/auth";
import { getUser } from "./api/http";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (isAuthenticated() && (to.path === "/login" || to.path === "/register")) {
    next("/");
  } else {
    next();
  }
});
const app = createApp(App).use(vueCookies).use(router).use(vuetify);
const getUserData = async () => {
  if (isAuthenticated()) {
    app.config.globalProperties.$user = await getUser();
    app.mount("#app");
  } else {
    app.mount("#app");
  }
};
getUserData();
