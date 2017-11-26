<template>
  <footer class="footer">
      <span class="todo-count">
          <strong>{{activeNum}}</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
      </span>
      <ul class="filters">
          <li v-for="(item,index) in selectBtn" :key="index">
              <a href="javascript:;" @click="filterStatus(index,item.value)" :class="{'selected':curIndex==index}">{{item.value}}</a>
          </li>
      </ul>
    </footer>
</template>

<script>
import bus from './bus'
export default {
    data(){
        return {
            todoList:bus.todoList,
            selectBtn:[{
                value:'all',
                isSelect:true
            },{
                value:'active',
                isSelect:false
            },{
                value:'completed',
                isSelect:false
            }],
            curIndex:0
        }
    },
    methods: {
      filterStatus(index,status){
          this.curIndex = index
          bus.$emit('filterStatus',status)
      }  
    },
    computed: {
        activeNum:function(){
            return this.todoList.filter((item,index)=>{
                return item.status == 'active'
            }).length
        }
    }
}
</script>

<style>

</style>
