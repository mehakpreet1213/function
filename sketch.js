var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "red";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  obj1=createSprite(200,200,50,50)
  obj1.shapeColor="black"

  obj2=createSprite(500,200,50,50)
  obj2.shapeColor="yellow"
obj2.velocityX=-1

  obj3=createSprite(300,200,50,50)
  obj3.shapeColor="pink"

  obj4=createSprite(400,200,50,50)
  obj4.shapeColor="purple"
  obj4.velocityX=+1

  
  

}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,obj3))
  {
    movingRect.shapeColor = "blue";
    obj3.shapeColor = "blue";

  }
  else
  {

    movingRect.shapeColor = "green";
    obj3.shapeColor = "green";
  }

bounceoff(obj4,obj2);

  drawSprites();
}























