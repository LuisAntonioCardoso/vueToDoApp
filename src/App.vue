<script setup>
import TodoList from "./components/TodoList.vue";
</script>

<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
export default {
  name: "App",
  components: TodoList,
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #eee;
}
</style>
