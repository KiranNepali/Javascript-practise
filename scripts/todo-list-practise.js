// create array to store todos
// on clock Add button get text from input
// Add to arrray
// remove the value when add is clicked

const toDoList = ["make dish", "watch movie"];
renderTodoList();

function renderTodoList() {
  let toDoListHTML = "";
  for (i = 0; i < toDoList.length; i++) {
    const toDo = toDoList[i];
    const html = `<p>${toDo}</p>`;
    toDoListHTML += html;
  }
  console.log(toDoListHTML);

  document.querySelector(".js-todo-list").innerHTML = toDoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-input");

  //get the inpu value
  const name = inputElement.value;
  console.log(name);

  // add input to arrya using push
  toDoList.push(name);
  console.log(toDoList);

  //remove input value when clicked
  inputElement.value = "";

  //render todolist
  renderTodoList();
}
