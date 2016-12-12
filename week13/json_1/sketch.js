// example for loading JSON file
// prints data to console


var obsession;

//load JSON files with preload()
function preload() {
  obsession = loadJSON("data.json");
}

function setup() {
  createCanvas(100, 100);
  var name = obsession.name;
  var cell = obsession.cell;
  var facebook = obsession.facebook;
  var feeling = obsession.feeling;
  console.log("Today, " + name + " checked her phone " + cell + " times and checked Facebook " + facebook + " times" + " and is feeling " + feeling + ".");
}