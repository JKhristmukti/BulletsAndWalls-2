var wall,bullet;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(20,200,30,15);
  bullet.velocityX=speed;

  wall = createSprite(1200,200,thickness,300);
}

function draw() {
  background(0,0,0);  

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}
function hascollided(lbullet,lwall){
  bulletrightedge=lbullet.x + lbullet.width;
  wallleftedge=lwall.x;
  if(bulletrightedge>=wallleftedge){
    return true;
  }
  return false;
}