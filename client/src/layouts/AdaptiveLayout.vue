<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>
<script>
import { defineAsyncComponent } from "vue";

const DEFAULT_LAYOUT = "DefaultLayout";
export default {
  computed: {
    layout() {
      const layoutName = this.$route?.meta?.layout || DEFAULT_LAYOUT;
      return defineAsyncComponent(() => import(`./common/${layoutName}.vue`));
    },
  },
};
</script>
