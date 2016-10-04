//From demo on functions
//Creating user-defined function for drawing ice cream cones


void setup() {
  size (500, 500);
}

void draw() {
  background (255);
  //call up the icecream function with different arguments
  icecream(100, 250, 65, 170, 230, 180); //mint cone
  icecream(300, 350, 75, 245, 120, 200 ); //bubble gum cone
  icecream(400, 300, 80, 80, 190, 230);  //blue moon cone
}


void icecream(int x, int y, int diameter, int r, int g, int b) {  
  //this is the function definition
  fill(170, 120, 35); //brown cone color 
  triangle(x, y, x+50, y, x+25, y+100);
  fill (r, g, b); //customized ice cream color
  ellipse(x+25, y, diameter, diameter);
}