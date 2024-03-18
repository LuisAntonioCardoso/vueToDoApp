<template>
  <button class="edit-button">
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
      <path d="m15 5 4 4"></path>
    </svg>
  </button>
</template>

<script setup></script>

<style>
.edit-button {
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

.edit-button:hover {
  background-color: #e53935;
  color: white;
}
</style>
