import { todoList } from "..";
import { Todo } from "../classes";

const listado = document.querySelector('.todo-list');
const input = document.querySelector('.new-todo');
const btnEliminarCompletados = document.querySelector('.clear-completed');

const contador = document.querySelector('strong');

const filters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const taskCount = () => {
    let cuenta = 0;

    for (const todo of listado.children) {
        console.log(todo);
        if (!todo.classList.contains("completed")) {
            cuenta++
        }
    }
    contador.innerText = cuenta;
    console.log(`La cuenta es ${cuenta}`);
}

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
        taskCount();
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
    taskCount();
    console.log({ todoList });
});

btnEliminarCompletados.addEventListener('click', () => {

    todoList.deleteCompleted();
    console.log({ todoList });
    let elementoActual;

    for (let index = listado.children.length - 1; index >= 0; index--) {
        elementoActual = listado.children[index];
        if (elementoActual.classList.value === "completed") {
            listado.removeChild(elementoActual);
        }
    }
    taskCount();
});


filters.addEventListener('click', (event) => {

    const elemento = event.target.text;
    anchorFiltros.forEach(anchor => {
        anchor.classList.remove('selected');
    });

    if (!elemento) {
        return;
    }

    event.target.classList.add('selected');

    //Elementos del listado HTML
    for (const todo of listado.children) {
        todo.classList.remove('hidden');

        switch (elemento) {
            case 'Pendientes':
                if (todo.classList.contains('completed')) {
                    todo.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!todo.classList.contains('completed')) {
                    todo.classList.add('hidden');
                }
                break;
        }
    }
});