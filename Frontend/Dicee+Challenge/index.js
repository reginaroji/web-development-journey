var dice1 = Math.floor(Math.random() * 6 + 1);
var dice1path = "./images/dice" + dice1 + ".png";

var dice2 = Math.floor(Math.random() * 6 + 1);
var dice2path = "./images/dice" + dice2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1path);
console.log(dice1);

document.querySelector(".img2").setAttribute("src", dice2path);
console.log(dice2);

if (dice1 > dice2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (dice2 > dice1) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "It's a draw!!";
}


// if (dice1 === 1) {
//   document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
//   console.log(dice1);
// } else if (dice1 === 2) {
//   document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
//   console.log(dice1);
// } else if (dice1 === 3) {
//   document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
//   console.log(dice1);
// } else if (dice1 === 4) {
//   document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
//   console.log(dice1);
// } else if (dice1 === 5) {
//   document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
//   console.log(dice1);
// } else if (dice1 === 6) {
//   document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
//   console.log(dice1);
// }

// if (dice2 === 1) {
//   document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
//   console.log(dice2);
// } else if (dice2 === 2) {
//   document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
//   console.log(dice2);
// } else if (dice2 === 3) {
//   document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
//   console.log(dice2);
// } else if (dice2 === 4) {
//   document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
//   console.log(dice2);
// } else if (dice2 === 5) {
//   document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
//   console.log(dice2);
// } else if (dice2 === 6) {
//   document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
//   console.log(dice2);
// }