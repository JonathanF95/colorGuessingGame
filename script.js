var colors = arrRandom();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var randomColor;

init();

function init() {
  for (var i = 0; i < 6; i++) {
    squares[i].style.background = colors[i];
    randomColor = Math.floor(Math.random() * 6);
    pickedColor = colors[randomColor];
    colorDisplay.textContent = pickedColor;
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor !== pickedColor) {
        this.style.background = "#232323";
        message.textContent = "Try Again";
      } else {
        resetButton.textContent = "Play Again?";
        message.textContent = "Correct!";
        changeColor(clickedColor);
        h1.style.background = clickedColor;
      }
    });
  }
}

resetButton.addEventListener("click", function() {
  message.textContent = "";
  randomColor = Math.floor(Math.random() * 6);
  colors = arrRandom();
  pickedColor = colors[randomColor];
  h1.style.background = "steelblue";
  resetButton.textContent = "New Colors";
  init();
});

function generateRandomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function arrRandom() {
  var arr = [];
  for (var i = 0; i < 6; i++) {
    arr.push(generateRandomColors());
  }
  return arr;
}

function pickColor() {
  var randomColor = Math.floor(Math.random() * 6);
  return arrRandom()[randomColor];
}

function changeColor(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //changes all colors to match given color
    squares[i].style.backgroundColor = color;
  }
}
