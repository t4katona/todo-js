export class Store {
    constructor(name) {
        this.name = null;
        this.name = name;
    }
    save(task) {
        if (this.name === null) {
            throw new Error("Failed to save task");
        }
        localStorage.setItem(this.name, JSON.stringify(task));
    }
    loadData() {
        if (this.name === null) {
            throw new Error("Failed to load task");
        }
        const item = localStorage.getItem(this.name);
        return JSON.parse(item) || [];
    }
}
