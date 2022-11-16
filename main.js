const { createApp } = Vue

  createApp({
    data() {
      return {
        newTodo: "",
        todoList:[
            "fare i compiti",
            "fare la spesa"
        ]
      }
    },
    methods: {
        addTodo(){
            this.todoList.push(this.newTodo)
        },
        cancelTodo(i){
            this.todoList.splice(i, 1)
        }
    }
  }).mount('#app')
