export class Todo {

    constructor(tarea){
        this.task = tarea;
        this.id = new Date().getTime();
        this.completed = false;
        this.created = new Date();
    }
}