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
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </button>
</template>

<script setup></script>

<style>
.confirm-button {
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
  background-color: #399b62;
  color: #2a2828;
  border-radius: 4px;
  border: none;
  margin-left: 0.5rem;
  outline: none;
  box-shadow: none;
  user-select: none;
}

.confirm-button:hover {
  background-color: #e53935;
  color: white;
}
</style>
