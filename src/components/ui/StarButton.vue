<template>
  <button
    class="star-button toggle-off"
    :class="{ 'toggle-on': props.toggled == true }"
    @click="onClick"
  >
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
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  </button>
</template>

<script setup>
const props = defineProps(["toggled"]);
</script>

<style>
.star-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  color: #2a2828;
  border-radius: 4px;
  border: none;
  margin-left: 0.5rem;
  outline: none;
  box-shadow: none;
  user-select: none;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.toggle-off {
  background-color: rgb(52, 66, 173) 2;
}

.toggle-on {
  background-color: #001df6;
  color: white;
}

.star-button:hover {
  background-color: #45c27f;
  color: white;
}
</style>
