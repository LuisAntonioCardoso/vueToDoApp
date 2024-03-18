<template>
  <button class="delete-button">
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
      <path d="M3 6h18"></path>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    </svg>
  </button>
</template>

<script setup></script>

<style>
.delete-button {
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
  background-color: #a9281e;
  color: #2a2828;
  border-radius: 4px;
  border: none;
  margin-left: 0.5rem;
  outline: none;
  box-shadow: none;
  user-select: none;
}

.delete-button:hover {
  background-color: #e53935;
  color: white;
}
</style>
