let i = 0;
let choice;
let compWin = 0;
let humanWin = 0;

function gameOver() {
    if (compWin === 3) {
        console.log("Computer Wins.");
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("rock").style.opacity = "0.5";
        document.getElementById("paper").style.opacity = "0.5";
        document.getElementById("scissors").style.opacity = "0.5";
        document.getElementById("winnerDeclaration").innerHTML = "The Computer Won.";
        document.getElementById("results").style.visibility = "visible";
        document.getElementById("start").disabled = true;

    } else if (humanWin === 3) {
        console.log("Human Wins.");
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("rock").style.opacity = "0.5";
        document.getElementById("paper").style.opacity = "0.5";
        document.getElementById("scissors").style.opacity = "0.5";
        document.getElementById("winnerDeclaration").innerHTML = "The Human Won.";
        document.getElementById("results").style.visibility = "visible";
        document.getElementById("start").disabled = true;
    }
}

function start() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

    document.getElementById("rock").style.visibility = "visible";
    document.getElementById("paper").style.visibility = "visible";
    document.getElementById("scissors").style.visibility = "visible";


    document.getElementById("rock").style.opacity = "1";
    document.getElementById("paper").style.opacity = "1";
    document.getElementById("scissors").style.opacity = "1";

    document.getElementById("start").style.opacity = "0.5";
    document.getElementById("start").disabled = true;
}

function reset() {
    i = 0;
    compWin = 0;
    humanWin = 0;
    console.clear();
    document.getElementById("computerPoints").innerHTML = `Computer Points: ${compWin}`;
    document.getElementById("humanPoints").innerHTML = `Human Points: ${humanWin}`;
    document.getElementById("rock").style.visibility = "hidden";
    document.getElementById("paper").style.visibility = "hidden";
    document.getElementById("scissors").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "hidden";
    document.getElementById("start").style.opacity = "1";
    document.getElementById("start").disabled = false;

}

function rock() {
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    choice = "rock";
    i++;
    document.getElementById("humanChoice").innerHTML = `Human Choice: Rock`;
    playRound(playerSelection, computerSelection);
    if (i === 5) {
        console.log("Finished");
    }
    gameOver();
    return "rock";

}

function paper() {
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    choice = "paper";
    i++;
    document.getElementById("humanChoice").innerHTML = `Human Choice: Paper`;

    playRound(playerSelection, computerSelection);

    if (i === 5) {
        console.log("Finished");
    }
    gameOver();
    return "paper";
}

function scissors() {
    choice = "scissors";
    i++;
    document.getElementById("humanChoice").innerHTML = `Human Choice: Scissors`;
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (i === 5) {
        console.log("Finished");
    }
    gameOver();
    return "scissors";
}

function computerPlay() {
    const playMaker = Math.floor(Math.random() * 3)
    if (playMaker === 0) {
        console.log("The computer chose rock")
        document.getElementById("compChoice").innerHTML = `Computer Choice: Rock`;
        return "rock";
    } else if (playMaker === 1) {
        console.log("The computer chose paper")
        document.getElementById("compChoice").innerHTML = `Computer Choice: Paper`;
        return "paper";
    } else if (playMaker === 2) {
        console.log("The computer chose scissors")
        document.getElementById("compChoice").innerHTML = `Computer Choice: Scissors`;
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
                document.getElementById("computerPoints").innerHTML = `Computer Points: ${compWin}`;
                console.log("Computer Score: " + compWin);
                return "Computer victory.";
            } else if (computerSelection === "scissors") {
                console.log("Human victory.");
                humanWin++;
                document.getElementById("humanPoints").innerHTML = `Human Points: ${humanWin}`;
                console.log("Human Victory." + humanWin);
                return "Human victory.";
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("Human victory.");
                humanWin++;
                document.getElementById("humanPoints").innerHTML = `Human Points: ${humanWin}`;
                console.log("Human Victory." + humanWin);
                return "Human victory.";
            } else if (computerSelection === "paper") {
                console.log("Draw.");
                i--;
                return "Draw.";
            } else if (computerSelection === "scissors") {
                console.log("Computer victory.");
                compWin++;
                document.getElementById("computerPoints").innerHTML = `Computer Points: ${compWin}`;
                console.log("Computer Score: " + compWin);
                return "Computer victory.";
            }
            break;
        case "scissors":
            if (computerSelection === "rock") {
                console.log("Computer victory.");
                compWin++;
                document.getElementById("computerPoints").innerHTML = `Computer Points: ${compWin}`;
                console.log("Computer Score: " + compWin);
                return "Computer victory.";
            } else if (computerSelection === "paper") {
                console.log("Human victory.");
                humanWin++;
                document.getElementById("humanPoints").innerHTML = `Human Points: ${humanWin}`;
                console.log("Human Victory." + humanWin);
                return "Human victory.";
            } else if (computerSelection === "scissors") {
                console.log("Draw");
                i--;
                return "Draw.";
            }
            break;
    }
}



