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
      <div class="todo-item">
        <span class="text-decoration: line-through;">{{ todo.title }}</span>
        <button class="delete-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white"
            data-darkreader-inline-stroke=""
            style="--darkreader-inline-stroke: currentColor"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/taskStore";
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

.todo-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.todo-item {
  color: #ddd;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-out;
  margin-top: 10px;
  background: #565555;
}

.todo-item:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.delete-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  height: 3rem;
  background-color: #a9281e;
  color: #2a2828;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  margin: 0;
  outline: none;
  box-shadow: none;
  user-select: none;
}

.delete-button:hover {
  background-color: #e53935;
}

.delete-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
