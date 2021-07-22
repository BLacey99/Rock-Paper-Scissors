


function  computerPlay(){
const playMaker = Math.floor(Math.random() * 3)
    if (playMaker === 0){
        console.log("The computer chose rock")
        return 0;
    }else if (playMaker === 1){
        console.log("The computer chose paper")
        return 1;
    }else if (playMaker === 2){
        console.log("The computer chose scissors")
        return 2;
    }
}



function playRound(playerSelection, computerSelection){
    if (playerSelection > computerSelection){
        return "Human victory.";
    }else if (playerSelection < computerSelection){
        return "Computer victory.";
    }else if (playerSelection == computerSelection){
        return "Draw!";
}
}

function humanPlay(){
    let choice = prompt("Please type either rock, paper, or scissors.");
    choice.toLowerCase();
    if (choice = "rock"){
        return 0;
    }else if (choice = "paper"){
        return 1;
    }else if (choice = "scissors"){
        return 2;
    }else{
        alert("Error, please enter an answer.");
    }
}

const playerSelection = humanPlay();
const computerSelection = computerPlay();