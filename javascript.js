const NUM_ROUNDS = 5;

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
        alert("A tie! You both entered " + humanChoice);
    }
    else if (computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper")
    {                                       // Computer Wins
        alert("You lose! " + computerChoice + " beats " + humanChoice + "!");
        return 1;
    }
    else {                                  // Player Wins
        alert("You win! " + humanChoice + " beats " + computerChoice + "!");
        return 0;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < NUM_ROUNDS; ++i) {
        let result = playRound(getComputerChoice(), getHumanChoice());
        
        // This is my hacky solution to needing to have the score
        // variables in local scope but update them from playRound,
        // specifically without using objects or arrays.
        // I've arbitrarily defined 0 as human, and 1 as computer
        if (result === 0) { ++humanScore; }
        else if (result === 1) { ++computerScore; }
    }

    let finalMessage = "Final Score: You " + humanScore + ", Computer " + computerScore;
    if (humanScore > computerScore) { finalMessage += "\nYou win!"; }
    else { finalMessage += "\nYou lose!"; }

    alert(finalMessage);
}

playGame();