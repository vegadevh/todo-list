import { Todo, TodoList } from './classes'
import { taskCount, crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => {
    // console.log(todo);
    crearTodoHtml(todo);
});

taskCount();
console.log({ todoList });