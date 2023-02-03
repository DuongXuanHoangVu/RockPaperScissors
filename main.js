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
    let isPlayerWin = false
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playerSelection[computerSelection])
    if (playerSelection[computerSelection] === 'tie') {
        alert('It\'s a tie!')
    } else if (playerSelection[computerSelection] === 'win') {
        isPlayerWin = true        
        alert('You win!')
    } else {
        isPlayerWin = false
        alert('You lose!')
    }
    return isPlayerWin
    // if (playerSelection === computerSelection) {
    //     alert('It\'s a tie!')
    // } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    //     alert('You win!')
    // } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    //     alert('You lose!')
    // } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    //     alert('You win!')
    // } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    //     alert('You lose!')
    // } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    //     alert('You win!')
    // } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    //     alert('You lose!')
    // }
}

function game() {
    let countPlayerWin = 0;
    for (let i = 0; i < 5; i++) {
        const result = playRound(playerSelection(), getComputerChoice())
        if (result) {
            countPlayerWin++
        }
        console.log(countPlayerWin)
    }
    if (countPlayerWin > 2) {
        alert('Game over! You win!')
    } else {
        alert('Game over! You lose!')
    }
}

game()
