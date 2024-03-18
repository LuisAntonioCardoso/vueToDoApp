<template>
  <div v-if="!deleted">
    <div
      class="todo-item"
      @click="
        (event) => {
          taskClick(event.target, props.todo);
        }
      "
    >
      <span>{{ props.todo.title }}</span>
      <DeleteButton @click.stop="close" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import DeleteButton from "@/components/ui/DeleteButton.vue";

import { useTaskStore } from "@/stores/taskStore";
const store = useTaskStore();

const props = defineProps(["todo"]);
const deleted = ref(false);

const taskClick = (element, todo) => {
  if (element.className == "") element = element.parentElement;

  if (todo.state == "to do") {
    console.log(todo);
    element.classList.remove("todo-item");
    element.classList.add("on-going-item");
    store.nextItemStep(todo.id);
  } else if (todo.state == "on going") {
    console.log(todo);
    element.className = "finished-item";
    store.nextItemStep(todo.id);
  }
};

const close = () => {
  store.removeItem(props.todo.id);
  deleted.value = true;
};
</script>

<style>
.todo-item {
  color: #ddd;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid #f04242;
  border-radius: 12px;
  transition: box-shadow 0.2s ease-out;
  margin-top: 10px;
  background: #565555;
}

.todo-item:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-width: 2px;
}

.on-going-item {
  color: #295bb2;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid #295bb2;
  border-radius: 12px;
  transition: box-shadow 0.2s ease-out;
  margin-top: 10px;
  background: #565555;
}

.on-going-item:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-width: 2px;
}

.finished-item {
  text-decoration-line: line-through;
  color: #22bc65;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid #22bc65;
  border-radius: 12px;
  transition: box-shadow 0.2s ease-out;
  margin-top: 10px;
  background: #565555;
}

.finished-item:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-width: 2px;
}
</style>
