//Group memebers: Ali, Angelo, Julianne, Paul

var word1 = "WELCOME TO";
var word2 = "BATH SPA UNIVERSITY";
var font;
var points1 = [];
var points2 = [];

function preload() {
  font = loadFont("R1.ttf");
}

function setup() {
  createCanvas(620, 400);
  noFill(); // Set fill to transparent
  stroke(0); // Set stroke color to black

  // Generate points for the first word
  points1 = font.textToPoints(word1, 145, 180, 50, {
    sampleFactor: 0.25
  });

  // Generate points for the second word
  points2 = font.textToPoints(word2, 50, 230, 50, {
    sampleFactor: 0.25
  });
}

function draw() {
  // Draw interactive gradient background
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c1 = color(255);
    let c2 = color(100, 100, 255);
    let c = lerpColor(c1, c2, inter);
    fill(c);
    stroke(c);
    line(0, y, width, y);
  }

  // Draw and animate points for the first word
  for (var i = 0; i < points1.length; i++) {
    var p = points1[i];
    var distance = dist(mouseX, mouseY, p.x, p.y);

    if (distance < 50) {
      var angle = atan2(p.y - mouseY, p.x - mouseX);
      var offset = map(distance, 0, 50, 10, 0);
      var newX = p.x + cos(angle) * offset;
      var newY = p.y + sin(angle) * offset;
      ellipse(newX, newY, 2, 2);
    } else {
      ellipse(p.x, p.y, 2, 2);
    }
  }

  // Draw and animate points for the second word
  for (var i = 0; i < points2.length; i++) {
    var p = points2[i];
    var distance = dist(mouseX, mouseY, p.x, p.y);

    if (distance < 50) {
      var angle = atan2(p.y - mouseY, p.x - mouseX);
      var offset = map(distance, 0, 50, 10, 0);
      var newX = p.x + cos(angle) * offset;
      var newY = p.y + sin(angle) * offset;
      ellipse(newX, newY, 2, 2);
    } else {
      ellipse(p.x, p.y, 2, 2);
    }
  }
}
