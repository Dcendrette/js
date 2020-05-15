
class TodoList {
    constructor() {
        this.toDos = [];
    }

    addToDo() {
        this.toDos.push("Novo Todo");
        console.log(this.toDos);
    }

}

const MinhaLista = new TodoList();

document.getElementById("NovoToDo").onclick = function() {
    MinhaLista.addToDo();
}