function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()*3)]
}

function playRound(playerChoice, ComputerChoice) {
    playerChoice.toLowerCase();
    if (playerChoice === ComputerChoice) {
        return `Both chose ${playerChoice}! It's a draw!`
    }

    if (playerChoice === 'rock' && ComputerChoice === 'paper') {
        return `Paper beats rock! The computer wins!`
    }

    if (playerChoice === 'rock' && ComputerChoice === 'scissors') {
        return `Rock beats scissors! You win!`
    }

    if (playerChoice === 'paper' && ComputerChoice === 'rock') {
        return `paper beats rock! You win!`
    }

    if (playerChoice === 'paper' && ComputerChoice === 'scissors') {
        return `scissors beats paper! The computer wins!`
    }
    
    if (playerChoice === 'scissors' && ComputerChoice === 'paper') {
        return `scissors beats paper! You win!`
    }

    if (playerChoice === 'scissors' && ComputerChoice === 'rock') {
        return `Rock beats scissors! The computer wins!`
    }
}

let playerChoice = 'rock'

// Hacer que cada caso distinto sea un 'scenario' y que se devuelva solo un numero. Que la funcion de jugar rondas
//reciba los numeros y hacer un switch para resolver cada caso. cada switch altera un contador en el que se llevan
//los scores. Al finalizar, gana el que mas tenga