<template>
  <form class="todo-form">
    <div>
      <input
        placeholder="Task title"
        v-model="newTodoTitle"
        @keyup.enter.prevent="submit"
        class="title-input"
        type="text"
      />
      <input
        placeholder="task description"
        v-model="newTodoDescription"
        @keyup.enter.prevent="submit"
        class="description-input"
        type="text"
      />
    </div>
    <ConfirmButton @click.prevent="submit" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import ConfirmButton from "@/components/ui/ConfirmButton.vue";
const store = useTaskStore();

const newTodoTitle = ref("");
const newTodoDescription = ref("");

const submit = () => {
  if (!store.addItem(newTodoTitle.value, newTodoDescription.value))
    alert("please fill both the title and the description");
  else {
    newTodoTitle.value = "";
    newTodoDescription.value = "";
  }
};
</script>

<style>
.todo-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.title-input {
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  flex-grow: 1;
  margin-right: 0.5rem;
}
.description-input {
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  flex-grow: 1;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
</style>
