
// Define computers choice
function getComputerChoice() {
    const choices ={
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    };
    return choices[Math.floor(Math.random()*3)];;


}
// Define humans choice
function getHumanChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return prompt("Enter your choice (Rock, Paper, Scissors):");
}

// the results of the computer choice



//the score of the human and computer
let Humanscore = 0;
let Computerscore = 0;

let humanChoice = getHumanChoice();    // We put the getHumanChoice functions result into a variable
let computerChoice = getComputerChoice(); // We put the getComputerChoice functions result into a variable


// Define game rules,
function determineWinner(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        return "tie";
    } else if (HumanChoice === "Rock" && ComputerChoice === "Scissors") {
        return "Player Wins";
    }
      else if (HumanChoice === "Paper" && ComputerChoice === "Rock") {
        return "Player Wins";
    } else if (HumanChoice === "Scissors" && ComputerChoice === "Paper") {
        return "Player Wins";
    } else {
        return "Computer Wins";
    }


}


console.log(humanChoice);   // We make the result of humanChoice appear in console
console.log("Computer chose: " + computerChoice);

let winner = determineWinner(humanChoice, computerChoice); // Use stored values
console.log("Result: " + winner);


function updateScore(winner) {
    if (winner === "Player Wins") {
        Humanscore++;
    } else if (winner === "Computer Wins") {
        Computerscore++;
    }
}

updateScore(winner);


console.log("Human Score:" + Humanscore);
console.log("Computer Score:" + Computerscore);

//*here will setup the game loop and determine the winner */