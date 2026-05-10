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


