const form = document.querySelector("#todo-form");
const ul = document.querySelector("ul");

const button = document.querySelector(".btn-reset");
const input = document.querySelector("#todo-input");
let itemsArray = localStorage.getItem("to-do")
  ? JSON.parse(localStorage.getItem("to-do"))
  : [];
localStorage.setItem("to-do", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("to-do"));

const makeLi = (text) => {
  const li = document.createElement("li");
  li.className = "todo-list-element";
  li.textContent = text;

  const link = document.createElement("a");
  link.className = "todo-list-element-trash";
  link.innerHTML = '<i class="fa fa-trash"></i>';
  li.appendChild(link);
  ul.appendChild(li);
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem("to-do", JSON.stringify(itemsArray));
  makeLi(input.value);
  input.value = "";
});
data.forEach((item) => {
  makeLi(item);
  ul.addEventListener("click", removeItem);
});
function removeItem(e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.parentElement.classList.contains("todo-list-element-trash")) {
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
    removeFromStorage(e.target.parentElement.parentElement);
  }
}
function removeFromStorage(liItem) {
  let itemsArray = localStorage.getItem("to-do")
  ? JSON.parse(localStorage.getItem("to-do"))
  : [];
  itemsArray.forEach(function(single,index){
    if(liItem.textContent===single){
      itemsArray.splice(index,1)
    }
  })
  localStorage.setItem("to-do",JSON.stringify(itemsArray));
}
button.addEventListener("click", function () {
  localStorage.clear();
  itemsArray = [];
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
/*
document.querySelector(".btn-reset").addEventListener("click", function (e) {
  console.log("clean");
  e.preventDefault();
});
document.querySelector("#add").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.parentNode.id);
});
document.querySelector(".btn-reset").addEventListener("click", function () {
  console.log("clean");
});
let doc, form, links;
doc = document.domain;
doc = document.URL;
links=document.links;
let title, id;
title = document.getElementById("title");
id = document.getElementById("title").id;
id = title.id;
console.log(id);
queryTitle=documentquerySelector("#title");

let ulListElement = document.querySelector("ul.todo-list");
console.log(ulListElement);
let ulListElementNodes = ulListElement.childNodes;
console.log(ulListElementNodes);
console.log(ulListElement.children);
console.log(ulListElement.firstElementChild);
*/
