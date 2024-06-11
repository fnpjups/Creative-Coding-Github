var soundFile;
var fft;

function preload() {
  soundFile = loadSound('Chappell Roan - Good Luck, Babe!.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(220);

  fft = new p5.FFT();
  fft.setInput(soundFile);

  soundFile.play();
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  
  var barWidth = 50;
  
  var vol1 = map(spectrum[10], 0, 255, 0, 400);
  var vol2 = map(spectrum[20], 0, 255, 0, 400);
  var vol3 = map(spectrum[30], 0, 255, 0, 400);
  var vol4 = map(spectrum[40], 0, 255, 0, 400);
  var vol5 = map(spectrum[50], 0, 255, 0, 400);

  fill(214, 46, 2);
  rect(70, 400, barWidth, -vol1);

  fill(255, 154, 86);
  rect(120, 400, barWidth, -vol2);

  fill(225);
  rect(170, 400, barWidth, -vol3);

  fill(209, 98, 164);
  rect(220, 400, barWidth, -vol4);

  fill(163, 2, 98);
  rect(270, 400, barWidth, -vol5);

  console.log(vol1, vol2, vol3, vol4, vol5);
}
