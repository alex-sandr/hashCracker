<template>
  <v-navigation-drawer v-model="drawer">
    <v-list v-if="$user">
      <v-list-item
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
        :title="$user?.username"
      >
        <template v-slot:append>
          <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
        </template>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list :lines="false" density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        :href="item.href"
      >
        <template v-slot:prepend>
          <v-icon :icon="`fas ${item.icon}`"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  async mounted() {
    if (this.$user) {
      this.user = this.$user;
    }
  },
  props: ["isOpen"],
  watch: {
    isOpen(value) {
      this.drawer = value;
    },
  },
  data: () => ({
    drawer: null,
    user: {},
    selectedItem: 0,
    isAuth: false,
    items: [
      {
        text: "main",
        icon: "fa-user",
        href: "http://127.0.0.1:5173/#/",
      },
      {
        text: "add hash",
        icon: "fa-magnifying-glass",
        href: "http://127.0.0.1:5173/#/hash-add",
      },
      {
        text: "Submit founds",
        icon: "fa-play",
        href: "http://127.0.0.1:5173/#/submit",
      },
    ],
  }),
};
</script>
