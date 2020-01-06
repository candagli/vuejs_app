<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> we are passing in a message property-->
    <!--{{msg}}-->
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
  <!-- we are not allowed to add another components-->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue' // importing the hello world component!
import Todos from './components/Todos.vue'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'
export default {
  name: 'app',
  components: {
    //HelloWorld // we need this to use the imported component!
    Todos,
    Header,
    AddTodo
  },
  data(){// a function that returns an object
    return{
      //msg: "hello!"
      todos: [
        {
          id: 1,
          title: "todoOne",
          completed: false
        },
        {
          id: 2,
          title: "todoTwo",
          completed: false
        },
        {
          id: 3,
          title: "todoThree",
          completed: false
        }
      ]
    }
  },
  methods:{
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodo(newTodo){
      this.todos = [...this.todos, newTodo]; // ... means it coppies whatever there is in the array again
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
