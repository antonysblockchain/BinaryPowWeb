let sumOfCards = 0;
let currentCard = 0;

function startGame() {
  document.getElementById("card1").style.display = "flex";
  document.getElementById("question").style.display = "flex";
  document.getElementById("divPreviowsAndNext").style.display = "flex";
  document.getElementById("divStartGame").style.visibility = "hidden";
  document.getElementById("lblGuessedNumber").textContent ="Tu número es el: ";
  currentCard = 1;
  sumOfCards = 0;
}
function yesClick() {
  switch (currentCard) {
    case (currentCard = 1):
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "flex";
      sumOfCards = sumOfCards + 1;
      currentCard = 2;
      break;

    case (currentCard = 2):
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "flex";
      sumOfCards = sumOfCards + 2;
      currentCard = 3;
      break;

    case (currentCard = 3):
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "flex";
      sumOfCards = sumOfCards + 4;
      currentCard = 4;
      break;

    case (currentCard = 4):
      document.getElementById("card4").style.display = "none";
      document.getElementById("card5").style.display = "flex";
      sumOfCards = sumOfCards + 8;
      currentCard = 5;
      break;

    case (currentCard = 5):
      document.getElementById("card5").style.display = "none";
      document.getElementById("card6").style.display = "flex";
      sumOfCards = sumOfCards + 16;
      currentCard = 6;
      break;

    case (currentCard = 6):
      document.getElementById("card6").style.display = "none";
      document.getElementById("results").style.visibility = "visible";
      document.getElementById("question").style.display = "none";
      document.getElementById("divPreviowsAndNext").style.display = "none";
      sumOfCards = sumOfCards + 32;
      document.getElementById("guessedNumber").textContent = sumOfCards;
      break;
  }
}

function noClick() {
  switch (currentCard) {
    case (currentCard = 1):
      document.getElementById("card1").style.display = "none";
      document.getElementById("card2").style.display = "flex";
      currentCard = 2;
      break;

    case (currentCard = 2):
      document.getElementById("card2").style.display = "none";
      document.getElementById("card3").style.display = "flex";
      currentCard = 3;
      break;

    case (currentCard = 3):
      document.getElementById("card3").style.display = "none";
      document.getElementById("card4").style.display = "flex";
      currentCard = 4;
      break;

    case (currentCard = 4):
      document.getElementById("card4").style.display = "none";
      document.getElementById("card5").style.display = "flex";
      currentCard = 5;
      break;

    case (currentCard = 5):
      document.getElementById("card5").style.display = "none";
      document.getElementById("card6").style.display = "flex";
      currentCard = 6;
      break;

    case (currentCard = 6):
      if (sumOfCards == 0) {
        document.getElementById("results").style.visibility = "visible";
        document.getElementById("lblGuessedNumber").textContent =
          "No has elegido ningún número!";
      }else{
        document.getElementById("lblGuessedNumber").textContent =
          "Tu número es el: ";
      }
      document.getElementById("card6").style.display = "none";
      document.getElementById("question").style.display = "none";
      document.getElementById("divPreviowsAndNext").style.display = "none";

      
      
      document.getElementById("results").style.visibility = "visible";
      document.getElementById("guessedNumber").textContent = sumOfCards;
      currentCard = 0;
      break;
  }
}
