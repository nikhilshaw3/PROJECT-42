var hr,min,sec;
var hrAngle,minAngle,secAngle;

function setup() {
  createCanvas(404,450);
 angleMode(DEGREES);

}

function draw() {
  background(0);
  
  translate(200,200);
  rotate(-90);

  //calculating time from p5.js
  hr=hour();
  min=minute();
  sec=second();

  //iterative rotation
  secAngle=map(sec,0,60,0,360);
  minAngle=map(min,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  //drawing secHand
  push();
  rotate(secAngle);
  strokeWeight(10);
  stroke("red");
  line(0,0,100,0);
  pop();

  //drawing minHand
  push();
  rotate(minAngle);
  strokeWeight(10);
  stroke("lightgreen");
  line(0,0,75,0);
  pop();

  //drawing hrHand
  push();
  rotate(hrAngle);
  strokeWeight(10);
  stroke("blue");
  line(0,0,50,0);
  pop();

//drawing secArc
strokeWeight(10);
noFill();
stroke("red");
arc(0,0,300,300,0,secAngle);

//drawing minArc
strokeWeight(10);
noFill();
stroke("yellow");
arc(0,0,270,270,0,minAngle);

//drawing hrArc
strokeWeight(10);
noFill();
stroke("blue");
arc(0,0,240,240,0,hrAngle);

  drawSprites();
}
