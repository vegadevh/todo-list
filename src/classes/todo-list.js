export class TodoList {
    constructor() {
        this.loadLocalStorage();
    }

    newTodo(todo) {
        this.todos.push(todo);
        this.addLocalStorage();
    }

    deleteTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.addLocalStorage();

    }

    toggleTodo(id) {
        for (const todo of this.todos) {

            if (todo.id == id) {
                todo.completed = !todo.completed;
                this.addLocalStorage();
                break;
            }
        }
    }

    deleteCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.addLocalStorage();
    }

    addLocalStorage() {
        //                     key             value
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        localStorage.getItem('todo') ? this.todos = JSON.parse(localStorage.getItem('todo')) : this.todos = [];
    }
}