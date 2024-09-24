var numberDrum = document.querySelectorAll(".drum").length;
// document.addEventListener("keypress", function halo(event) {
//   console.log("");
// });

//sound function
function MakeSound(btn) {
  switch (btn) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

// keypress mode
document.addEventListener("keypress", function (event) {
  MakeSound(event.key);
  BtnAnimation(event.key);
});

// animation
function BtnAnimation(Key) {
  var activeKey = document.querySelector("." + Key);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}

for (var a = 0; a <= numberDrum; a++) {
  document.querySelectorAll(".drum")[a].addEventListener("click", function getClicked() {
    // alert("clicked");
    //console.log(this.innerHTML);
    var ButtonInnerHTML = this.innerHTML;
    MakeSound(ButtonInnerHTML);
    BtnAnimation(ButtonInnerHTML);
  });
}
