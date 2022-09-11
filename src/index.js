import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

const tarea = new Todo('Aprender React');
const tarea2 = new Todo('Jugar Minecraft');
todoList.newTodo(tarea)
todoList.newTodo(tarea2)


console.log({ todoList });
crearTodoHtml(tarea);
crearTodoHtml(tarea2);