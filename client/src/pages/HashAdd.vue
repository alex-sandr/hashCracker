<template>
  <div>
    <v-form @submit.prevent="addHash" class="w-100 pa-16">
      <h1 class="mb-4">😁 Hash adder</h1>
      <v-alert
        type="error"
        title="ops.... something wrong. try again 😶‍🌫️"
        class="mb-4"
        v-if="isError"
      ></v-alert>
      <v-textarea label="Hashes [,]" v-model="area"></v-textarea>
      <v-btn
        type="Add"
        block
        class="mt-2"
        size="large"
        color="deep-purple
"
        >Enter</v-btn
      >
    </v-form>
  </div>
</template>
<script>
import { createHashes } from "../api/http";

export default {
  data: () => {
    return {
      area: null,
      rules: [
        (value) => {
          if (value) return true;
          return "You must enter value";
        },
      ],
    };
  },
  methods: {
    async addHash() {
      if (this.area !== null) {
        const hashes = this.area.split(",");
        await createHashes({
          hashes,
        });
        this.$router.push({ path: "/", query: { alert: "success" } });
      } else {
        this.$router.push({ path: "/hash-add", query: { alert: "error" } });
      }
    },
  },
};
</script>
