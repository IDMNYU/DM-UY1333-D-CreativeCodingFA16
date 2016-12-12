// example for loading JSON file with array of JSON objects

var obsession;

function preload() {
  obsession = loadJSON("data.json");
}

function setup() {
  createCanvas(500, 500);


  console.log(obsession[0]);
  console.log(obsession[1]);
  console.log(obsession[0].name);

  console.log(Object.keys(obsession).length); //returns size of json object


  for (var i = 0; i < Object.keys(obsession).length; i++) {
    textSize(15);
    textAlign(CENTER);
    text(obsession[i].name + " feels " + obsession[i].feeling + " today", width / 2, height / 2 + i * 20);
  }

}