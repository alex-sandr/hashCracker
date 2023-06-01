<template>
  <div>
    <v-alert closable :type="alertInfo.type" :title="alertInfo.text"></v-alert>
  </div>
</template>
<script>
export default {
  props: ["alertInfo"],
};
</script>
