var img;
function preload(){
  img = loadImage('20230707_102405.jpg');
}

function setup() {
  createCanvas(500, 430);
  background(0);
}

function draw() {
  tint(0,90,100);
  image(img, 0, 0, 250, 430);
  noTint();
  image(img, 250, 0, 250, 430)

}