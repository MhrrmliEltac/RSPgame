let compScore = document.querySelector("#computer_score");
let userScore = document.querySelector("#user_score");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissor");
let compChoice = ["rock", "paper", "scissors"];
let userChoose = document.querySelector(".user_choice");
let compChoose = document.querySelector(".comp_choice");
let result = document.querySelector("#result");
let compScoreCount = 0;
let userScoreCount = 0;

rock.addEventListener("click", () => {
  let index = Math.floor(Math.random() * compChoice.length);
  let computerChoice = compChoice[index];
  compChoose.innerHTML = computerChoice;
  userChoose.innerHTML = "rock";
  if (computerChoice == "rock") {
    result.innerHTML = "Draw";
    result.classList.remove("red");
    result.classList.remove("green");
  } else if (computerChoice == "paper") {
    result.innerHTML = "You Lose";
    result.classList.remove("green");
    result.classList.add("red");
    compScoreCount++;
    compScore.innerHTML = compScoreCount;
  } else if (computerChoice == "scissors") {
    result.innerHTML = "You Win";
    result.classList.remove("red");
    result.classList.add("green");
    userScoreCount++;
    userScore.innerHTML = userScoreCount;
  }
});
paper.addEventListener("click", () => {
  let index = Math.floor(Math.random() * compChoice.length);
  let computerChoice = compChoice[index];
  compChoose.innerHTML = computerChoice;
  userChoose.innerHTML = "paper";
  if (computerChoice == "paper") {
    result.innerHTML = "Draw";
    result.classList.remove("red");
    result.classList.remove("green");
  } else if (computerChoice == "scissors") {
    result.innerHTML = "You Lose";
    result.classList.remove("green");
    result.classList.add("red");
    compScoreCount++;
    compScore.innerHTML = compScoreCount;
  } else if (computerChoice == "rock") {
    result.innerHTML = "You Win";
    result.classList.remove("red");
    result.classList.add("green");
    userScoreCount++;
    userScore.innerHTML = userScoreCount;
  }
});
scissors.addEventListener("click", () => {
  let index = Math.floor(Math.random() * compChoice.length);
  let computerChoice = compChoice[index];
  compChoose.innerHTML = computerChoice;
  userChoose.innerHTML = "scissors";
  if (computerChoice == "scissors") {
    result.innerHTML = "Draw";
    result.classList.remove("red");
    result.classList.remove("green");
  } else if (computerChoice == "rock") {
    result.innerHTML = "You Lose";
    result.classList.remove("green");
    result.classList.add("red");
    compScoreCount++;
    compScore.innerHTML = compScoreCount;
  } else if (computerChoice == "paper") {
    result.innerHTML = "You Win";
    result.classList.remove("red");
    result.classList.add("green");
    userScoreCount++;
    userScore.innerHTML = userScoreCount;
  }
});
