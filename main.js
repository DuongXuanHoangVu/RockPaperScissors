const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btns = $$(".button");
const showResult = $(".show-result");
const showGame = $(".show-game");
const tieGame = $(".tie-game");
const youWin = $('.player-win');
const computerWin = $('.computer-win');

const Choices = {
  ROCK: {
    ROCK: "tie",
    PAPER: "lose",
    SCISSORS: "win",
  },
  PAPER: {
    PAPER: "tie",
    ROCK: "win",
    SCISSORS: "lose",
  },
  SCISSORS: {
    SCISSORS: "tie",
    ROCK: "lose",
    PAPER: "win",
  },
};

function getComputerChoice() {
  const computerChoice =
    Object.keys(Choices)[
      Math.floor(Math.random() * Object.keys(Choices).length)
    ];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  const result = {
    isPlayerWin: false,
    isComputerWin: false,
  };
  if (Choices[playerSelection][computerSelection] === "tie") {
    showResult.textContent = `It's a tie! Computer select ${computerSelection}`;
  } else if (Choices[playerSelection][computerSelection] === "win") {
    result.isPlayerWin = true;
    showResult.textContent = `You Win! Computer select ${computerSelection}`;
  } else {
    result.isComputerWin = true;
    showResult.textContent = `You Lose! Computer select ${computerSelection}`;
  }
  console.log(result.isPlayerWin);
  return result;
}

function game() {
  let count = 0;
  let tie = 0;
  let countPlayerWin = 0;
  let countComputerWin = 0;
  btns.forEach((btn) => {
    btn.onclick = () => {
      computerChoice = getComputerChoice();
      playerChoice = btn.textContent.toUpperCase();
      let result = playRound(playerChoice, computerChoice);
      if (result.isPlayerWin) {
        countPlayerWin++;
      } else if (result.isComputerWin) {
        countComputerWin++;
      } else {
        tie++
      }
      count++;
      showGame.textContent = count;
      tieGame.textContent = tie
      youWin.textContent = countPlayerWin 
      computerWin.textContent = countComputerWin
    };
  });
}

game();

