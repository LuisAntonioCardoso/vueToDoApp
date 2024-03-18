<template>
  <div v-if="!deleted">
    <div
      class="todo-item waiting-item"
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
    element.classList.remove("waiting-item");
    element.classList.add("on-going-item");
    store.nextItemStep(todo.id);
  } else if (todo.state == "on going") {
    element.classList.remove("on-going-item");
    element.classList.add("finished-item");
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
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 12px;
  transition: box-shadow 0.2s ease-out;
  margin-top: 10px;
  background: #565555;
}

.todo-item:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-width: 2px;
}

.waiting-item {
  color: #f04242;
  border-color: #f04242;
}

.on-going-item {
  color: #4e88f2;
  border-color: #4e88f2;
}

.finished-item {
  color: #16e81a;
  border-color: #16e81a;
  text-decoration-line: line-through;
}
</style>
