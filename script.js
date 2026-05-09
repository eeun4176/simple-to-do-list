let addButton = document.querySelector("#addBtn");

addButton.addEventListener ('click', ()  =>{
    let task = document.createElement('li');
    let taskList = document.querySelector("#taskList");
    let taskInput = document.querySelector("#taskInput");

    task.innerText = taskInput.value;
    
    taskList.append(task);
    
})