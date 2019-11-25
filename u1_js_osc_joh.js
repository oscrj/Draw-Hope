"use strict";   //  defines that JavaScript code should be executed in "strict mode".
// Declare vaiables and give them value 0 at the beginning of the game, they will store player and computer total scores.
var userScore = 0, cpuScore = 0;

function init(){
  userDraw();  //  call function userDraw to recive a new card which will be added and returnd in users total score.
  cpuDraw();  //  call function cpuDraw to recive a new card which will be added and returnd in cpus total score.
  cpuDraw();
  checkResults();
  // call function print and give it the argument inside the parenthesis.
  print("Scores: Player " + userScore + " Computer: " + cpuScore + "\nDraw a new card(D) or stay(S)");
}

/** 
 * @desc - makes it possible to lisen to event happening on html page. In this case we are lisening to keybord inputs.
 * @param - takes a keyboard inputs as an argument.
 */
window.addEventListener("keydown", function(event){
  //  if key D is pressed down, this will happen. 
  if(event.code === "KeyD"){
    userDraw();
    checkResults();
  }
  //  if key S is pressed down, this will happen.
  else if(event.code === "KeyS"){
    print("Player Stopped!")
    //  if cpuScore is less than 17. Computer will draw a new card.
    if(cpuScore < 17){
      cpuDraw();
    }
    finalScore();
  }
});

/**
 * @desc - a function that will draw a new card using randomNumber function and will add this new card to player score.
 * @return integer - return the new score.
 */
function userDraw(){
  let user = randomNumber();  //  store a random number to variable user.
  userScore += user;  //  add the new random number stored in user togheter with userScore to get th new total user scores.
  // call function print and give it the argument inside the parenthesis.
  print("Player drew " + user + "\nPlayer score = " + userScore);
  return userScore;  // return the new score.
}

/**
 * @desc - a function that will draw a new card using randomNumber function and will add this new card to computer score.
 * @return integer - return the new score.
 */
function cpuDraw(){
  let cpu = randomNumber();  //  store a random number to cpu.
  cpuScore += cpu;  //  add the new random number stored in cpu togheter with cpuScore to get the new total cpu scores.
  print("Computer drew " + cpu + "\nComputer score " + cpuScore);
  return cpuScore; // return the new score.
}

function checkResults(){
  //  If cpuScore is equal to 21, then the Computer has won!
  if(cpuScore === 21){
    //  Use window method alert() to give player information regading the outcome of the game.
    alert("Too Bad! You Lose! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }
  else if(cpuScore > 21){  //  If cpuScore is greater than 21 player win.
    alert("You won! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }
  //  if uscerScore is equal to 21 player win.
  if(userScore === 21){
    alert("You won! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }
  else if(userScore > 21){  //  if userScore is greater than 21 player lose.
    alert("Too Bad! You Lose! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }  
}

function finalScore(){
  //  if cpuScore is greater than 21 player win.
  if(cpuScore > 21){
    alert("You won! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }
  else if(userScore === cpuScore){  //  if userScore is equal to cpuScore its a draw.
    alert("It's a draw! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }
  else if((21 - userScore) < (21 - cpuScore)){  //  if (21-userScore) is less than (21-cpuScore) player win.
    alert("You won! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }
  else if((21 - userScore) > (21 - cpuScore)){  //  if (21-userScore) is greater than (21-cpuScore) computer win.
    alert("Too Bad! You Lose! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    resetGame();
  }
}

/**
 * @desc - a function that handels log to console.
 * @param string msg - takes a string as a parameter to print in console.
 */
function print(msg){
  console.log(msg);
}

/**
 * @desc - a function thats random pick a number between 1 and 11.
 * @return integer - return a random number between 1-11
 */
function randomNumber(){
  return Math.floor((Math.random() * 11) + 1);
}

function resetGame(){
  userScore = 0;
  cpuScore = 0;
  init();
}

document.addEventListener("DOMContentLoaded", init);