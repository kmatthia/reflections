var song
let img, img2, img3;
let footSteps;
let play;
let offset = 2;
let easing = 0.05;


function preload () {
  img = loadImage('images/mehappy.jpg');
  img2 = loadImage('images/eyes.jpg');
  img3 = loadImage('images/shoes.png');
  img4 = loadImage('images/beach.jpg')
  song = loadSound('sound/piano.mp3');
  font = loadFont("font/Times New Roman.ttf");
  
  soundFormats('wav');
  footSteps = loadSound('sound/steps.wav');
  
}
function setup() {
  createCanvas(2000, 2000);

  image(img, 100, 150, 200, 200);
  image(img2, 300, 150, 200, 200);
  song.play()
  song.setVolume(1)
  
  

}

function draw() {
  image(img2, 2, 2); // Display at full opacity
  let dx = mouseX - img2.width / 5 - offset;
  offset += dx * easing;
  tint(250, 127); // Display at half opacity
  image(img2, offset, 3);

  image(img, 2, 2); // Display at full opacity
  image(img3, 1, 1); // Display full opacity;
  
  size = dist(mouseX, mouseY, pmouseX, pmouseY)
  //changes color of squares depending on speed and position
  //of mouse cursor.
  fill(mouseX, mouseY, random(200, 220), 100);
  square(mouseX, mouseY, size, size);
  noStroke();
  if (mouseIsPressed) {
    size = dist(mouseX, mouseY, pmouseX, pmouseY)
    fill(mouseX, mouseY, random(100, 120));
    square(mouseX, mouseY, size, size);
    noStroke();
  }
  
}