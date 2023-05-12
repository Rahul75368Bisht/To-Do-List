// Get the required elements
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Function to create a new task
function createTask() {
  const task = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.textContent = input.value;
  task.appendChild(checkbox);
  task.appendChild(label);
  taskList.appendChild(task);
  input.value = "";
}

// Function to handle add button click event
function addButtonClick() {
  if (input.value.trim() !== "") {
    createTask();
  }
}

// Event listener for add button click
addButton.addEventListener("click", addButtonClick);

// Event listener for enter key press in the input field
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addButtonClick();
  }
});
