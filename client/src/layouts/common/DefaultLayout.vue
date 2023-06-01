<template>
  <v-app id="inspire">
    <heading @toggleMenu="setMenuState" />
    <navigation :isOpen="menuState" />
    <v-main>
      <v-container fluid>
        <template v-for="alert in alerts">
          <notifications class="mb-4" :alertInfo="alert"></notifications>
        </template>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import heading from "../../components/layout/Header.vue";
import navigation from "../../components/layout/Navigation.vue";
import notifications from "../../components/layout/Notifications.vue";

export default {
  components: {
    heading,
    navigation,
    notifications,
  },
  data: () => {
    return {
      alerts: [],
      menuState: true,
    };
  },
  methods: {
    setMenuState(value) {
      this.menuState = value;
    },
  },
  mounted() {
    if (this.$route.query?.alert) {
      switch (this.$route.query?.alert) {
        case "registerSuccess":
          this.alerts.push({
            type: "success",
            text: "Welcome dear user!🥳🥳🥳🥳",
          });
          break;
        case "error":
          this.alerts.push({
            type: "error",
            text: "Ops... Something wrong. Try again.",
          });
          break;
        case "success":
          this.alerts.push({
            type: "success",
            text: "Success!!",
          });
          break;
        default:
          break;
      }
    }
  },
};
</script>
