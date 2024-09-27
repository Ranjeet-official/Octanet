const input = document.querySelector("input");
const addButton = document.querySelector(".btn");
const todoContainer = document.querySelector(".todo-container");
const emptyImage = document.querySelector(".empty-image");

function addTask(){
    if (input.value ==='') {
        alert("You Must type Something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        todoContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}

todoContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("todos");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", todoContainer.innerHTML);
}
function showTask(){
    todoContainer.innerHTML = localStorage.getItem("data");
}
showTask();