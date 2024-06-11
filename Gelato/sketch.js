function setup() {
  createCanvas(550, 400);
}

function draw() {
  background('#fbf2e1');
  
  strokeWeight(3)
  translate(2,-30)
  fill('#dfe9ff')
  ellipse(285,143,110,100)
  
  fill(255,225,241)
  ellipse(247,190,110,105)
  
  fill('#c9fdff');
  ellipse(305,190,106,100)
  
  fill(225,214,150)
  translate(-1,-28)
  triangle(198,240,354,240,275,350);
  translate(-1,45)
  triangle(230,240,322,240,275,400);

}