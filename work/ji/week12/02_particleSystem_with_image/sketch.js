var myImage;
var particleSystem;

function preload() {
  myImage = loadImage("assets/image.jpg");
}

function setup() {
  createCanvas(366, 542);
  particleSystem = new ParticleSystem();
  particleSystem.setup();
}

function draw() {
  background(200);
  image(myImage, 0, 0, width, height);
  loadPixels();
  var myPixels = pixels;

  if (mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 1);
  }
  background(100);
  particleSystem.draw( myPixels );

}