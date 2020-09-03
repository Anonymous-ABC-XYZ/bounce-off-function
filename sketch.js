var fixedrect, movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600,400,50,80)
 // fixedrect.velocityY = +5; 
  fixedrect.shapeColor = "green";
  fixedrect.debug = "true";

  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green"
  //movingrect.velocityY = -5;
  movingrect.debug = "true";

gameobject1 = createSprite(100,100,50,50);
gameobject1.shapeColor = "green";

gameobject2 = createSprite(200,100,50,50);
gameobject2.shapeColor = "green";

gameobject3 = createSprite(300,100,50,50);
gameobject3.shapeColor = "green";

gameobject4 = createSprite(400,100,50,50);
gameobject4.shapeColor = "green";

gameobject2.velocityX = 2;
gameobject3.velocityX = -2;
}


function draw() {
  background(0,0,0);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(isTouching(movingrect,gameobject1)) {
    movingrect.shapeColor = "blue"
    gameobject1.shapeColor = "blue";
  }
  
  else {
    movingrect.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }
  
  bounceoff(gameobject2,gameobject3);
  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x-object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
      return true;
  }
  else {
  return false;
  }
}

function bounceoff(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
 && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
 
   
  }

 if(object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object2.y < object2.height/2 + object1.height/2 ){
   object1.velocityY = object1.velocityY * (-1);
   object2.velocityY = object2.velocityY * (-1);
 }
  }
