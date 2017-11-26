<template>
  <div>
      <header class="header">
          <h1>todos</h1>
          <input class="new-todo" placeholder="What needs to be done?" v-model="value" @keyup.enter="addTodo">
      </header>
  </div>
</template>

<script>
import bus from './bus'

export default {
  data(){
    return {
      value:'',
    }
  },
  methods:{
    addTodo(){
      if(this.value.trim().length){
        bus.$emit('addTodo',this.value)
        this.value = ''
      }
    }
  }
};
</script>

<style scoped>

</style>
