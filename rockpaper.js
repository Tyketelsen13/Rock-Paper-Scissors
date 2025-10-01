const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    determineWinner()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function determineWinner() { 
    if (computerChoice === userChoice) {
        result = 'Tie'
}
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'Computer wins!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'Computer wins!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'Computer wins!'
    }
    resultDisplay.innerHTML = result
}


