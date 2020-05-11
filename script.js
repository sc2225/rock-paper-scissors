let playerScore = 0; 
let computerScore = 0;
let roundCount = 0;

function computerPlay() {
    let randNum = Math.floor(Math.random() * 13);
    if (randNum <= 3) {
        return "rock";
    } else if (randNum > 3 && randNum <=7) {
        return "paper";
    } else if (randNum > 7) {
        return "scissors";
    }
}



function playRound(playerSelection, computerSelection) {
    roundCount++;
    const resultString = document.querySelector('p#resultsString');
    const roundString = document.querySelector('p#round_counter');
    playerSelection = playerSelection.toLowerCase();

    if (roundCount < 6) {
        console.log(roundCount);
        //empty winner string
        const winner = document.querySelector('p#winner');
        winner.textContent="";
 

        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                computerScore++;
                resultString.textContent = `You Lose! Paper beats Rock`;
            } else if (computerSelection == "scissors") {
                playerScore++;
                resultString.textContent = `You Win! Rock beats Scissors!`
            } else {
                resultString.textContent = `TIE!!! No one wins!`
            }
        } else if(playerSelection == "paper") {
            if (computerSelection == "rock") {
                playerScore++;
                resultString.textContent= `You Win! Paper beats Rock`
            } else if (computerSelection == "scissors") {
                computerScore++;
                resultString.textContent = `You Lose! Scissors beats Paper!`
            } else {
                resultString.textContent = `TIE!!! No one wins!`
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                playerScore++;
                resultString.textContent = `You win! Scissors beats paper`
            } else if (computerSelection == "rock") {
                computerScore++;
                resultString.textContent = `You Lose! Rock beats Scissors!`
            } else {
                resultString.textContent = `TIE!!! No one wins!`
            }
        }

        if (roundCount == 5) {
            const winner = document.querySelector('p#winner');
        
                if (playerScore > computerScore) {
                    winner.textContent= "Player wins the game";
                } else {
                    winner.textContent = "Computer wins the game";
                }
                
        }
        roundString.textContent = `Round ${roundCount} | Player Score: ${playerScore} | Computer Score: ${computerScore}`
       
    } 
}

const buttons = document.querySelectorAll('.choice_btn');


buttons.forEach((b) => {
    b.addEventListener('click', (a) => {

        if (roundCount < 5) {
            playRound(b.id, computerPlay());
        } else {
            roundCount = 0;
            playerScore = 0;
            computerScore = 0;
            playRound(b.id, computerPlay());
        }
            

            
    
     });
});
