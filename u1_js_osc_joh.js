window.addEventListener("keydown", function(event){
  if(event.code === "KeyD"){
    print(randomNumber());
  }else if(event.code === "KeyS"){
    print(randomNumber());
  }
});
function print(word){
  return console.log(word);
}
function randomNumber(){
  return Math.floor((Math.random() * 11) + 1);
}
