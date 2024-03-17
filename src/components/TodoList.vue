<template>
  <div class="container">
    <div class="test"></div>
    <label class="form-label">TODO List</label>
    <form>
      <input
        type="text"
        placeholder="example of a task"
        class="todo-input"
        v-model="task"
        @keyup.enter="addTodo"
      />
      <button class="todo-button" @click="addTodo">Add Task</button>
    </form>
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.title }}
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
