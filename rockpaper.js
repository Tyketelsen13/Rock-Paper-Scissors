const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button:not(#play-again)');
let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const playAgainBtn = document.getElementById('play-again');
const resetScoreBtn = document.getElementById('reset-score');

window.addEventListener('DOMContentLoaded', () => {
    playAgainBtn.style.display = 'none'; // Ensure hidden on load
});

function setButtonsDisabled(disabled) {
    possibleChoices.forEach(btn => btn.disabled = disabled);
}

// --- Game logic comments ---
// Handles user/computer choices, score tracking, and UI updates

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // User selects a choice
    userChoice = e.target.id;
    if (userChoice === 'rock') {
        userChoiceDisplay.innerHTML = '🪨';
    } else if (userChoice === 'paper') {
        userChoiceDisplay.innerHTML = '📄';
    } else if (userChoice === 'scissors') {
        userChoiceDisplay.innerHTML = '✂️';
    }
    setButtonsDisabled(true);
    generateComputerChoice();
    determineWinner();
}));

// Play Again resets only the round, not the scores
playAgainBtn.addEventListener('click', () => {
    resultDisplay.innerHTML = '';
    userChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    setButtonsDisabled(false);
    playAgainBtn.style.display = 'none';
});

// Reset Score clears scores and board
resetScoreBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    userChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
    setButtonsDisabled(false);
    playAgainBtn.style.display = 'none';
});

// --- Animations and sound effects ---
function animateChoice(element) {
    element.classList.add('animate-choice');
    setTimeout(() => {
        element.classList.remove('animate-choice');
    }, 400);
}

function playSound(result) {
    let audio;
    if (result === 'You win!') {
        audio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b6c6e7b.mp3'); // win sound
    } else if (result === 'Computer wins!') {
        audio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b6c6e7b.mp3'); // lose sound
    } else {
        audio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_115b6c6e7b.mp3'); // tie sound
    }
    audio.volume = 0.2;
    audio.play();
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'rock';
        computerChoiceDisplay.innerHTML = '🪨';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
        computerChoiceDisplay.innerHTML = '📄';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
        computerChoiceDisplay.innerHTML = '✂️';
    }
    animateChoice(computerChoiceDisplay);
}

function determineWinner() {
    let result;
    if (computerChoice === userChoice) {
        result = 'Tie!';
    } else if (
        (computerChoice === 'rock' && userChoice === "paper") ||
        (computerChoice === 'paper' && userChoice === "scissors") ||
        (computerChoice === 'scissors' && userChoice === "rock")
    ) {
        result = 'You win!';
        userScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }
    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    playAgainBtn.style.display = 'inline-block';
    animateChoice(resultDisplay);
    playSound(result);
}


