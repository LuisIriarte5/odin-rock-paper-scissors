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
function getUserChoice (message) {

    let choice = prompt(message);

    if (choice === null) {return false;}

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
                return "You lose!";
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
                return "You lose!";
                break;
        }
    }
    else if (playerSelection === "scissors"){
        switch (computerSelection) {
            case "rock":
                return "You lose!";
                break;
            case "papper":
                return "You won!";
                break;
            case "scissors":
                return "It's a tie";
                break;
        }
    }
}

function game () {

    //Generate the user and computer choices
    let user = getUserChoice("Introduce your choice.\nRock, papper or scissors:");
    let computer = getComputerChoice();

    //check if the user had introduced an invalid choice, and ask to introduce it again until correct
    if (user === false) {
        while (!user) {
            user = getUserChoice("Wrong selection, please try again. Check your writting.\nRock, papper, scissors:");
        }   
    }

    //Check the result
    let roundResult = playRound(user, computer);

    //Add the quantity of user and computer wins
    switch (roundResult) {
        case "You won!":
            userWon += 1;
            break;
        case "You lose!":
            computerWon += 1;
            break;
        case "It's a tie":
            break;
    }

    //Print in the console the result
    console.log(`You selected ${user} and the computer selected ${computer}, then:\n${roundResult}`);
    console.log(`user ${userWon} - ${computerWon} computer`);
}

// create two variables to control the best-out-of five
let userWon = 0;
let computerWon = 0;

//Repeat until somebody win 3 times (best-out-of 5)
while (userWon < 3 && computerWon < 3) {
    game();
}

if (userWon === 3) {
    console.log("YOU ARE A WINNER!");
} else {
    console.log("YOU ARE A LOOSER!");
}