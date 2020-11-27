
var cell,wall;
var speed,weight;
var car;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  var car = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2);
wall.shapecolour = ("red");
}

function draw() {
  background(255,255,255);  
 drawSprites();
}