var car, wall, speed, weight;

function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 400, 50, 50);
  car2= createSprite(50, 300, 50, 50);
  car.shapeColor = color(255, 0, 0);
  car2.shapeColor = color(255, 255, 0);
  //changed x axsis of wall and gave color to it
  wall = createSprite(1200, 400, 60, height/2);
 wall.shapeColor=("brown")
 //speed isn not a sprite
 speed = random(55, 90);
  car.velocityX = speed;
  car2.velocityX = speed;
  //speed is not sprite
  weight = random(400, 1500)
}

function draw() {
  background("Black");  
  // x should ne small
  if(wall.x-car.x < car.width/2 + wall.width/2) {
  var deformation = 0.5*weight*speed*speed/22500;
  car.velocityX = 0;
  car2.velocityX = 0;
  if(deformation < 100) {  
    car.shapeColor = color(255, 0, 0);
    car2.shapeColor = color(255, 0, 0);
  }
  if(deformation < 180 && deformation > 100) {
  car.shapeColor = color(230, 230, 0); 
  car2.shapeColor = color(255, 0, 0); 
  }
  if(deformation > 180) {
  car.shapeColor = color(0, 255, 0);  
 
  car2.shapeColor = color(255, 0, 0);}
  }
  
  drawSprites();
}
