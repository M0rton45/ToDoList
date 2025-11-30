"use strict";
// BUG FIX TODO

const input = document.getElementById("iDo");
const btn = document.getElementById("addBtn");
const toDoList = document.querySelector(".toDoContent");
const doneList = document.querySelector(".doneContent");

// adding task
//  get text from input value
//  trim it, check if it's not empty
//  create element p with that text
//  add that element to toDoList
//  clear input value
function addTask() {
  // console.log(input.value);
  const text = input.value.trim(); // trim() - removing 'space' from start and end of string
  if (!text) return; // if text is empty, exit function
  const p = document.createElement("p"); // create new paragraph element
  p.className = "task"; // to style in CSS
  p.textContent = text; // set text for paragraph
  toDoList.appendChild(p); // adding the paragraph to toDoList
  input.value = ""; // clearing input value
  input.focus(); // focus() - put cursor back to input
}

// adding toDoList to doneList functionality
// task in toDoList clicked - move task from toDoList to doneList
// task in doneList clicked - remove task from doneList

function moveTask(e) {
  const task = e.target.closest(".task"); // find clicked elemnt .task
  if (!task) return; // task not founded - exit function

  // check task is in toDoList
  if (toDoList.contains(task)) {
    doneList.appendChild(task); // move that task to doneList
    task.classList.add("done"); // adding new class now task have two(done and task)
  } else if (doneList.contains(task)) {
    //check task is in doneList
    task.remove(); // task is done - remove it from done list
  }
}

toDoList.addEventListener("click", moveTask);
doneList.addEventListener("click", moveTask);
btn.addEventListener("click", addTask);
