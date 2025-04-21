let inputText = document.getElementById("text-input");

let taskArea = document.getElementById("task-area");
let count = 0;


function enterTask() {
    if (inputText.value !== "" && inputText.value !== " ") {
        let newTask = document.createElement("h2");
        const checkBox = document.createElement("input");
        const lineBreak = document.createElement("br");
        let task = document.createElement("div");
        checkBox.type = "checkbox";
        count++;
        newTask.innerHTML = count + ". " + inputText.value + "   ";
        task.append(newTask, checkBox);
        taskArea.append(task);
        inputText.value = "";
        checkBox.addEventListener("change", function () {
            toggleTaskCompletion(checkBox, newTask);
        });
    }
    else {
        alert("Please input some task!")
    }
}


function toggleTaskCompletion(checkBox, newTask) {
    if (checkBox.checked === true) {
        newTask.style.textDecoration = "line-through";
    } else {
        newTask.style.textDecoration = "none";
    }
}

inputText.onkeydown = function (event) {
    if (event.key == "Enter") {
        enterTask();
    }
}