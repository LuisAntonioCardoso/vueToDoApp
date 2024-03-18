import { defineStore } from "pinia";

export const useTaskStore = defineStore({
  id: "taskList",
  state: () => ({
    nextId: 6,
    items: [
      {
        id: 1,
        title: "task1",
        description: "ths is one task!",
        state: "to do",
      },
      {
        id: 2,
        title: "task2",
        description: "this is the second",
        state: "to do",
      },
      {
        id: 3,
        title: "task3",
        description: "this is another one",
        state: "to do",
      },
      {
        id: 4,
        title: "task4",
        description: "and then again, one more",
        state: "to do",
      },
      {
        id: 5,
        title: "task5",
        description: "last one, i swear",
        state: "to do",
      },
    ],
  }),
  actions: {
    addItem(title, description) {
      if (title.trim().length === 0) return;
      if (description.trim().length === 0) return;

      this.items.push({
        id: this.nextId++,
        title: title,
        description: description,
        state: "to do",
      });
      return true;
    },
    editItem(id, title, description) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          this.items[i].title = title;
          this.items[i].title = description;
        }
      }
    },
    nextItemStep(id) {
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
