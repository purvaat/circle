var xpos = []
var ypos = []
function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(0);
  
  for (var i = 0; i<10; i++){ 
    xpos[i]=map(i,0,9,width/2,mouseX);
    ypos[i]=map(i,0,9,height/2,mouseY);
   
    ellipse(xpos[i],ypos[i],10)
  }
}