// let addButton = document.querySelector("#addBtn");
// let listContainer = document.querySelector("#list-container")
// let taskList = document.querySelector("#taskList");
// let taskInput = document.querySelector("#taskInput");

// addButton.addEventListener ('click', ()  =>{
//     let task = document.createElement('li');
//     task.style.listStyleType = "none";

//     // Create a span for the text so we can control its spacing
//     let taskText = document.createElement('span');
//     taskText.innerText = taskInput.value;

//     let removeBtn = document.createElement('button');
//     removeBtn.innerHTML = "Remove"
//     removeBtn.className = "remove-btn";

//     let completeBtn = document.createElement("button");
//     completeBtn.innerHTML = "✔";
//     completeBtn.className = "complete-btn";

//     if(taskInput.value === ""){
//         //removeBtn.disabled;
//         alert("Enter task first!");
//     }else{
//         task.innerText = taskInput.value;
//         taskList.append(task);
//         listContainer.append(removeBtn);
//         listContainer.append(completeBtn);
//     }
    
//     removeBtn.addEventListener('click', () => {
//         task.innerHTML = "";
//         removeBtn.remove();
//         completeBtn.remove();
//     });

//     completeBtn.addEventListener('click', () => {
//         task.style.textDecoration = "line-through";
//     });
    
//     document.querySelector("#taskInput").value = "";
// });


let addButton = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList"); 
let taskInput = document.querySelector("#taskInput");

addButton.addEventListener('click', () => {
    let inputValue = taskInput.value.trim();

    if (inputValue === "") {
        alert("Enter task first!");
        return; 
    }

    let task = document.createElement('li');

    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔";
    completeBtn.className = "complete-btn";

    let taskText = document.createElement('span');
    taskText.innerText = inputValue;

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = "Remove";
    removeBtn.className = "remove-btn";

    task.appendChild(completeBtn);
    task.appendChild(taskText);
    task.appendChild(removeBtn);

    taskList.append(task);

    removeBtn.addEventListener('click', () => {
        task.remove(); 
    });

    completeBtn.addEventListener('click', () => {
        taskText.classList.toggle("completed");
    });

    taskInput.value = "";
});

