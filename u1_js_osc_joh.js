"use strict";   //  defines that JavaScript code should be executed in "strict mode".
var user = randomNumber();  //  declare variable user wich will store a random number between 1 - 11. 
var cpu = randomNumber();   
var userScore = user;   //  variable wich will store the total users score. 
var cpuScore = cpu;
// call function print and give it the argument inside the parenthesis.
print("Player drew " + user + 
  "\nPlayer score = " + userScore + 
  "\nComputer drew " + cpu + 
  "\nComputer score = " + cpuScore
);

cpu = randomNumber(); //  store a new random number to cpu.
cpuScore += cpu;  //  adds cpuScore togheter with cpu to get the new score.

print("Computer drew " + cpu +
"\nComputer score = " + cpuScore
); 
//  If cpuScore is equal to 21, then the Computer has won!
if(cpuScore === 21){
  alert("Too Bad! You Loose! \n\nComputer Score: " + cpuScore  + "\n\nPlayer Score: " + userScore)
}
/*
  @desc - makes it possible to lisen to event happening on html page. In this case we are lisening to keybord inputs.
  @param - takes a keyboard inputs as an argument.
  @return - two different outcomes depending on wich key is pressed down.
*/
window.addEventListener("keydown", function(event){
  //  if key D is pressed down, this will happen. 
  if(event.code === "KeyD"){
    user = randomNumber();  //  store a new random number to user.
    print("Player drew " + user);
    userScore += user;  //  adds userScore togheter with user to get the new score.
    print("Player score = " + userScore);
  //  if key S is pressed down, this will happen.
  }else if(event.code === "KeyS"){
    print(randomNumber());

  }
});
/*
  @desc - a function that handels loggs to console.
  @param - takes a string as a parameter to print in console.
  @return string - return a console.log thats includes a string.
 */
function print(word){
  return console.log(word);
}
/*
  @desc - a function thats random pick a number between 1 and 11. 
  @param - does not take an parameter
  @return integer - return a random number between 1-11
*/
function randomNumber(){
  return Math.floor((Math.random() * 11) + 1);
}
