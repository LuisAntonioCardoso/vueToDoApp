<template>
  <div class="container">
    <h1 class="title">Cats Facts</h1>
    <form class="form">
      <div>
        <input
          placeholder="Task title"
          v-model="factNumber"
          @keyup.enter.prevent="submit"
          class="input"
          type="text"
        />
      </div>
      <ConfirmButton @click.prevent="submit" />
    </form>
    <div v-for="fact in facts">
      <br />
      <span>{{ fact }}</span>
      <br />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

import { useTaskStore } from "@/stores/taskStore";
const store = useTaskStore();
import ConfirmButton from "@/components/ui/ConfirmButton.vue";

const factNumber = ref(0);
const facts = ref([]);

const cacheBuster = (url) => `${url}?cb=${Date.now()}`;

const submit = async () => {
  facts.value = [];
  let incomingData = [];
  while (factNumber.value > 0) {
    await axios
      .get(cacheBuster("https://cat-fact.herokuapp.com/facts?"))
      .then((data) => (incomingData = data.data));
    for (let i = 0; i < incomingData.length && i < factNumber.value; i++) {
      facts.value.push(incomingData[i].text);
    }
    factNumber.value -= incomingData.length;
  }

  for (let i = 0; i < facts.value.length; i++) {
    store.addItem("it is a fact", facts.value[i]);
  }
  factNumber.value = 0;
};
</script>

<style>
.container {
  background-color: #7f7e7e;
  padding: 1.5rem;
  border: 2px solid #878787;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 1rem auto;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.input {
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  flex-grow: 1;
  margin-right: 0.5rem;
}
</style>
