var arrStr = ['rock','paper','scissors']
var randElement = arrStr[Math.floor(Math.random() * arrStr.length)];
console.log(randElement);

var rounds = 5;
var input = prompt ("Choose rock, paper, or scissors:");
var playerSelection = input
var computerScore = 0;
var playerScore = 0;

function playRound (playerSelection, computerSelection) {
    var result = "";
    if (playerSelection == computerSelection) {
        result = "It's a tie!";
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = "You win!";
        playerScore++;
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = "The computer wins!";
        computerScore++;
    }

    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = "The computer wins!";
        computerScore++;
    }

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = "You win!";
        playerScore++;
    }

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = "The computer wins!";
        computerScore++;
    }

    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = "You win!";
        playerScore++;
    }

    return result;

}

playerSelection = playerSelection.toLowerCase();
var computerSelection = randElement;
console.log(playRound(playerSelection, computerSelection));
console.log (playRound (computerScore, playerScore))

function game (playRound) {
    for (let i=0; i < 5; i++) {
        console.log (playRound)
    }

}
