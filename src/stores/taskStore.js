import { defineStore } from "pinia";

export const useTaskStore = defineStore({
  id: "taskList",
  state: () => ({
    newItem: "",
    items: [
      { id: 1, title: "task", state: "to do" },
      { id: 2, title: "task", state: false },
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
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          switch (this.items[i].state) {
            case "to do":
              this.items[i].state = "on going";
              break;
            case "on going":
              this.items[i].state = "finish";
              break;
            default:
          }
          break;
        }
      }
    },
    removeItem(id) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          this.items[i] = false;
          break;
        }
      }
    },
  },
});
