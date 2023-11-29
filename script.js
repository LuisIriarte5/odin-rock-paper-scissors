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

//The next function will ask the user to introduce his/her choice with a prompt
function getUserChoice () {

    let choice = prompt("Introduce your choice.\nRock, papper or scissors:");

    choice = choice.toLowerCase().trim(); //convert all to lower case and eliminate whitespace if theres any.
    
    if (choice === 'rock' || choice === 'papper' || choice === 'scissors') {
        return choice;
    }
    else {
        return false;//If the user introduces anything but a valid option, it will return false
    }
}

//The next function plays a single rounf of the game
function playRound (playerSelection, computerSelection) {
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

function game () {

    let user = getUserChoice();
    let computer = getComputerChoice();

    if (user === false) {
        while (!user) {
            console.log("Wrong selection, please try again. Check your writting.");
            user = getUserChoice();
        }   
    }

    let roundResult = playRound(user, computer);
    console.log(`You selected ${user} and the computer selected ${computer}, then:\n${roundResult}`); 

}

game();