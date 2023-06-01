<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleMenu()"></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title>HashCracker</v-toolbar-title>
    <template v-slot:append>
      <v-btn
        :color="isAuthenticated ? 'red-darken-4' : 'green-darken-4'"
        @click="authHandle()"
      >
        <v-icon
          icon="fas fa-arrow-right-to-bracket"
          :color="isAuthenticated ? 'red-darken-4' : 'green-darken-4'"
        />
      </v-btn>
      <v-btn @click="toggleTheme()">
        <v-icon :icon="icon" />
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
import { isAuthenticated } from "../../utils/auth";
import { logoutUser } from "../../api/http";

export default {
  data: () => {
    return {
      isAuthenticated: false,
      isMenuActive: true,
      darkMode: true,
      icon: "far fa-sun",
    };
  },
  mounted() {
    this.isAuthenticated = isAuthenticated();
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      this.$emit("toggleMenu", this.isMenuActive);
    },
    async authHandle() {
      if (this.isAuthenticated) {
        await logoutUser();
        this.$router.push("/?alert=success");
      } else {
        this.$router.push("/login");
      }
    },
    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.icon = this.darkMode ? "far fa-sun" : "far fa-moon";
      this.$vuetify.theme.global.name = this.darkMode ? "dark" : "light";
    },
  },
};
</script>
<style scoped></style>
