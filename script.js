function btnRock(){
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'Scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'Rock'){
    result = 'Tie';
  } else if (computerMove === 'Paper'){
    result = 'You lose';
  } else if (computerMove === 'Scissors'){
    result = 'You win'
  }
  alert(`You picked Rock. Computer picked ${computerMove}. ${result}`);
}

function btnPaper(){
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'Scissors';
  }
  console.log(computerMove);

  let result = '';

  if (computerMove === 'Rock'){
    result = 'You win';
  } else if (computerMove === 'Paper'){
    result = 'Tie';
  } else if (computerMove === 'Scissors'){
    result = 'You lose';
  }
  alert(`You picked Paper. Computer picked ${computerMove}. ${result}`);
}
