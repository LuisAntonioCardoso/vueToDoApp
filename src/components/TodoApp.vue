<template>
  <div class="container">
    <h1 class="title">TODO List</h1>
    <TodoForm />
    <div v-for="todo in store.items" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
  <div class="container">
    <h1 class="title">Stared Tasks</h1>
    <div v-for="todo in store.items" :key="todo.id">
      <TodoItem v-if="store.staredIds.includes(todo.id)" :todo="todo" />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/taskStore";
import TodoItem from "@/components/TodoItem.vue";
import TodoForm from "@/components/TodoForm.vue";
const store = useTaskStore();
</script>

<style>
.container {
  background-color: #7f7e7e;
  padding: 1.5rem;
  border: 2px solid #878787;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 1rem auto;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
