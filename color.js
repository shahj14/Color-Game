var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var correctColor = colors[3];
var colorDisplay = document.querySelector("#colorString");

colorDisplay.textContent = correctColor;

for(var i = 0; i<squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add event listener
    squares[i].addEventListener("click", function(){
        var selected = this.style.backgroundColor;
        if(selected === correctColor){
            alert("Correct");
        }
        else{
            alert("Wrong");
        }
    })

}