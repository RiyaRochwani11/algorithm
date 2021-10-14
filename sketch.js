var fixedrect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedrect=createSprite(200,100,50,80);
 movingRect= createSprite(400,100,20,50);
 fixedrect.shapeColor="green";
 movingRect.shapeColor="green";
 movingRect.velocityX = -1;
 fixedrect.velocityX = +1;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;

  /*
  if(movingRect.x-fixedrect.x<=fixedrect.width/2+movingRect.width/2
    && fixedrect.x - movingRect.x<= fixedrect.width/2+movingRect.width/2 
    && movingRect.y-fixedrect.y<=fixedrect.height/2+movingRect.height/2
    && fixedrect.y-movingRect.y<=fixedrect.height/2+movingRect.height/2){
    fixedrect.shapeColor="red";
    movingRect.shapeColor="red";

  }
  else{
    fixedrect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  */


  if (movingRect.x - fixedrect.x < fixedrect.width/2 + movingRect.width/2
    && fixedrect.x - movingRect.x < fixedrect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedrect.velocityX = fixedrect.velocityX * (-1);
}
if (movingRect.y - fixedrect.y < fixedrect.height/2 + movingRect.height/2
  && fixedrect.y - movingRect.y < fixedrect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedrect.velocityY = fixedrect.velocityY * (-1);
}

 
}
