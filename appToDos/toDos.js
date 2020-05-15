
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var toDos = [
    "fazer Café",
    "Estudar Javascript",
    "Acessar Comunidade"
];

function renderTodos() {
    listElement.innerHTML = "";

    for (toDo of toDos) {
        var toDoElement = document.createElement("li");
        var ToDoText = document.createTextNode(toDo);

        var linkElente = document.createElement("a");
        linkElente.setAttribute("href", "#");

        var pos = toDos.indexOf(toDo);
        linkElente.setAttribute("onclick", "deleteToDos(" + pos +")");


        var linkText = document.createTextNode("Excluir");
        linkElente.appendChild(linkText);



        toDoElement.appendChild(ToDoText);
        toDoElement.appendChild(linkElente);

        listElement.appendChild(toDoElement);

    }
}
renderTodos();

function addToDos () {
    var toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}

    buttonElement.onclick = addToDos;

    function deleteToDos(pos) {     
        toDos.splice(pos, 1);
        renderTodos();
        saveToStorage();
    }

    function saveToStorage() { 
        localStorage.setItem("List_Todos", JASON.stringify(toDos));


    }
