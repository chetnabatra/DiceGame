var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage ="dice" + randomnumber1 + ".png";
var randomimagesource = " images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimgsource2 = "images/dice" + randomnumber2 + ".png";
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsource2 );

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML ="player 1 is  WINNER";
}
else if(randomnumber2>randomnumber1) {
    document.querySelector("h1").innerHTML ="player 2 is  WINNER";
}
else {
  document.querySelector("h1").innerHTML ="DRAW";
}
