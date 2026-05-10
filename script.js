let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3){
    return 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    return 'Paper';
  } else if (randomNumber > 2 / 3 && randomNumber <= 1){
    return 'Scissors';
  }
}

function getHumanChoice(){
  const humanMove = prompt("Enter your move: Rock, Paper, or Scissors");
  return humanMove;
}

function playRound(humanChoice, computerChoice){
  if (humanChoice === computerChoice){
    return "It's a tie!";
  } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
     humanScore++;
  } else if (humanChoice === 'Paper' && computerChoice === 'Rock'){
      humanScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Paper'){
      humanScore++;
  } else {
      computerScore++;
  }
} 

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  function playRound(humanChoice, computerChoice){
  if (humanChoice === computerChoice){
    return "It's a tie!";
  } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
     humanScore++;
  } else if (humanChoice === 'Paper' && computerChoice === 'Rock'){
      humanScore++;
  } else if (humanChoice === 'Scissors' && computerChoice === 'Paper'){
      humanScore++;
  } else {
      computerScore++;
  }
} 

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(`You chose: ${humanSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);



