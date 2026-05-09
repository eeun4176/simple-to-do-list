let addButton = document.querySelector("#addBtn");
let listContainer = document.querySelector("#list-container")
let taskList = document.querySelector("#taskList");
let taskInput = document.querySelector("#taskInput");

addButton.addEventListener ('click', ()  =>{
    let task = document.createElement('li');
    task.style.listStyleType = "none";

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = "Remove"
    removeBtn.style.width = "70px";
    removeBtn.style.height = "25px";

    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔";
    completeBtn.style.width = "70px";
    completeBtn.style.height = "25px";

    if(taskInput.value === ""){
        removeBtn.disabled;
        alert("Enter task first!");
    }else{
        task.innerText = taskInput.value;
        taskList.append(task);
        listContainer.append(removeBtn);
        listContainer.append(completeBtn);
    }
    
    removeBtn.addEventListener('click', () => {
        task.innerHTML = "";
        removeBtn.remove();
        completeBtn.remove();
    });

    completeBtn.addEventListener('click', () => {
        task.style.textDecoration = "line-through";
    });
    
    document.querySelector("#taskInput").value = "";
});


