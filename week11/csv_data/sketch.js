// pulling data from http://www.cdc.gov/nchs/pressroom/sosmap/firearm_mortality/firearm.htm 

//declare arrays for holding column data
var states= [];
var rates = [];
var deathTotal= [];


function preload(){
  firearms= loadTable("firearms2014.csv", "header");
}


function setup() {
  createCanvas (1400,800); 
  background (255);
  
  // printing out data to the console
  
  // how many rows do I have?
  console.log(firearms.getRowCount());
  
  // how many columns do I have?
  console.log(firearms.getColumnCount());
  
  //printing the states
console.log (firearms.getColumn("STATE"));

// print out stats for CA
console.log (firearms.get(4,0));
console.log(firearms.get(4,1));
console.log(firearms.get(4,2));

// assign values to arrays from each column in the table
for ( var i=0; i< firearms.getRowCount(); i++){
  states[i]= firearms.getString(i,0);
  rates[i]= firearms.getNum(i,1);
  deathTotal[i]= firearms.getNum(i,2);
}

console.log(states[2]);
}



function draw() {
  
  background(255);
  textSize(14);
  textAlign(CENTER);
  ellipseMode(CENTER);
;  // displaying the states
  for (var i=0; i<states.length; i++){
    text (states[i], i*27 +27, height/2);
    ellipse(i*27+27, deathTotal[i], 10, 10);
  }
  
  
}
