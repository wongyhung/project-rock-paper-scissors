let humanScore = 0 , computerScore = 0;
let humanChoice, computerChoice;

function getComputerChoice() {
    computerChoice = parseInt((Math.random() * 100));
    if (computerChoice < 33) {
        computerChoice = "Rock";
    } else if (computerChoice > 33 && computerChoice < 66) {
        computerChoice = "Paper";
    } else if (computerChoice > 66) {
        computerChoice = "Scissors";
    } else {
        alert("You made an invalid move. Try again."); // should never happen
    }
    return computerChoice;
}

const message = document.querySelector("#message");
const computerChoiceMessage = document.querySelector("#computerChoiceMessage");
const humanChoiceMessage = document.querySelector("#humanChoiceMessage");

function playRound(human, computer) {
    humanChoiceMessage.textContent = human;
    computerChoiceMessage.textContent = computer;
    if (human === computer) {
        message.textContent = "Draw!"
    } else if (human === "Rock") {
        if (computer === "Paper") {
            lose();
            message.textContent = "Paper beats Rock. You lose!";
        } else {
            win();
            message.textContent = "Rock beats Scissors. You win!";
        }
    } else if (human === "Paper") {
        if (computer === "Scissors") {
            lose();
            message.textContent = "Scissors beats Paper. You lose!";
        } else {
            win()
            message.textContent = "Paper beats Rock. You win!";
        }
    } else if (human === "Scissors") {
        if (computer === "Rock") {
            lose();
            message.textContent = "Rock beats Scissors. You lose!";
        } else {
            win()
            message.textContent = "Scissors beats Paper. You win!";
        }
    }

    if (humanScore === 5) {
        message.textContent = "You won!";
    } else if (computerScore === 5) {
        message.textContent = "Boo, you lost!";
    }
}

const humanScoreCount = document.querySelector("#humanScoreCount");
const computerScoreCount = document.querySelector("#computerScoreCount");

humanScoreCount.textContent = humanScore;
computerScoreCount.textContent = computerScore;

function win() {
    humanScore++
    humanScoreCount.textContent = humanScore;
}

function lose() {
    computerScore++
    computerScoreCount.textContent = computerScore;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound("Rock", getComputerChoice())
    } else if (humanScore === 5) {
        message.textContent = "You already won!";
    } else if (computerScore === 5) {
        message.textContent = "You already lost.";
    }
});

paper.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound("Paper", getComputerChoice())
    } else if (humanScore === 5) {
        message.textContent = "You already won!";
    } else if (computerScore === 5) {
        message.textContent = "You already lost.";
    }
});

scissors.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound("Scissors", getComputerChoice())
    } else if (humanScore === 5) {
        message.textContent = "You already won!";
    } else if (computerScore === 5) {
        message.textContent = "You already lost.";
    }
});
