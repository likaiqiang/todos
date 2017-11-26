<template>
    <section class="main">
        <input class="toggle-all" type="checkbox">
        <ul class="todo-list">
            <li v-for="(item,index) in todoList" :key="index" :class="{'editing':item.isEdit,'completed':item.status=='completed'}">
                <div class="view" v-if="!item.isEdit">
                    <input class="toggle" type="checkbox" :value="item.status" :checked="item.status=='completed'?true:false" @change="changeItemStatus(index,$event)">
                    <label @dblclick="changeItemEditStatus(index,true)">{{item.value}}</label>
                    <button class="destroy" @click="deleteTodo(index)"></button>
                </div>
                <input class="edit" v-else :value="item.value" @blur="changeValue(index,$event)">
            </li>
        </ul>
    </section>  
</template>
<script>
import bus from './bus'
export default {
    data(){
        return {
            todoList:bus.todoList
        }
    },
    created(){
        bus.$on('filterStatus',(status)=>{
            if(status=='all'){
                this.todoList = bus.todoList
            }
            else{
                this.todoList = bus.todoList.filter((item,index)=>{
                    return item.status == status
                })
            }
        })
    },
    methods: {
        changeItemEditStatus(index,value){
            bus.$emit('changeEditStatus',{
                index:index,
                value:value
            })
        },
        changeItemStatus(index,e){
            var arr = ['active','completed']
            bus.$emit('changeItemStatus',{
                index:index,
                value:arr[Number(e.target.checked)]
            })
        },
        deleteTodo(index){
            bus.$emit('deleteTodo',index)
        },
        changeValue(index,e){
            this.changeItemEditStatus(index,false)
            bus.$emit('changeValue',{
                index:index,
                value:e.target.value
            })
        }
    }
}
</script>

<style scoped>
</style>
