// const { createElement } = require("react");

console.log("Hello");

const ul = document.querySelector(".todos_list");
const input = document.querySelector("#todo_text");
const form = document.querySelector("form");
const number = document.querySelector(".num");

let arr = [];

const render = function () {
  let value = input.value;
  let task = {
    id: Math.random().toString(30).substring(1, 9),
    text: value,
  };

  if (value) {
    let li = document.createElement("LI");
    let span = document.createElement("SPAN");
    li.classList.add("todos_item");
    span.classList.add("_X");
    li.innerHTML = value;
    span.innerHTML = "X";
    li.append(span);
    ul.append(li);

    arr.push(task);
    number.innerHTML = arr.length;

    ul.addEventListener("click", (e) => {
      arr.map((item) => {});
      if (e.target == li) {
        li.classList.toggle("text");
      } else if (e.target == span) {
        li.remove();
        arr.splice(0, 1);

        number.innerHTML = arr.length;
      }
    });
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  render();
  input.value = "";
});
