"use strict";

const body = document.querySelector("body");
const sidebarButtons = document.querySelector(".sidebar--buttons");
const todoList = document.querySelector(".todos--list");
const todoText = document.querySelector(".todo--text");
const addButton = document.querySelector(".add--button");
const deleteButton = document.querySelector(".delete--button");

class ToDo {
  date = new Date();
  id = Date.now() + "".slice(-10);

  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augst",
    "September",
    "October",
    "November",
    "December",
  ];

  constructor(name) {
    this.name = name;
  }
}

class App {
  Items = [];
  constructor() {
    this._clearText();

    todoText.addEventListener("click", this._showButtons);
    addButton.addEventListener("click", this._newTodo.bind(this));
    body.addEventListener("submit", this._newTodo.bind(this));
    deleteButton.addEventListener("click", this._deleteTodo.bind(this));
  }

  _newTodo(e) {
    e.preventDefault();
    const name = todoText.value;
    let todoitem;

    if (this.Items.length < 6 && name != null && name != "") {
      todoitem = new ToDo(name);
      this._renderTodo(todoitem);
      this.Items.push(todoitem);

      this._clearText();
    } else {
      this._clearText();
    }
  }

  _showButtons() {
    sidebarButtons.classList.toggle("hidden--buttons");
  }

  _deleteTodo(e) {
    e.preventDefault();
    todoList.innerHTML = "";
    this._clearText();
  }

  _clearText() {
    todoText.blur();
    todoText.value = "";
    sidebarButtons.classList.toggle("hidden--buttons");
  }

  _renderTodo(todoitem) {
    let html = `
    <li class="todo--item" data-id="${todoitem.id}">
      <div class="todo--info">
        <h2 class="todo--title">🔴 ${todoitem.name}</h2>
      </div>
      <div class="todo--details">
        <span class="todo--date">At ${todoitem.date.getFullYear()} ${
      todoitem.months[todoitem.date.getMonth()]
    } ${todoitem.date.getDate()}</span>
        <span class="todo--todate">To ${todoitem.date.getFullYear()} ${
      todoitem.months[todoitem.date.getMonth()]
    } ${todoitem.date.getDate() + 3}</span>
      </div>
    </li>   
    `;

    todoList.insertAdjacentHTML("beforeend", html);
  }
}

const app = new App();
