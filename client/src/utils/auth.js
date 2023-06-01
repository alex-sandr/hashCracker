import vueCookies from "vue-cookies";

export const isAuthenticated = () => !!vueCookies.get("accessToken");
