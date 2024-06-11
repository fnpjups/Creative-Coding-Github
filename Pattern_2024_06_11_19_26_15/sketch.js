function setup() {
  createCanvas(480, 400);
}

function draw() {
  background(0);
  
  var circleSize= 80;

translate(circleSize/2, circleSize/2);
  
for(var x = 0; x < width; x += circleSize) {

for(var y = 0; y < width; y += circleSize) {
  
fill(1*y,100,100);
  ellipse (x, y, circleSize* 1.2, circleSize* 1);
fill(1*y, 100);
  ellipse (x, y, circleSize* 0.8, circleSize* 0.5);
fill(1*y,100,100);
  ellipse (x, y, circleSize* 0.3, circleSize* 0.1);
    }
  }
}