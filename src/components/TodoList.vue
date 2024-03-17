<template>
  <div class="container">
    <label class="form-label">TODO List</label>
    <form>
      <input
        type="text"
        placeholder="example of a task"
        v-model="store.newItem"
        @keyup.enter.prevent="store.addItem"
        class="todo-input"
      />
      <button @click.prevent="store.addItem" class="todo-button">
        Add Task
      </button>
    </form>
    <div v-for="todo in store.items" :key="todo.id" class="todo-item">
      {{ todo.title }}
    </div>
  </div>
  <br />
  <br />
  <br />
  <label for="test"> {{ store.newItem }}</label>
</template>

<script setup>
import { useTaskStore } from "@/stores/taskStore";
const store = useTaskStore();
</script>
