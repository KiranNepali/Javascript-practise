function addTodo() {
  const inputElement = document.querySelector(".js-input");

  //get the input value
  const name = inputElement.value;
  console.log(name);

  // get data
  const dateInputElement = document.querySelector(".js-duedate");
  const dueDate = dateInputElement.value;

  // add input to arrya using push
  todoList.push({ name: name, dueDate: dueDate });
  console.log(todoList);

  //remove input value when clicked
  inputElement.value = "";

  //render todoList
  rendertodoList();
}

const todoList = [
  { name: "make dish", dueDate: "2023-12-22" },

  { name: "hi", dueDate: "2023-12-22" },
];
rendertodoList();

function rendertodoList() {
  let todoListHTML = "";
  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <p>
    ${name} ${dueDate} 
    <button onClick="
    todoList.splice(${i}, 1);
    rendertodoList();
    ">Delete</button>
    </p> `;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
