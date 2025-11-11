var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var random1 = "dice" + randomNumber1 + ".jpg";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var random2 = "dice" + randomNumber2 + ".jpg";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", random2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
