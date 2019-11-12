var user = randomNumber();  //declare variable user wich will store a random number between 1 - 11. 
var cpu = randomNumber();   //declare variable cpu wich will store a random number between 1 - 11.
var userScore = user;   //variable wich will store the total users score. 
var cpuScore = cpu;   //variable wich will store the total cpu score.
print("Player drew " + user);  //call function print and give it the argument inside the parenthesis.
print("Player score = " + userScore);
print("Computer drew " + cpu);
print("Computer score = " + cpuScore);
cpu = randomNumber();
print("Computer drew " + cpu);
print("Computer score = " + (cpuScore + cpu)); //call function print to logg in console and added the cpuScore with the new random number stored in cpu 


window.addEventListener("keydown", function(event){
  if(event.code === "KeyD"){
    print("Player draw " + user);

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
  @param - does not have a parameter
  @return integer - return a random number between 1-11
*/
function randomNumber(){
  return Math.floor((Math.random() * 11) + 1);
}
