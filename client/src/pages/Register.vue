<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col
        cols="6"
        class="d-flex align-center justify-center position-relative"
      >
        <v-img
          src="https://images.pexels.com/photos/5380611/pexels-photo-5380611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          cover
          class="image"
        ></v-img>
      </v-col>
      <v-col cols="6" class="d-flex align-center justify-center">
        <v-form @submit.prevent="register" class="w-100 pa-16">
          <h1 class="mb-4">🥳 Register page</h1>
          <v-alert
            type="error"
            title="ops.... something wrong. try again 😶‍🌫️"
            class="mb-4"
            v-if="isError"
          ></v-alert>
          <v-text-field
            v-model="username"
            :rules="rules"
            label="username"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="rules"
            label="Password"
          ></v-text-field>
          <v-btn
            type="submit"
            block
            class="mt-2"
            size="large"
            color="deep-purple
"
            >Enter</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { registerUser } from "../api/http";

export default {
  data: () => ({
    username: "",
    password: "",
    isError: false,
    rules: [
      (value) => {
        if (value) return true;
        return "You must enter value";
      },
    ],
  }),
  methods: {
    async register() {
      const response = await registerUser({
        username: this.username,
        password: this.password,
      });
      if (response !== null) {
        this.$cookies.set("accessToken", response.accessToken);
        this.$router.push({ path: "/", query: { alert: "registerSuccess" } });
      } else {
        this.isError = true;
      }
    },
  },
};
</script>
<style>
.image {
  height: 100vh;
}
</style>
