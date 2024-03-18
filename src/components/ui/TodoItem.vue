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
      <div v-if="editing">
        <span>{{ props.todo.title }}</span>
      </div>
      <div v-else>
        <span class="title">{{ props.todo.title }}</span>
        <br />
        <span class="description">{{ props.todo.description }}</span>
      </div>
      <div>
        <div v-if="editing">
          <ConfirmButton @click.stop="confirmClick" />
          <DeleteButton @click.stop="deleteClick" />
          <StarButton @click.stop="starClick" />
        </div>
        <div v-else>
          <EditButton @click.stop="editClick" />
          <DeleteButton @click.stop="deleteClick" />
          <StarButton @click.stop="starClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import DeleteButton from "@/components/ui/DeleteButton.vue";
import EditButton from "@/components/ui/EditButton.vue";
import ConfirmButton from "@/components/ui/ConfirmButton.vue";
import StarButton from "@/components/ui/StarButton.vue";

import { useTaskStore } from "@/stores/taskStore";
const store = useTaskStore();

const props = defineProps(["todo"]);
const deleted = ref(false);
const editing = ref(false);

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

const deleteClick = () => {
  store.removeItem(props.todo.id);
  deleted.value = true;
};

const editClick = () => {
  editing.value = !editing.value;
};

const confirmClick = () => {
  editing.value = !editing.value;
};
const starClick = () => {};
</script>

<style>
.todo-item {
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

.title {
  font-size: 24px;
  font-weight: bold;
}

.description {
  font-size: 15px;
  color: white;
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
}

.finished-item .title {
  text-decoration-line: line-through;
}
.finished-item .description {
  text-decoration-line: line-through;
}
</style>
