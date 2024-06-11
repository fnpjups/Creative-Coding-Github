var img, x,y;
function preload(){
  img = loadImage('20230707_102405.jpg');
}

function setup() {
  createCanvas(500, 430);
  background(0);
  noStroke();
}

function draw() {
  x = random(width)
  y = random(height)
  image(img,0,0,250,430);
  var c = img.get(x,y);
  fill(c[0], c[1], c[2], 50);
  ellipse(x,y, 30,30);
}