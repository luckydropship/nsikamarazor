var randomNumber1 = Math.floor(Math.random()*6)+1; //this wil give us a random number between one and six.
var randomDiceImage =  "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png
var randomeImageSource = "images/" + randomDiceImage; //Images/dice1.png - Images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomeImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomeImageSource2 = "images/dice" +randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomeImageSource2);

//if player 1 wins
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins the game";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = " 🚩Player 2 wins the game";
}
else{
  document.querySelector("h1").innerHTML = "🤝Its a draw";
}
