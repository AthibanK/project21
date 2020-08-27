var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness  =random(22,83);
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  fill(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if(bullet.isTouching(wall)){
    bullet.collide(wall);
  }  
  drawSprites();
}