//simple repeating timer

//variables for our timer
int timer= 2000; //setting up timer variable for 2000 millisecond trigger
int currentTime=0;
int savedTime=0; 

//variable for x value of ellipse
int ellipseX=0; 

void setup() {
  size(500, 500);
}

void draw() {
  //update currentTime in draw so that it is continuously updating
  currentTime=millis(); 
  background(255);
  ellipse(ellipseX, height/2, 100, 100);

//if 2 seconds have passed since last saved time, execute code block
  if (currentTime-savedTime > timer) { 
    println("timer is triggered");
    ellipseX+=20; //increment ellipseX value by 20
    fill(random(0, 255), random(0, 255), random(0, 255)); //change fill to random color
    savedTime=currentTime; //assign value of currentTime to savedTime
  }
}