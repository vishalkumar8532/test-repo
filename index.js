let rn1 = Math.floor(Math.random()*6)+1;
let imagesource = "images/" + "dice" + rn1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesource)

let rn2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/" + "dice" + rn2 +".png");

if (rn1 > rn2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (rn2 > rn1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

