var car;
var wall;
var speed;
var weight;
var deformation
function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 100, 50);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(0, 255, 255);
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<=car.width/2+wall.width/2) {
    car.velocityX = 0;

    deformation = (0.5*weight*speed*speed)/22500;
       if(deformation<100) {
         car.shapeColor = "green";
       }

       if(deformation>100&&deformation<180) {
        car.shapeColor = "yellow";
      }

      if(deformation>180) {
        car.shapeColor = "red";
      }
  }

  drawSprites();
}