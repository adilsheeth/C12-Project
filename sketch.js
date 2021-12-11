var gnd, gndimg;
var guy, guyimg;
var bn1, bn2;

function preload(){
  //pre-load images
  gndimg = loadImage("path.png")
  guyimg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  gnd = createSprite(200,200,400,400);
  gnd.addImage(gndimg);
  guy = createSprite(200,350,30,30);
  guy.addAnimation("ani",guyimg);
  guy.scale = 0.05;
  gnd.velocityY = 4;
  bn1 = createSprite(40,200,80,400);
  bn1.visible = false;
  bn2 = createSprite(360,200,80,400);
  bn2.visible = false;
}

function draw() {
  background(0);
  drawSprites();
  if(gnd.y > 215){
    gnd.y = gnd.y/2;
  }
  guy.x = World.mouseX;
  guy.collide(bn1);
  guy.collide(bn2);
}
