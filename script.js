let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number !");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#27AE60";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("You Lost!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "#17202a";
  displayNumber("?");
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
});
