const inputEl = document.querySelector("#item");
const addItemButtonEl = document.querySelector("#addItemButton");
const sortAscButtonEl = document.querySelector("#sortAscButton");
const sortDescButtonEl = document.querySelector("#sortDescButton");
const deleteListEl = document.querySelector("#deleteList");
const listEl = document.querySelector(".list");

addItemButtonEl.addEventListener("click", addItem);
listEl.addEventListener("click", actionMarkOrDelete);
inputEl.addEventListener("keypress", addItemWithEnter);
sortAscButtonEl.addEventListener("click", sortAsc);
sortDescButtonEl.addEventListener("click", sortDesc);
deleteListEl.addEventListener("click", deleteList);

function addItem(event) {
  const clickedEl = event.target;

  if (clickedEl.id == "addItemButton" && inputEl.value != "") {
    listEl.style.display = "flex";
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");
    const newInnerDiv = document.createElement("div");
    const newButton = document.createElement("button");
    const newIClass = document.createElement("i");
    newDiv.classList.add("item");
    newP.innerText = inputEl.value;
    newButton.id = "markButton";
    newButton.innerText = "Mark as buyed";
    newIClass.classList.add("fa-solid");
    newIClass.classList.add("fa-trash");
    newIClass.classList.add("delete");
    listEl.append(newDiv);
    newDiv.append(newP);
    newInnerDiv.append(newButton);
    newInnerDiv.append(newIClass);
    newDiv.append(newInnerDiv);
    inputEl.value = "";
  }
}

function actionMarkOrDelete(event) {
  const clickedEl = event.target;
  if (clickedEl.id == "markButton") {
    clickedEl.parentNode.parentNode.firstElementChild.classList.toggle(
      "strikeThrough"
    );
  } else if (clickedEl.classList.contains("delete")) {
    clickedEl.parentNode.parentNode.remove();
  }
  if ([...listEl.children].length == 1) {
    listEl.style.display = "none";
  }
}

function addItemWithEnter(e) {
  if (e.key === "Enter") {
    addItemButtonEl.click();
  }
}

function sortAsc() {
  [...listEl.children]
    .slice(1)
    .sort((a, b) => (a.innerText > b.innerText ? 1 : -1))
    .forEach((node) => listEl.appendChild(node));
}

function sortDesc() {
  [...listEl.children]
    .slice(1)
    .sort((a, b) => (a.innerText < b.innerText ? 1 : -1))
    .forEach((node) => listEl.appendChild(node));
}

function deleteList() {
  const items = document.querySelectorAll(".item");
  for (let i = 1; i <= items.length - 1; i++) {
    items[i].remove();
  }
  listEl.style.display = "none";
}
