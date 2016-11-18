//from demo on working with data, CSV/Tables
//Example of a bad data vis! See next example for different approach

// pulling data from http://www.cdc.gov/nchs/pressroom/sosmap/firearm_mortality/firearm.htm 


//declare arrays for holding column data
var states = [];
var rates = [];
var deathTotal = [];


function preload() {
  firearms = loadTable("firearms2014.csv", "header"); //load the data 
}


function setup() {
  createCanvas(1400, 800);
  background(255);

  // printing out lots of data to the console

  // how many rows do I have?
  console.log(firearms.getRowCount());

  // how many columns do I have?
  console.log(firearms.getColumnCount());

  //printing the states
  console.log(firearms.getColumn("STATE"));

  // print out stats for CA
  console.log(firearms.get(4, 0));
  console.log(firearms.get(4, 1));
  console.log(firearms.get(4, 2));

  // assign values to arrays from each column in the table
  for (var i = 0; i < firearms.getRowCount(); i++) {
    states[i] = firearms.getString(i, 0);
    rates[i] = firearms.getNum(i, 1);  //use getNum to convert to a useable number
    deathTotal[i] = firearms.getNum(i, 2);
  }
  console.log(states[2]);
}



function draw() {

  background(255);
  textSize(14);
  textAlign(CENTER);
  ellipseMode(CENTER);

  for (var i = 0; i < states.length; i++) { //go through states array
    text(states[i], i * 27 + 27, height / 2);    // displaying the states
    ellipse(i * 27 + 27, deathTotal[i], 10, 10);  // displaying each state's death total, indicated by ellipse height
  }
}