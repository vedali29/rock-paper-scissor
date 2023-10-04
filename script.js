let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber= Math.floor(Math.random()*3);
    return choices[randomNumber];
}

// console.log(getComputerChoice());
function convertTool(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
 }

function wins(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);
    result_div.innerHTML= convertTool(userChoice)+" beats "+convertTool(computerChoice)+" You won!";
    // console.log("win");
    // console.log("userScore");
}
function loses(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);
    result_div.innerHTML= convertTool(userChoice)+" loses to "+convertTool(computerChoice)+" You lost!";
    // console.log("lose");
}
function draw(userChoice,computerChoice){
    result_div.innerHTML= convertTool(userChoice)+" equals to "+convertTool(computerChoice)+" It's a draw !";
    console.log("draw");
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}


function main(){

rock_div.addEventListener('click',function(){
    game("r")
})
paper_div.addEventListener('click',function(){
    game("p");
})
scissor_div.addEventListener('click',function(){
    game("s");
})
}
main();
