// Bellow is where i worked on the light Switching logic project
const turnOnBtn = document.getElementById("turnOn");
const turnOffBtn = document.getElementById("turnOff");
const onImg = document.getElementById("onImg");
const offImg = document.getElementById("offImg");

turnOffBtn.addEventListener("click", () => { 
  offImg.style.display = "block";
  onImg.style.display = "none";
});

turnOnBtn.addEventListener("click", () => { 
  offImg.style.display = "none";
  onImg.style.display = "block";
});

// Well I want to give it a try, working on a to-do list
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskTable = document.getElementById("taskTable");

