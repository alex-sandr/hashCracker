<template>
  <div>
    <v-form @submit.prevent="addHash" class="w-100 pa-16">
      <h1 class="mb-4">😁 submitter</h1>
      <v-alert
        type="error"
        title="ops.... something wrong. try again 😶‍🌫️"
        class="mb-4"
        v-if="isError"
      ></v-alert>
      <v-text-field v-model="hash" :rules="rules" label="hash"></v-text-field>
      <v-text-field
        v-model="cracked"
        :rules="rules"
        label="cracked value"
      ></v-text-field>
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
import { createHashes, updateHash } from "../api/http";

export default {
  data: () => {
    return {
      hash: null,
      cracked: null,
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
      if (this.hash !== null && this.cracked !== null) {
        await updateHash({
          hash: this.hash,
          cracked: this.cracked,
        });
        this.$router.push({ path: "/", query: { alert: "success" } });
      } else {
        this.$router.push({ path: "/submit", query: { alert: "error" } });
      }
    },
  },
};
</script>
