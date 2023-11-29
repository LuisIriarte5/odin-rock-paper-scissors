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
        default:
            return "other?"
            break;
    }
}