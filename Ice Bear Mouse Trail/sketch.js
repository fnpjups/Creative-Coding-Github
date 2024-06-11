function setup() {
  createCanvas(570, 420);
  background('#85562f');
}

function draw(){
  translate(mouseX - 280,mouseY - 200)
  strokeWeight(0)
  
//Ears
  fill('1')
  ellipse(252,160,14,18)
  ellipse(296,160,14,18)

//Inner Ears
  fill('#ffe7e6');
  ellipse(252,160,7,9)
  ellipse(296,160,7,9)
  
//Head
  fill('white')
  ellipse(275,200,100,80)

//Face
  fill(0);
  ellipse(275,205,20,10);
  
  circle(255,190,8)
  circle(294,190,8)
  
  arc(275,193,13,5,1800,0)
  
  arc(275,225,16,5,1800,0)
}
function mousePressed(){
  background('#85562f');
}