import { Task } from "../interfaces/task.interfaces";

export class Store {
  name: string | null = null;
  constructor(name: string) {
    this.name = name;
  }

  save(task: Task[]): void {
    if (this.name === null) {
      throw new Error("Failed to save task");
    }
    localStorage.setItem(this.name, JSON.stringify(task));
  }

  loadData(): Task[] {
    if (this.name === null) {
      throw new Error("Failed to load task");
    }
    const item: string = localStorage.getItem(this.name)!;
    return JSON.parse(item) || [];
  }
}
