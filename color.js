var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var correctColor = pickColor();
var colorDisplay = document.querySelector("#colorString");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("#newColors");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


colorDisplay.textContent = correctColor;

newColors.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New Colors";
});

easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected");
    this.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    this.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


for(var i = 0; i<squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add event listener
    squares[i].addEventListener("click", function(){
        var selected = this.style.backgroundColor;
        if(selected === correctColor){
            messageDisplay.textContent = "Correct!";
            uniformColors(correctColor);
            h1.style.backgroundColor = correctColor;
            newColors.textContent = "Play Again";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function uniformColors(color){
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

