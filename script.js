let addButton = document.querySelector("#addBtn");
let listContainer = document.querySelector("#list-container")

addButton.addEventListener ('click', ()  =>{
    let taskList = document.querySelector("#taskList");
    let taskInput = document.querySelector("#taskInput");
    let task = document.createElement('li');

    let button = document.createElement('button');
    button.innerHTML = "Remove"
    button.style.width = "70px";
    button.style.height = "25px";
    
    if(taskInput.value === ""){
        button.disabled;
        alert("Enter task first!");
    }else{
        task.innerText = taskInput.value;
        taskList.append(task);
        listContainer.append(button);
    }

    

    
    
    
    
})