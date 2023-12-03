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

function reset() {
    result.appendChild(finalResult);

    rockBtn.removeEventListener('click', game);
    papperBtn.removeEventListener('click', game);
    scissorsBtn.removeEventListener('click', game);

    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Wanna play again?";
    result.appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
        userWon = 0;
        computerWon = 0;

        gameResult.textContent = '';
        score.textContent = '';
        finalResult.textContent = '';

        rockBtn.addEventListener('click', game);
        papperBtn.addEventListener('click', game);
        scissorsBtn.addEventListener('click', game);

        result.removeChild(resetBtn);
    });
}

function game (event) {
    //Generate the user and computer choices
    let user = event.srcElement.getAttribute('id');
    let computer = getComputerChoice();

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
    gameResult.textContent = `You selected ${user} and the computer selected ${computer}, then:\n${roundResult}`;
    score.textContent = `user ${userWon} - ${computerWon} computer`;

    if (userWon >= 3) {
        finalResult.textContent = `YOU ARE A WINNER!`;
        reset();
    } else if (computerWon >= 3) {
        finalResult.textContent = `YOU ARE A LOOSER!`
        reset();
    }
}

// create two variables to control the best-out-of five
let userWon = 0;
let computerWon = 0;

//User selection event listeners
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', game);

const papperBtn = document.querySelector('#papper');
papperBtn.addEventListener('click', game);

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', game);

const result = document.querySelector('.result');
const gameResult = document.querySelector('#gameResult');
const score = document.querySelector('#score');
const finalResult = document.createElement('p');
