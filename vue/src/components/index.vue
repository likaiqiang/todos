<template>
  <div class="todoapp">
      <todo-header></todo-header>
      <todo-list v-if="todoList.length"></todo-list>
      <todo-footer v-if="todoList.length"></todo-footer>
  </div>
</template>

<script>
import todoHeader from "./todoHeader.vue";
import todoList from "./todoList.vue";
import todoFooter from './todoFooter.vue'
import bus from './bus'
export default {
  data(){
    return {
      todoList:bus.todoList,
      value:bus.value
    }
  },
  components: {
    todoHeader,
    todoList,
    todoFooter
  }
};
</script>

<style scoped>

</style>
