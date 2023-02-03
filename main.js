const playerChoices = {
    ROCK: {
        ROCK: 'tie',
        PAPER: 'lose',
        SCISSORS: 'win',
    },
    PAPER: {
        PAPER: 'tie',
        ROCK: 'win',
        SCISSORS: 'lose',
    },
    SCISSORS: {
        SCISSORS: 'tie',
        ROCK: 'lose',
        PAPER: 'win',
    },
}

function getComputerChoice () {
    const computerChoice = Object.keys(playerChoices)[Math.floor(Math.random() * Object.keys(playerChoices).length)]
    return computerChoice
}

function playerSelection () {
    const playerChoice = prompt('Rock, paper, or scissors?').toUpperCase()
    if (playerChoice === 'ROCK' || playerChoice === 'PAPER' || playerChoice ==='SCISSORS') {
        return playerChoices[playerChoice]
    } else {
        alert('Please enter rock, paper, or scissors.')
        return playerSelection()    
    }
}

function playRound(playerSelection, computerSelection) {
    const result = {
        isPlayerWin: false,
        isComputerWin: false,
    }
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playerSelection[computerSelection])
    if (playerSelection[computerSelection] === 'tie') {
        alert('It\'s a tie!')
    } else if (playerSelection[computerSelection] === 'win') {
        result.isPlayerWin = true        
        alert('You win!')
    } else {
        result.isComputerWin = true
        alert('You lose!')
    }
    return result
}

function game() {
    let countPlayerWin = 0;
    let countComputerWin =0;
    for (let i = 0; i < 5; i++) {
        const result = playRound(playerSelection(), getComputerChoice())
        if (result.isPlayerWin) {
            countPlayerWin++
        } else if (result.isComputerWin)  {
            countComputerWin++
        }
        console.log(countPlayerWin)
        console.log(countComputerWin)
    }
    if (countPlayerWin > countComputerWin) {
        alert('Game over! You win!')
    } else if (countPlayerWin < countComputerWin) {
        alert('Game over! You lose!')
    } else {
        alert('Game over! tie!')
    }
}

game()
