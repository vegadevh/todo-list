import { todoList } from "..";
import { Todo } from "../classes";

const listado = document.querySelector('.todo-list');
const input = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {

    const htmlTask = `
    <li class="${(todo.completed) ? 'completed' : ''} " data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completed) ? 'checked' : ''}>
			<label>${todo.task}</label>
            <button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTask;

    listado.append(div.firstElementChild);

    return div.firstElementChild;

}

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && input.value.length != 0) {
        const nuevoTodo = new Todo(input.value)
        todoList.newTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);

        input.value = '';
        console.log({ todoList });
    }
});

//Listado de los las tareas
listado.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;

    const todoId = todoElemento.getAttribute('data-id'); //Se obtine el id

    if (nombreElemento.includes('input')) {
        todoList.toggleTodo(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        todoList.deleteTodo(todoId);
        listado.removeChild(todoElemento);
    }

    console.log({ todoList });
});
