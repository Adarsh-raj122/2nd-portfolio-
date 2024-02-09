var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;
var str1 = "./dice" + x + ".png";
var str2 = "./dice" + y + ".png";

document.querySelectorAll("img")[0].src = str1;
document.querySelectorAll("img")[1].src = str2;

if (x > y) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (y > x) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
