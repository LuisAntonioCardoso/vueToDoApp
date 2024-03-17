<script setup>
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <div>
    <TodoList />
  </div>
</template>

<script>
export default {
  name: "App",
  components: TodoList,
};
</script>

<style scoped></style>
