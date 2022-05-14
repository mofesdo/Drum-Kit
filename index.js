//alert("Yo its working");
var numberOfButtons = document.querySelectorAll(".drum").length;
var audio = new Audio('sounds/tom-1.mp3');
for(var i = 0; i < numberOfButtons; i++){

document.querySelectorAll("button")[i].addEventListener("click", handleClick);
  var buttonInnerHTML = this.innerHTML;
}

function handleClick(){
  audio.play();
}
