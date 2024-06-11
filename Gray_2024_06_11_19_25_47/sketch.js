var img;
function preload(){
  img = loadImage('20230706_191443.jpg');
}

function setup() {
  createCanvas(500, 430);
  background(0);
}

function draw() {
  image(img, 125, 0, 250, 430);
  filter(GRAY);
}