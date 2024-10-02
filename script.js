
const button = document.querySelector("button");

button.addEventListener('click', function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage1 = "./images/" + "dice" + randomNumber1 + ".png";

    var randomDiceImage2 = "./images/" + "dice" + randomNumber2 + ".png";

    var images = document.querySelectorAll("img");
    images[0].setAttribute("src", randomDiceImage1);
    images[1].setAttribute("src", randomDiceImage2);
    if(randomNumber1 > randomNumber2){
        var text = "🚩 Player 1 Wins!!";
    }
    else if(randomNumber1 < randomNumber2){
        var text = "Player 2 Wins!! 🚩";
    }
    else{
        var text = "Both Win!!";
    }
    document.querySelector("h1").textContent = text;
    document.querySelector("h1").classList.add("winner");
    document.querySelector("button").textContent = "Play Again";
});