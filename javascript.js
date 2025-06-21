let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Will never be 3, since math.random() returns a
    // random num between 0 (inclusive) and 1 (exclusive)
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Rock Paper Scissors\nEnter Your Choice", "Rock");
}

getHumanChoice();