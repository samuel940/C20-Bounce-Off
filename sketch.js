var movingrect, fixedrect
function setup() {
  
  createCanvas(1200,800);
  //fill("green");
  movingrect = createSprite(400, 100, 50, 50);
  movingrect.velocityY = 5;
  movingrect.shapeColor = "green";
  fixedrect = createSprite(400,800,100,50);
  fixedrect.shapeColor = "green";
  fixedrect.velocityY = -5;

}

function draw() {
  background(0);
  if (fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2 && movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2) {
    movingrect.velocityX = movingrect.velocityX * (-1);
    fixedrect.velocityX = fixedrect.velocityX * (-1);
  } 
  if (fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2 && movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2) {
    movingrect.velocityY = movingrect.velocityY * (-1);
    fixedrect.velocityY = fixedrect.velocityY * (-1);
  } 
  drawSprites();
}