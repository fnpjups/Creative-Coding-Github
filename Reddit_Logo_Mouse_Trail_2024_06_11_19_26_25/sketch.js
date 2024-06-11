function setup() {
  createCanvas(570, 420);
  background('#FF4500');
}

function draw() {
  strokeWeight(0)
  fill('1')
  translate(mouseX - 282,mouseY - 210)
//Head
  ellipse(285,210,65,45)
  
//Ears
  circle(255,202,20)
  circle(313,202,20)
  
//Face
  fill('#FF4500');
  circle(273,207,12)
  circle(297,207,12)
  
  fill('1')
  strokeWeight(3)
  stroke('#FF4500')
  arc(285,220,20,10,0,1800)
  
//antenna
  stroke('white')
  line(285,187,290,173)
  line(290,173,305,175)
  circle(305,175,10)
}
function mousePressed(){
  background('#FF4500');
}