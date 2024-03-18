<template>
  <div class="container">
    <h1 class="title">TODO List</h1>
    <form class="todo-form">
      <input
        placeholder="example of a task"
        v-model="store.newItem"
        @keyup.enter.prevent="store.addItem"
        class="todo-input"
        type="text"
      />
      <button @click.prevent="store.addItem" class="todo-button">
        Add Task
      </button>
    </form>
    <div
      v-for="todo in store.items"
      :key="todo.id"
      class="margin-bottom: 0.75rem;"
    >
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/taskStore";
import TodoItem from "@/components/ui/TodoItem.vue";
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
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.todo-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.todo-input {
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  flex-grow: 1;
  margin-right: 0.5rem;
}

.todo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  height: 2rem;
  background-color: #399b62;
  color: #d5cccc;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  margin: 0;
  outline: none;
  box-shadow: none;
  user-select: none;
}

.todo-button:hover {
  background-color: #45c27f;
}
</style>
