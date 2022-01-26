let i = 0;
let choice;

let compWin = 0;
let humanWin = 0;

function reset() {
    i = 0;
    compWin = 0;
    humanWin = 0;
    console.clear();
}
function rock() {
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    choice = "rock";
    i++;
    console.log(i);
    playRound(playerSelection, computerSelection);

    if (i === 5) {
        console.log("Finished");
    }


    if (compWin === 3) {
        console.log("Computer Wins.");
        
    } else if (humanWin === 3) {
        console.log("Human Wins.");

    }

    return "rock";

}
function paper() {
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    choice = "paper";
    i++;
    console.log(i);
    playRound(playerSelection, computerSelection);

    if (i === 5) {
        console.log("Finished");
    }


    if (compWin === 3) {
        console.log("Computer Wins.");
    } else if (humanWin === 3) {
        console.log("Human Wins.");

    }

    return "paper";
}

function scissors() {
    choice = "scissors";
    i++;
    console.log(i);
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    if (i === 5) {
        console.log("Finished");
    }


    if (compWin === 3) {
        console.log("Computer Wins.");
    } else if (humanWin === 3) {
        console.log("Human Wins.");

    }

    return "scissors";
}

function computerPlay() {
    const playMaker = Math.floor(Math.random() * 3)
    if (playMaker === 0) {
        console.log("The computer chose rock")
        return "rock";
    } else if (playMaker === 1) {
        console.log("The computer chose paper")
        return "paper";
    } else if (playMaker === 2) {
        console.log("The computer chose scissors")
        return "scissors";
    }
}

function humanPlay(choice) {
    console.log(`You have chosen:${choice}.`);
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                console.log("Draw.");
                i--;
                return "Draw.";
            } else if (computerSelection === "paper") {
                console.log("Computer victory.");
                compWin++;
                document.getElementById("computerPoints").innerHTML =`Computer Points: ${compWin}`;
                console.log("Computer Score: " + compWin);
                return "Computer victory.";
            } else if (computerSelection === "scissors") {
                console.log("Human victory.");
                humanWin++;
                document.getElementById("humanPoints").innerHTML =`Human Points: ${humanWin}`;
                console.log("Human Victory." + humanWin);
                return "Human victory.";
            }

            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("Human victory.");
                humanWin++;
                document.getElementById("humanPoints").innerHTML =`Human Points: ${humanWin}`;
                console.log("Human Victory." + humanWin);
                return "Human victory.";
            } else if (computerSelection === "paper") {
                console.log("Draw.");
                i--;
                return "Draw.";
            } else if (computerSelection === "scissors") {
                console.log("Computer victory.");
                compWin++;
                document.getElementById("computerPoints").innerHTML =`Computer Points: ${compWin}`;
                console.log("Computer Score: " + compWin);

                return "Computer victory.";
            }

            break;
        case "scissors":
            if (computerSelection === "rock") {
                console.log("Computer victory.");
                compWin++;
                document.getElementById("computerPoints").innerHTML =`Computer Points: ${compWin}`;
                console.log("Computer Score: " + compWin);
                return "Computer victory.";
            } else if (computerSelection === "paper") {
                console.log("Human victory.");
                humanWin++;
                document.getElementById("humanPoints").innerHTML =`Human Points: ${humanWin}`;
                console.log("Human Victory." + humanWin);
                return "Human victory.";
            } else if (computerSelection === "scissors") {
                console.log("Draw");
                i--;
                return "Draw.";
            }

            break;
    }


    playRound(playerSelection, computerSelection);

    // function game() {
    // console.clear();

}



