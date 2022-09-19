const audio = new Audio();
var numberOfDrumButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;



    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {


  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {


  switch (key) {
    case "f":
      audio.src = "sounds/FAKE-LOVE.mp3";
      audio.play();
      break;

      case "d":
        audio.src = 'sounds/dynamit.mp3';
        audio.play();
        break;


    case "u":
      audio.src = 'sounds/universe.mp3';
      audio.play();
      break;




    default: console.log(key);

  }
}



function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
