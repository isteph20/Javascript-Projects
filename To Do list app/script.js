const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('tasks-list');

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
    }
    inputbox.value = "";
}