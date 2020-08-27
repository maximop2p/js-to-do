let button = document.getElementById('addToDo')
let container = document.getElementById('toDoContainer')
let input = document.getElementById('inputField')

function add_to(){
    var para = document.createElement('p');
    para.classList.add('paragraph-styling');
    para.innerText = input.value;    
    container.appendChild(para);
    input.value = "";
    para.id = "task";
    para.addEventListener("click", function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener("dblclick", function(){
        container.removeChild(para);
    })
}

function add_on_enter(event) {
	if (event.which === 13) {
        add_to();
    }
} 

button.addEventListener("click", add_to);
input.addEventListener("keypress", add_on_enter);

