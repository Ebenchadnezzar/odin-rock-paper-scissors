let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Will never be 3, since math.random() returns a
    // random num between 0 (inclusive) and 1 (exclusive)
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Rock Paper Scissors\nEnter Your Choice", "Rock");
}

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === humanChoice) {   // Draw
        console.log("A tie! You both entered " + humanChoice);
    }
    else if (computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper")
    {                                       // Computer Wins
        ++computerScore;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
    }
    else {                                  // Player Wins
        ++humanScore;
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
    }
}

playRound(getComputerChoice(), getHumanChoice());