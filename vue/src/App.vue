<template>
  <div id="app">
    <todo />
  </div>
</template>

<script>
import todo from "./components/index.vue";
var cloneDeep = require('lodash.clonedeep');
window.cloneDeep = cloneDeep
export default {
  name: "app",
  components: {
    todo
  }
};
</script>

<style scoped>

</style>
