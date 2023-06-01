<template>
  <AppLayout>
    <router-view></router-view>
  </AppLayout>
</template>

<script>
import AppLayout from "./layouts/AdaptiveLayout.vue";

export default {
  components: { AppLayout },
};
</script>
