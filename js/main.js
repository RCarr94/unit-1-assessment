// Variables
let score = 0;

// Cached Elements

let addOne = document.querySelector("#add");
let subOne = document.querySelector("#subtract");
let valInp = document.getElementById("valInput").value;
let counter = document.querySelector("#count-main");

// Event Listeners

addOne.addEventListener("click", function () {
  addVal();
});

// Functions

function addVal() {
  //   score = score + valInp;
  console.log(valInp);
  score = score + valInp;
  counter.innerHTML = score;
}
