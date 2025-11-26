"use strict";

const input = document.getElementById("iDo");
const btn = document.getElementById("addBtn");
const toDoList = document.querySelector(".toDoContent");
const doneList = document.querySelector(".doneContent");

function addTask() {
  console.log(input.value);
  //   toDoList.textContent += `\n${input.value}`;
  // trim - removing 'space' from start and end of string
}

btn.addEventListener("click", addTask);
