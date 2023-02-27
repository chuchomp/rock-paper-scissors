function getPlayerChoice() {
    let selection = prompt('Make a choice!', 'Rock, paper or scissors')
    if (selection != null) {
         selection.toLowerCase()
    } if (selection === 'rock' || selection === 'scissors' || selection === 'paper') {
        return selection
    } else {
        alert('Invalid selection! Please input a valid choice')
       return getPlayerChoice();
    }
}

function getComputerChoice() {
    let compChoices = ['rock', 'paper', 'scissors']
    return compChoices[Math.floor(Math.random()*3)]
}

function playRound(playerChoice, ComputerChoice) {
    if (playerChoice === ComputerChoice) {
        return 0
    } else if (playerChoice === 'rock' && ComputerChoice === 'paper') {
        return 1
    } else if (playerChoice === 'rock' && ComputerChoice === 'scissors') {
        return 2
    } else if (playerChoice === 'paper' && ComputerChoice === 'rock') {
        return 3
    } else if (playerChoice === 'paper' && ComputerChoice === 'scissors') {
        return 4
    } else if (playerChoice === 'scissors' && ComputerChoice === 'paper') {
        return 5
    } else if (playerChoice === 'scissors' && ComputerChoice === 'rock') {
        return 6
    }
}

// Hacer que cada caso distinto sea un 'scenario' y que se devuelva solo un numero. Que la funcion de jugar rondas
//reciba los numeros y hacer un switch para resolver cada caso. cada switch altera un contador en el que se llevan
//los scores. Al finalizar, gana el que mas tenga

// switch (playRound("rock", getComputerChoice())) {
//     case 1: 
// }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice())
        if (roundResult === 0){
            console.log(`Both chose the same! It's a draw!`);
            i -= 1;
        } else if (roundResult === 1) {
            console.log(`Paper beats rock! The computer wins!`);
            computerScore++;

        } else if (roundResult === 2) {
            console.log(`Rock beats scissors! You win!`);
            playerScore++;

        } else if (roundResult === 3) {
            console.log(`paper beats rock! You win!`);
            playerScore++;

        } else if (roundResult === 4) {
            console.log(`scissors beats paper! The computer wins!`);
            computerScore++;

        } else if (roundResult === 5) {
            console.log(`scissors beats paper! You win!`);
            playerScore++;
            
        } else if (roundResult === 6) {
            console.log(`Rock beats scissors! The computer wins!`);
            computerScore++;
        } else {
            console.log('something went wrong')
        }
        console.log(i)
        console.log(`Current score is: Player: ${playerScore} - Computer: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log(`The player wins! Final score is ${playerScore} to ${computerScore}`)
    } else {   
        console.log(`The Computer wins! Final score is ${playerScore} to ${computerScore}`)
    }
}

// Hacer que cada caso distinto sea un 'scenario' y que se devuelva solo un numero. Que la funcion de jugar rondas
//reciba los numeros y hacer un switch para resolver cada caso. cada switch altera un contador en el que se llevan
//los scores. Al finalizar, gana el que mas tenga