console.log('Hello Js');

function getComputerChoice(){
    // 1. string values
    let stringValues = ["rock", "scissors", "paper"];
    // 2. random no - only 3 numbers = 0, 1, 2
    let randomNo = Math.floor(Math.random()*10/4);
    // 3. choice last
    let choice = stringValues[randomNo];
    return choice;
}



function getHumanChoice(){ // 1. string values and 2. returned value array element 
    const ask = prompt('Tell me the choice you like: ');
    return ask;
}




let humanScore=0, computerScore =0;
function playRound(humanChoice, computerChoice){


    

    // 1. logic of paper beats rock, rock beats scissors, scissors beat paper
    if(humanChoice === 'paper' && computerChoice !== 'paper'){
        if(computerChoice === 'rock'){
            console.log(`You won! ${humanChoice}(human) beats ${computerChoice}(computer)`);
            humanScore++;
        }
        else{
            console.log(`You lose! ${computerChoice}(computer) beats ${humanChoice}(human)`);
            computerScore++;
        }
    }
    else if(humanChoice === 'rock' && computerChoice !== 'rock'){
        if(computerChoice === 'scissors'){
            console.log(`You won! ${humanChoice}(human) beats ${computerChoice}(computer)`);
            humanScore++;
        }
        else{
            console.log(`You lose! ${computerChoice}(computer) beats ${humanChoice}(human)`);
            computerScore++;
        }
    }
    
    else if(humanChoice === 'scissors' && computerChoice !== 'scissors'){
        if(computerChoice === 'paper'){
            console.log(`You won! ${humanChoice}(human) beats ${computerChoice}(computer)`);
            humanScore++;
        }
        else{
            console.log(`You lose! ${computerChoice}(computer) beats ${humanChoice}(human)`);
            computerScore++;
        }
    }
    // 2. for equal scores
    else if((humanChoice === 'paper' && computerChoice === 'paper') || (humanChoice === 'rock' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'scissors')){
        console.log(`Equal scores! ${computerChoice}(computer) equals ${humanChoice}(human)`);
    }

}

function playGame(){
    // 1. five times call playRound and store it in each time
    console.log(`Initial humanScore is ${humanScore}`);
    console.log(`Initial computerScore is ${computerScore}`);
    for(let i=0; i<5; i++){
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i+1}: `);
        playRound(humanChoice, computerChoice);
        console.log(`humanScore is ${humanScore}`);
        console.log(`computerScore is ${computerScore}`);
    }

    // 2. compare computerScore and declare a winner
    console.log(`Final humanScore is ${humanScore}`);
    console.log(`Final computerScore is ${computerScore}`);
    if(computerScore > humanScore){
        console.log('The computer score is more');
        alert('Computer wins');
    }
    else if(computerScore < humanScore){
        console.log('The human score is more');
        alert('Human wins');
    }
    else{
        console.log('Both levels');
        alert('Both wins');
    }
}


// console.log(humanChoice);
// console.log(computerChoice);
// const play = playRound(humanChoice, computerChoice);
// console.log(play);

const playGames = playGame();
console.log(playGames);
