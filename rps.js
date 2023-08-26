let playerScore = 0;
let computerScore = 0;



let playerChoiceText = document.getElementById('player-choice');
let compChoiceText = document.getElementById('comp-choice');
let playerScoreText = document.getElementById('player-score');
let compScoreText = document.getElementById('computer-score');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const board = document.getElementById('gameboard');

let replacementDiv = document.createElement('div')

let restartScreen = document.createElement('div');
restartScreen.setAttribute('class', 'divButtons');

let restartButton = document.createElement('button');
restartButton.innerText = 'RESTART THE GAME'
let resultsDiv = document.createElement('div');
let results = document.createElement('p')
results.setAttribute('id', 'results');
resultsDiv.appendChild(results)
restartScreen.appendChild(restartButton);

replacementDiv.appendChild(restartScreen)
replacementDiv.appendChild(resultsDiv);

    

function getComputerChoice() {
    let compChoices = ['rock', 'paper', 'scissors']
    return compChoices[Math.floor(Math.random()*3)]
};

// function playRound(playerChoice, ComputerChoice) {
//     if (playerChoice === ComputerChoice) {
//         return 0
//     } else if (playerChoice === 'rock' && ComputerChoice === 'paper') {
//         return 1
//     } else if (playerChoice === 'rock' && ComputerChoice === 'scissors') {
//         return 2
//     } else if (playerChoice === 'paper' && ComputerChoice === 'rock') {
//         return 3
//     } else if (playerChoice === 'paper' && ComputerChoice === 'scissors') {
//         return 4
//     } else if (playerChoice === 'scissors' && ComputerChoice === 'paper') {
//         return 5
//     } else if (playerChoice === 'scissors' && ComputerChoice === 'rock') {
//         return 6
//     }
// }


function playRound(playerChoice, ComputerChoice) {
    playerChoiceText.innerText = `You chose ${playerChoice}`;
    compChoiceText.innerText = `The computer chose ${ComputerChoice}` 
    if (playerChoice === ComputerChoice) {
        results.innerText = `Both chose the same! It's a draw!`
    } else if (playerChoice === 'rock' && ComputerChoice === 'paper') {
        computerScore++;
        results.innerText = `Paper beats rock! The computer wins!`;
    } else if (playerChoice === 'rock' && ComputerChoice === 'scissors') {
        playerScore++;
        results.innerText = `Rock beats scissors! You win!`;
    } else if (playerChoice === 'paper' && ComputerChoice === 'rock') {
        playerScore++;
        results.innerText = `Paper beats rock! You win!`;
    } else if (playerChoice === 'paper' && ComputerChoice === 'scissors') {
        computerScore++;
        results.innerText = `scissors beats paper! The computer wins!`;
    } else if (playerChoice === 'scissors' && ComputerChoice === 'paper') {
        playerScore++;
        results.innerText = `scissors beats paper! You win!`;
    } else if (playerChoice === 'scissors' && ComputerChoice === 'rock') {
        computerScore++;
        results.innerText = `Rock beats scissors! The computer wins!`;
    }
    playerScoreText.innerText = `Player: ${playerScore}`;
    compScoreText.innerText = `Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }

};





scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
});


function announceWinner() {
    if (playerScore > computerScore) {
        results.innerText = `The final score is ${playerScore} to ${computerScore}! The player wins the game!`;
    } else {
        results.innerText = `The final score is ${playerScore} to ${computerScore}! The computer wins the game!`;
    }
    
    board.replaceWith(replacementDiv);
}


restartScreen.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerChoiceText.innerText = ``;
    compChoiceText.innerText = ``;
    playerScoreText.innerText = `Player: ${playerScore}`;
    compScoreText.innerText = `Computer: ${computerScore}`;
    results.innerText = ``;

    restartScreen.replaceWith(board);
})



// Hacer que cada caso distinto sea un 'scenario' y que se devuelva solo un numero. Que la funcion de jugar rondas
//reciba los numeros y hacer un switch para resolver cada caso. cada switch altera un contador en el que se llevan
//los scores. Al finalizar, gana el que mas tenga