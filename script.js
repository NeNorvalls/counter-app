let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let count = 0;

function increment() {
  console.log("Increment function called.");
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = " " + count + " - ";
  saveEl.innerText += countStr;
}
