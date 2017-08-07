var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var correctColor = pickColor();
var colorDisplay = document.querySelector("#colorString");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = correctColor;

for(var i = 0; i<squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add event listener
    squares[i].addEventListener("click", function(){
        var selected = this.style.backgroundColor;
        if(selected === correctColor){
            messageDisplay.textContent = "Correct!";
            changeColors(correctColor);
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random =  Math.floor(Math.random() * colors.length + 1);
    return colors[random];
}