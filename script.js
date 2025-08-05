function getComputerChoice() {
    const choices ={
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    };
    return choices[Math.floor(Math.random()*3)];;


}

function getHumanChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return prompt("Enter your choice (Rock, Paper, Scissors):");
}


console.log(getComputerChoice());
console.log(getHumanChoice());