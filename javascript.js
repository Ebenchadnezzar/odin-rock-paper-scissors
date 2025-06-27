const SCORE_TO_WIN = 5; 

let rockButton = document.querySelector("#rockbtn");
let paperButton = document.querySelector("#paperbtn");
let scissorsButton = document.querySelector("#scissorsbtn");

let humanScore = document.querySelector(".humanScore");
let computerScore = document.querySelector(".computerScore");
let scoreMsg = document.querySelector(".scoreMsg");

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

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

function playRound(e) {
    let humanChoice = e.target.id.slice(0, -3);
    let computerChoice = getComputerChoice();

    if (computerChoice === humanChoice) {   // Draw
        scoreMsg.textContent = "Draw! You both entered " + humanChoice;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper")
    {                                       // Computer Wins
        let curComputerScore = +computerScore.textContent;
        ++curComputerScore;
        computerScore.textContent = curComputerScore;

        scoreMsg.textContent = "You Lose! " + computerChoice + " beats " + humanChoice;

        if (curComputerScore >= SCORE_TO_WIN) {
            onWin("computer");
        }
    }
    else {                                  // Player Wins
        let curHumanScore = +humanScore.textContent;
        ++curHumanScore;
        humanScore.textContent = curHumanScore;

        scoreMsg.textContent = "You Win! " + humanChoice + " beats " + computerChoice;

        if (curHumanScore >= SCORE_TO_WIN) {
            onWin("human");
        }
    }
}

function onWin(winner) {
    let blurMask = document.createElement("div");
    let winContainer = document.createElement("div");
    let replayButton = document.createElement("button");
    let winText = document.createElement("p");

    replayButton.textContent = "Play Again";
    winContainer.classList.toggle("winScreen");
    blurMask.classList.toggle("blurry");

    replayButton.addEventListener("click", () => {
        humanScore.textContent = "0";
        computerScore.textContent = "0";
        scoreMsg.textContent = "Pick an Option!";

        document.querySelector("body").removeChild(blurMask);
        document.querySelector("body").removeChild(winContainer);
    })

    if (winner === "player") {
        winText.textContent = "YOU Won! Congratulations\n";
    }
    else {
        winText.textContent = "COMPUTER Won. Do better lol\n";
    }

    winContainer.appendChild(winText);
    winContainer.appendChild(replayButton);
    document.querySelector("body").appendChild(blurMask);   
    document.querySelector("body").appendChild(winContainer);   
}