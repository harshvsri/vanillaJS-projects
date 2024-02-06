var randomNum1 = Math.floor((Math.random()*6)+1);
var dice1 = "images/dice"+randomNum1+".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src" , dice1);


var randomNum2 = Math.floor((Math.random()*6)+1);
var dice2 = "images/dice"+randomNum2+".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src" , dice2);


if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 WINS ";
} else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 WINS🚩";
} else {
    document.querySelector("h1").innerHTML = "DRAW";
}