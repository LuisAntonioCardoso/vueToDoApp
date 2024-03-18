import { defineStore } from "pinia";

export const useTaskStore = defineStore({
  id: "taskList",
  state: () => ({
    newItem: "",
    items: [
      { id: 1, title: "task1", state: "to do" },
      { id: 2, title: "task2", state: "to do" },
      { id: 3, title: "task3", state: "to do" },
      { id: 4, title: "task4", state: "to do" },
      { id: 5, title: "task5", state: "to do" },
    ],
  }),
  actions: {
    addItem() {
      if (this.newItem.trim().length === 0) return;

      this.items.push({
        id: this.items.length + 1,
        title: this.newItem,
        state: "to do",
      });

      this.newItem = "";
    },
    nextItemStep(id) {
      console.log(id);

      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          switch (this.items[i].state) {
            case "to do":
              this.items[i].state = "on going";
              break;
            case "on going":
              this.items[i].state = "finished";
              break;
            default:
          }
          break;
        }
      }
    },
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
