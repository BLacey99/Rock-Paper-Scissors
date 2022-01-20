let i = 0;
let choice;

if(i>5){
    console.log("Finished");
}

function reset() {
    i = 0;
    console.clear();
}
function rock() {
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    choice = "rock";
    i++;
    console.log(i);
    playRound(playerSelection, computerSelection);
    return "rock";
}
function paper() {
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    choice = "paper";
    i++;
    console.log(i);
    playRound(playerSelection, computerSelection);
    return "paper";
}

function scissors() {
    choice = "scissors";
    i++;
    console.log(i);
    let playerSelection = humanPlay(choice);
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
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
                return "Draw.";
            } else if (computerSelection === "paper") {
                console.log("Computer victory.");
                return "Computer victory.";
            } else if (computerSelection === "scissors") {
                console.log("Human victory.");
                return "Human victory.";
            }

            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("Human victory.");
                return "Human victory.";
            } else if (computerSelection === "paper") {
                console.log("Draw.");
                return "Draw.";
            } else if (computerSelection === "scissors") {
                console.log("Computer victory.");
                return "Computer victory.";
            }

            break;
        case "scissors":
            if (computerSelection === "rock") {
                console.log("Computer victory.");
                return "Computer victory.";
            } else if (computerSelection === "paper") {
                console.log("Human victory.");
                return "Human victory.";
            } else if (computerSelection === "scissors") {
                console.log("Draw");
                return "Draw.";
            }

            break;
    }


    playRound(playerSelection, computerSelection);

   // function game() {
       // console.clear();

    }


