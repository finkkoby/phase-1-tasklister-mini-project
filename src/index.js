document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    buildToDo(e);
  })
  function buildToDo(e) {
    e.preventDefault();
    let formToDo = e.target.children[1].value;
    let newToDo = document.createElement('li');
    let priority = e.target.children[3];
    newToDo.textContent = formToDo + " ";
    let newButton = document.createElement("button");
    newButton.textContent = "X"
    newToDo.appendChild(newButton);
    if (priority.value === "high") {
      newToDo.style.color = "red";
      let myList = document.querySelector("#high-tasks");
      myList.appendChild(newToDo);
    } else if (priority.value === "medium") {
      newToDo.style.color = "yellow";
      let myList = document.querySelector("#medium-tasks");
      myList.appendChild(newToDo);
    } else if (priority.value === "low") {
      newToDo.style.color = "green";
      let myList = document.querySelector("#low-tasks");
      myList.appendChild(newToDo);
    }
    newButton.addEventListener("click", (e) => (
      handleDelete(e)
    ))
    formToDo.value = "";
    form.reset();
  }
  function handleDelete(e) {
    let target = e.target.parentNode;
    target.remove();
  }
});
