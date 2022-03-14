var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

// Task Handler Function
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

   // packages data as an object
   var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send as an argument to createTaskEl
  createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
 // creates list item
 var listItemEl = document.createElement("li");
 listItemEl.className = "task-item";

 //  div to hold task info and adds to list item
 var taskInfoEl = document.createElement("div");
 taskInfoEl.className = "task-info";

 // adds HTML content to div
 taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
 listItemEl.appendChild(taskInfoEl);

 // adds entire list item to list
 tasksToDoEl.appendChild(listItemEl);
}



formEl.addEventListener("submit", taskFormHandler);