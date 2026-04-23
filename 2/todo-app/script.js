const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("tasklist");

button.addEventListener("click", function() {
    const taskText =input.value;
    if (taskText==="")return;
    const li =document.createElement("li");
    li.textContent = taskText;
    //supprimer
    li.addEventListener("click", function() {
        li.remove();
    });
    list.appendChild(li);
    input.value="";

});


