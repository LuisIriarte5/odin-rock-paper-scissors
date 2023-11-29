//The next function selects the choice of the usser`s rival, the computer.
function getComputerChoice () {
    switch (Math.floor(Math.random()*3)+1) {
        case 1:
            return "rock";
            break;
        case 2:
            return "papper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

//The next function plays a single rounf of the game
function playRound (playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}, then:`)
    if (playerSelection === "rock"){
        switch (computerSelection) {
            case "rock":
                return "It's a tie";
                break;
            case "papper":
                return "You lost!";
                break;
            case "scissors":
                return "You won!";
                break;
        }
    }
    else if (playerSelection === "papper"){
        switch (computerSelection) {
            case "rock":
                return "You won!";
                break;
            case "papper":
                return "It's a tie";
                break;
            case "scissors":
                return "You lost!";
                break;
        }
    }
    else if (playerSelection === "scissors"){
        switch (computerSelection) {
            case "rock":
                return "You lost!";
                break;
            case "papper":
                return "You won";
                break;
            case "scissors":
                return "It's a tie";
                break;
        }
    }
}

//Ask for the player's choice with a prompt and store the computer selection
// const playerSelection = prompt("Write your play! \nRock, papper or scissors?:");

// const computerSelection = getComputerChoice();



