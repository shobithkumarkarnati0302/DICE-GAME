/**********************Dice 1 Functioanlity**********************/

var randomNumber1 = Math.random();
randomNumber1 = (Math.floor(randomNumber1 * 6) + 1 );

var randomImage1 = "dice" + randomNumber1 + ".png" ;
var randomImageSource1 = "images/" + randomImage1 ;
document.querySelector(".img1").setAttribute("src", randomImageSource1);

/**********************Dice 2 Functioanlity**********************/

var randomNumber2 = Math.random();
randomNumber2 = (Math.floor(randomNumber2 * 6) + 1 );

var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
document.querySelector(".img2").setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player1 Wins :)";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player2 Wins :)";
}
else{
    document.querySelector("h1").innerHTML = "Draw !!";
}

