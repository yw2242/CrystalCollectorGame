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
    var valueRed = 5;
    var valueYellow = 1;
    var valueGreen = 10;
    var valueBlue = 2;



    // when clicked, add up the numbers and show it in #score-box
    $("#red").on("click", function() {
        score = score + valueRed;
        console.log(score);
         // return score;
       $("#score").text(score);
       [wins, losses, score] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);

      });

      $("#yellow").on("click", function() {
        score = score + valueYellow;
        console.log(score);
        // return score;
        $("#score").text(score);
        [wins, losses, score] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);

      });

      $("#green").on("click", function() {
        score = score + valueGreen;
        console.log(score);
        // return score;
        $("#score").text(score);
        [wins, losses, score] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);

      });

      $("#blue").on("click", function() {
        score = score + valueBlue;
        console.log(score);
        // return score;
        $("#score").text(score);
        [wins, losses, score] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);


      });


      function checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score) {
      
        // if the number added up === the random number, win!
      
          if (score === random) {
              wins++;
      
      
          // if the number added up > the random number, lose!
      
          } else if (score > random) {
              loses++;
          }
      
          winsText.textContent = "wins: " + wins;
          lossesText.textContent = "losses: " + losses;
          totalScore.textContent = score;

          return [wins, losses, score];
      
      }


});