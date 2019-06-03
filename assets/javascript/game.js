$(document).ready(function() {


    // randomly generate a number, put it into #random-box
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    $("#random").text(randomNumber);



    // win = 0, lose = 0
    var wins = 0;
    var losses = 0;
    var score = 0;

    var winsText = document.getElementById("win");
    var lossesText = document.getElementById("lose");
    var totalScore = document.getElementById("score");


    // make each crystal represent a number
    var valueRed = parseInt(valueRed, 5);
    var valueYellow = parseInt(valueYellow, 1);
    var valueGreen = parseInt(valueGreen, 10);
    var valueBlue = parseInt(valueBlue, 2);



    // when clicked, add up the numbers and show it in #score-box
    $("#red").on("click", function() {
        score + valueRed;
        console.log(valueRed);
        return score;

      });

      $("#yellow").on("click", function() {
        score = score + valueYellow;
        console.log(score);
        return score;

      });

      $("#green").on("click", function() {
        score = score + valueGreen;
        console.log(score);
        return score;

      });

      $("#blue").on("click", function() {
        score = score + valueBlue;
        console.log(score);
        return score;

      });



    // if the number added up === the random number, win!
    if(score === random) {
        wins++;
    // if the number added up > the random number, lose!

    } else if (score > random) {
        loses++;
    }

    $("#score").text(score);


    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    totalScore.textContent = score;

});