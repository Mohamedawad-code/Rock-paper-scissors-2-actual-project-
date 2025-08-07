
// the computers choice
function getComputerChoice() {
    const choices ={
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    };
    return choices[Math.floor(Math.random()*3)];;


}
// The human/players choice
function getHumanChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return prompt("Enter your choice (Rock, Paper, Scissors):");
}

// the results in console log
console.log(getComputerChoice());
console.log(getHumanChoice());

//the score
let Humanscore = 0;
let Computerscore = 0;


// *here we setup point system, and hiarchy of the game
function determineWinner(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        return "tie";
    } else if (getHumanChoice === "Rock" && getComputerChoice === "Scissors"){
        return "Player Wins";
    }
      else if (getHumanChoice === "Paper" && getComputerChoice === "Rock") {
        return "Player Wins";
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Paper") {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }


}

console.log(determineWinner(getHumanChoice, getComputerChoice));

const winner = determineWinner(getHumanChoice(), getComputerChoice());

function updateScore(winner) {
    if (winner === "Player Wins") {
        Humanscore++;
    } else if (winner === "Computer Wins") {
        Computerscore++;
    }
}

console.log("Human Score:" + Humanscore);
console.log("Computer Score:" + Computerscore);

//*here will setup the game loop and determine the winner */