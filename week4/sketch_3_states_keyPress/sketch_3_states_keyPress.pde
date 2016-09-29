//demo on state changes
//press 1, 2, 3 key to change the state 

int scene=1; //creating state variable called scene

void setup() {
  size (500, 500);
}

void draw() {
  background(0);
  if (scene==1) {
    ellipse(width/2, height/2, 100, 100);
  } else if (scene==2) {
    rect(width/2, height/2, 100, 100);
  } else if (scene==3) {
    stroke(255);
    strokeWeight(20);
    line (width/2, height/2, width, mouseY);
  }
  println(scene);
}



void keyPressed() {
  if (key== '1') {
    scene=1;
  } else if (key== '2') {
    scene=2;
  } else if (key=='3') {
    scene=3;
  }
}