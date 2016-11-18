// Demo on CSV/Tables, showing how many gun deaths by state in 2014
// Click to start


// pulling data from http://www.cdc.gov/nchs/pressroom/sosmap/firearm_mortality/firearm.htm 
// gunshot sound: http://soundbible.com/2122-40-Smith-Wesson.html 


//declare arrays for holding column data
var states = [];
var rates = [];
var deathTotal = [];
var shot; // variable for sound sample
var shotNumber = 0; // tracking number of gunshots per state
var position = 0; // tracking the element position of array
var start = true; // track if we are at starting screen



function preload() {
  firearms = loadTable("firearms2014.csv", "header"); //load the data
  shot = loadSound('shot.mp3'); //load the sound
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  background(255);
  textAlign(CENTER);


  // assign values to arrays from each column in the table
  for (var i = 0; i < firearms.getRowCount(); i++) {
    states[i] = firearms.getString(i, 0);
    rates[i] = firearms.getNum(i, 1);
    deathTotal[i] = firearms.getNum(i, 2);
  }
}



function draw() {

  background(0);
  fill(255);

  if (start) {   //if we are at the start screen
    textSize(66);
    text("death by firearm", width / 2, height / 2.5);
    text("2014", width / 2, height / 2)

  } else {
    
    //show the states
    textSize(44);
    text(states[position], width / 2, height / 2);

// show the gunshot number
    textSize(222);
    text(shotNumber, width / 2, height / 2.5);
    
    if (shotNumber < deathTotal[position]) { 
      shotNumber++;  // increment shotNumber until we hit the deathTotal
    } else { //do nothing
    }
  }
}

function mousePressed() {
  shot.play();
  if (start) {  
    start = false;  //if on the start screen, change boolean to false
  } else {  // as long as we're not on the start screen, do this stuff
    position++;
    shotNumber = 0;
  }
}