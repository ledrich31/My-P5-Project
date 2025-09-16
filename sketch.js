/// add audio file
/// p5 music library
/// i think you can add your own music (peanuts....)


let words = ["Happy","Sad","Unbothered","YIPPEE!"];
let positions = [];
let imageList = [];

function preload() {
  // load images into array
  imageList[0] = loadImage("pictures/happy_snoop.jpg");
  imageList[1] = loadImage("pictures/sad_snoop.jpg");
  imageList[2] = loadImage("pictures/unbothered_snoop.jpg");
  imageList[3] = loadImage("pictures/yippee_snoop.jpg");
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
  textSize(32);

  positions = [
    createVector(width/2, 50),        // North
    createVector(width/2, height-50), // South
    createVector(100, height/2),      // West
    createVector(width-90, height/2)  // East
  ];
}

function draw() {
  background(240);

  let hoveredIndex = -1;

  // draw words and check hover
  for (let i = 0; i < words.length; i++) {
    if (dist(mouseX, mouseY, positions[i].x, positions[i].y) < 50) {
      fill(200, 0, 100); // highlight magenta color
      hoveredIndex = i;
    } else {
      fill(0);
    }
    text(words[i], positions[i].x, positions[i].y);
  }

  // image box
  stroke(0);
  noFill();
  rect(width/2 - 100, height/2 - 100, 200, 200);

  // show image if hovering
  if (hoveredIndex !== -1) {
    image(imageList[hoveredIndex], width/2 - 100, height/2 - 100, 200, 200);
  }
}
