var clear = document.getElementById("clear");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "lightsteelblue";
var start = false;
var startX = 0;
var startY = 0;

var clearCanvas = function(e){
    ctx.clearRect(0,0,500,500);
    start = false;
};

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);
    if (start == false){
	ctx.beginPath();
	circle(x,y);
	ctx.stroke()
	startX = x;
	startY = y;
	start = true;
    }
    else {
	circle(x,y)
	ctx.moveTo(startX, startY)
	ctx.lineTo(x,y);
	startX = x;
	startY = y;
	ctx.stroke();
    }
}

var circle = function(x,y){
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

var print = function(e){
    console.log("clicked");
};

clear.addEventListener("click", clearCanvas);
canvas.addEventListener("click", draw);
