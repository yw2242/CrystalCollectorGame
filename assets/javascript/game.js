$(document).ready(function() {





  // randomly generate a number, put it into #random-box

  var random = Math.floor(Math.random() * 100) + 1;

  $("#random").text(random);



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

      [wins, losses, score, random] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);



  });



  $("#yellow").on("click", function() {

      score = score + valueYellow;

      console.log(score);

      // return score;

      $("#score").text(score);

      [wins, losses, score, random] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);



  });



  $("#green").on("click", function() {

      score = score + valueGreen;

      console.log(score);

      // return score;

      $("#score").text(score);

      [wins, losses, score, random] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);



  });



  $("#blue").on("click", function() {

      score = score + valueBlue;

      console.log(score);

      // return score;

      $("#score").text(score);

      [wins, losses, score, random] = checkWin(score, random, winsText, wins, lossesText, losses, totalScore, score);





  });



  function checkWin(score, random, winsText, wins, lossesText, losses, totalScore) {



      // if the number added up === the random number, win!

      console.log("Hi");

      console.log("score = " + score);

      console.log("random = " + random);
      
      if (score >= random) {

        if (score == random) {

            wins++;

            console.log("Hi score == random");

            // if the number added up > the random number, lose!

        } else if (score > random) {

            losses++;

            console.log("Hi score > random");

        }

        random = Math.floor(Math.random() * 100) + 1;

        $("#random").text(random);

        score = 0;

     }



      winsText.textContent = "wins: " + wins;

      lossesText.textContent = "losses: " + losses;

      totalScore.textContent = score;



      return [wins, losses, score, random];



  }



});