// Variables
let score = 0;

let currVal;

// Cached Elements

let addOne = document.querySelector("#add");
let subOne = document.querySelector("#subtract");
let counter = document.querySelector("#count-main");

// Event Listeners

addOne.addEventListener("click", function () {
  getVal();
  addVal();
  counter.innerHTML = score;
  makeRed();
});

subOne.addEventListener("click", function () {
  getVal();
  subVal();
  counter.innerHTML = score;
  makeRed();
});

// Functions

function addVal() {
  score = score + parseInt(currVal);
}

function subVal() {
  score = score - parseInt(currVal);
}

function getVal() {
  currVal = document.getElementById("valInput").value;
}

function makeRed() {
  if (score < 0) {
    counter.classList.add("big-red");
  } else if (score >= 0) {
    counter.classList.remove("big-red");
  }
}
