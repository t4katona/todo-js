export class Store {
    name = null;
    constructor(name) {
        this.name = name;
    }

    save(task) {
        localStorage.setItem(this.name, JSON.stringify(task));
    }

    loadData() {
        return JSON.parse(localStorage.getItem(this.name)) || [];
    }
}