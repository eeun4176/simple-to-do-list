let addButton = document.querySelector("#addBtn");
let listContainer = document.querySelector("#list-container")
let taskList = document.querySelector("#taskList");
let taskInput = document.querySelector("#taskInput");

addButton.addEventListener ('click', ()  =>{
    let task = document.createElement('li');
    task.style.listStyleType = "none";

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove"
    removeButton.style.width = "70px";
    removeButton.style.height = "25px";

    if(taskInput.value === ""){
        removeButton.disabled;
        alert("Enter task first!");
    }else{
        task.innerText = taskInput.value;
        taskList.append(task);
        listContainer.append(removeButton);
    }
    
    removeButton.addEventListener('click', () => {
        task.innerHTML = "";
        removeButton.remove();
    });
    
    document.querySelector("#taskInput").value = "";
});


