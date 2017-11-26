import Vue from 'vue'
export default new Vue({
    data(){
        return {
            todoList:[],
            todoListCache:[],
            value:''
        }
    },
    created(){
        this.$on('addTodo',(value)=>{
            if(value!=undefined){
                this.todoList.push({
                    value:value,
                    status:'active',
                    isEdit:false
                })
            }
        })
        this.$on('deleteTodo',(index)=>{
            this.todoList.splice(index,1)
        })
        this.$on('changeValue',({index,value})=>{
            this.todoList[index].value = value
        })
        this.$on('changeEditStatus',({index,value})=>{
            this.todoList[index].isEdit = value
        })
        this.$on('changeItemStatus',({index,value})=>{
            this.todoList[index].status = value
        })
    },
    watch:{
        todoList:function(val){
            console.log(val)
        }
    }
})
