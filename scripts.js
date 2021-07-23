

function  computerPlay(){
const playMaker = Math.floor(Math.random() * 3)
    if (playMaker === 0){
        console.log("The computer chose rock")
        return "rock";
    }else if (playMaker === 1){
        console.log("The computer chose paper")
        return "paper";
    }else if (playMaker === 2){
        console.log("The computer chose scissors")
        return "scissors";
    }
}


function humanPlay(){
    let choice = prompt("Please type either rock, paper, or scissors.");
    choice.toLowerCase();
    console.log(`You have chosen:${choice}.`);
    if (choice === "rock"){
        return "rock";
    }else if (choice === "paper"){
        return "paper";
    }else if (choice === "scissors"){
        return "scissors";
    }else{
        alert("Error, please enter an answer.");
    }
}

    let playerSelection = humanPlay();
    const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock": 
            if (computerSelection === "rock"){
                return "Draw.";
            }else if (computerSelection === "paper"){
                return "Computer victory.";
            }else if (computerSelection === "scissors"){
                return "Human victory.";
            }
        
            break;
        case "paper":
            if (computerSelection === "rock"){
                return "Human victory.";
            }else if (computerSelection === "paper"){
                return "Draw.";
            }else if (computerSelection === "scissors"){
                return "Computer victory.";
            }
        
            break;
        case "scissors":
            if (computerSelection === "rock"){
                return "Computer victory.";
            }else if (computerSelection === "paper"){
                return "Human victory.";
            }else if (computerSelection === "scissors"){
                return "Draw.";
            }
        
            break;
    }

}

    

/*function game(){
    console.log(playRound(playerSelection, computerSelection));
    humanPlay();
    computerPlay();
    
    }
*/




