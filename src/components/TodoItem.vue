<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}"><!--we gonna bind the class to a condition; if the task is completed, then we want to add the is-complete class-->
        <p>
            <input type="checkbox" v-on:change="markComplete"><!--v-on: is used to add events! change: because its a checkbox, we can do click, submit etc..-->
            {{todo.title}}
            <!--we want ot be able to delete a todoitem, for that we'd need to traverse the array that we have in App.vue-->
            <button @click="$emit('del-todo', todo.id)" class="del">x</button><!--we can use v-on:click="" instead @click; the id is sent as a payload, so that we can lookup the array for the right todoitem-->
        </p>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ["todo"],
        methods:{
            markComplete(){
                this.todo.completed = !this.todo.completed;
            }

        }
    }
</script>

<style scoped>
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-complete {
        text-decoration: line-through;
    }
    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
    .p{
        color: #b22406;
    }
</style>