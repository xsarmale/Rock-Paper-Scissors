let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-scor");
const computerScore_span = document.getElementById("computer-scor");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convert(letter)
{
    if(letter == "r") return "Rock";
    if(letter == "p") return "Papper";
    return "Scissors"
}

function getComputerChoive(){
    
    const choices = ['r','p','s'];
    
    const randomNumber = Math.floor(Math.random() * 3);
    
    return choices[randomNumber];
}


function win(user, computer){
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHtml = computerScore;
    result_p.innerHTML = convert(user)+"(user)" + " beats " + convert(computer)+"(comp)" + ". You Win!";
}

function lose(user, computer){   
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(computer)+"(comp)" + " beats " + convert(user)+"(user)" + ". You Lose!"
}

function draw(user, computer){
    result_p.innerHTML = convert(user)+"(user)" + " equals " + convert(computer)+"(comp)" + ". Is a Draw!"
}

function game(userChoice){
    
    const computerChoice = getComputerChoive();
    
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
            
    }
    
}


function main(){
    

    rock_div.addEventListener('click',function(){
        game("r");
    })

    paper_div.addEventListener('click',function(){
        game("p");
    })

    scissors_div.addEventListener('click',function(){
        game("s");
    })
 
}

main();