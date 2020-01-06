<template>
   <div>
       <div v-for="todo in todos" v-bind:key="todo.id">
           <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/> <!--we want to emit again because we want to traverse the array-->
       </div>
   </div>
</template>
cd ..
<script>

    import TodoItem from'./TodoItem';
    export default {
        name: "Todos", //component name!
        components:{
            TodoItem
        },
        props: ["todos"]// this is an array that we have to loop through
    }
</script>
<!--scoped: will apply this style only to the current component -->
<style scoped>

</style>