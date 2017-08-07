var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var correctColor = pickColor();
var colorDisplay = document.querySelector("#colorString");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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
            h1.style.backgroundColor = correctColor;
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
    var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //add num random colors to array
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);

    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    return rgb;
}

