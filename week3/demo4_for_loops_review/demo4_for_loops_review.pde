/*
from demo on for loops
*/



void setup(){
  size(500,500);
  background(255);
}


void draw(){
  for (int i= width; i>=0; i=i-50){
    rectMode(CENTER);
    rect(width/2, height/2, i, i);
  }
}