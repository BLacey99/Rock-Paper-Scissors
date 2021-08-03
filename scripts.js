function game() {
    for (i = 0; i < 5; i++) {
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


        function humanPlay() {
            let choice = prompt("Please type either rock, paper, or scissors.");
            choice.toLowerCase();
            console.log(`You have chosen:${choice}.`);
            if (choice === "rock") {
                return "rock";
            } else if (choice === "paper") {
                return "paper";
            } else if (choice === "scissors") {
                return "scissors";
            } else {
                alert("Error, please enter an answer.");
            }
        }

        let playerSelection = humanPlay();
        let computerSelection = computerPlay();


        function playRound(playerSelection, computerSelection) {

            switch (playerSelection) {
                case "rock":
                    if (computerSelection === "rock") {
                        console.log("Human victory.");
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

        }
        playRound(playerSelection, computerSelection);
    }

}







