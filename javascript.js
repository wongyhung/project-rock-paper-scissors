let humanChoice, computerChoice;

function getComputerChoice() {
    computerChoice = parseInt((Math.random() * 100));
    if (computerChoice < 33) {
        computerChoice = "rock";
    } else if (computerChoice > 33 && computerChoice < 66) {
        computerChoice = "paper";
    } else if (computerChoice > 66) {
        computerChoice = "scissors";
    } else {
        alert("You made an invalid move. Try again."); // will never happen
    }
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, Scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0 , computerScore = 0;

function playRound(human, computer) {
    if (humanScore < 5 && humanScore >= 0 && computerScore < 5 && computerScore >= 0) {
        humanChoice = undefined;
        getHumanChoice();
        getComputerChoice();
        if (humanChoice === computerChoice) {
            alert("Draw!");
            playRound(humanChoice, computerChoice);
        } else if (humanChoice === "rock") {
            let message = (computerChoice === "paper") ? "You lose!" : "You win!";
            message === "You lose!" ? computerScore++ : humanScore++;
            alert(message + `\nCurrent Scores\nYou:Computer\n${humanScore}:${computerScore}`);
            playRound(humanChoice, computerChoice);
        } else if (humanChoice === "paper") {
            let message = (computerChoice === "scissors") ? "You lose!" : "You win!";
            message === "You lose!" ? computerScore++ : humanScore++;
            alert(message + `\nCurrent Scores\nYou:Computer\n${humanScore}:${computerScore}`);
            playRound(humanChoice, computerChoice);
        } else if (humanChoice === "scissors") {
            let message = (computerChoice === "rock") ? "You lose!" : "You win!";
            message === "You lose!" ? computerScore++ : humanScore++;
            alert(message + `\nCurrent Scores\nYou:Computer\n${humanScore}:${computerScore}`);
            playRound(humanChoice, computerChoice);
        } else {
            alert("Invalid move, or you're not even entering a move. Get yo shit together foo!")
            playRound(humanChoice,computerChoice)
        }
    } else if (humanScore === 5) {
        alert("Congratulations, you won!");
    } else {
        alert("Boo, you lost!");
    }
}

function playGame() {
    alert("Rock, Paper, Scissors game! Best out of 5 wins. Good luck!");
    playRound(humanChoice, computerChoice);
}

playGame();
