"use strict";   //  defines that JavaScript code should be executed in "strict mode".
var user = randomNumber();  //  declare variable user wich will store a random number between 1 - 11.
var cpu = randomNumber();  //  declare variable cpu wich will store a random number between 1 - 11.
var userScore = user;   //  variable wich will store the total user score. 
var cpuScore = cpu;  //  variable wich will store the total cpu score.
// call function print and give it the argument inside the parenthesis.
print("Player drew " + user + "\nPlayer score = " + userScore + "\nComputer drew " + cpu + "\nComputer score = " + cpuScore);
cpu = randomNumber(); //  store a new random number to cpu.
cpuScore += cpu;  //  add cpuScore togheter with cpu to get the new score.
print("Computer drew " + cpu + "\nComputer score = " + cpuScore); 
//  If cpuScore is equal to 21, then the Computer has won!
if(cpuScore === 21){
  alert("Too Bad! You Lose! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
}
print("Scores: Player " + userScore + " Computer: " + cpuScore + "\nDraw a new card(D) or stay(S)");
/** 
 * @desc - makes it possible to lisen to event happening on html page. In this case we are lisening to keybord inputs.
 * @param - takes a keyboard inputs as an argument.
 * @return - two different outcomes depending on wich key is pressed down.
 */
window.addEventListener("keydown", function(event){
  //  if key D is pressed down, this will happen. 
  if(event.code === "KeyD"){
    user = randomNumber();  //  store a new random number to user.
    userScore += user;  //  add userScore togheter with user to get the new score.
    print("Player drew " + user + "\nPlayer score = " + userScore);
    //  if uscerScore is equal to 21 player win.
    if(userScore === 21){
      alert("You won! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    }
    else if(userScore > 21){  //  if userScore is greater than 21 player lose.
      alert("Too Bad! You Lose! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
    }
  }
  //  if key S is pressed down, this will happen.
  else if(event.code === "KeyS"){
    print("Player Stopped!")  //  print to console. 
    if(cpuScore < 17){
      cpu = randomNumber();  //  store a new random number to cpu.
      cpuScore += cpu;  //  add cpuScore togheter with user to get the new score.
      print("Computer drew " + cpu + "\nComputer score " + cpuScore);
      //  if (21-userScore) is less than (21-cpuScore) player win.
      if((21 - userScore) < (21 - cpuScore)){
        alert("You won! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
      }
      else if((21 - userScore) > (21 - cpuScore)){  //  if (21-userScore) is greater than (21-cpuScore) player win.
        alert("Too Bad! You Lose! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
      }
      else if(userScore === cpuScore){  //  if userScore is equal to cpuScore its a draw.
        alert("It's a draw! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
      }
      else if(cpuScore > 21){  //  if cpuScore is greater than 21 player win.
        alert("You won! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore);
      }
    }
  }
});
/**
 * @desc - a function that handels loggs to console.
 * @param string word - takes a string as a parameter to print in console.
 * @return return a console.log thats includes a string.
 */
function print(word){
  return console.log(word);
}
/**
 * @desc - a function thats random pick a number between 1 and 11.
 * @return integer - return a random number between 1-11
 */
function randomNumber(){
  return Math.floor((Math.random() * 11) + 1);
}