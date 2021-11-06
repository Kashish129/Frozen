var snowflake,snowflakeImg
var bgImg;
var elsa, elsa_walk,back;

function preload() {
  snowflakeImg = loadImage("snow5.webp");
  bgImg = loadImage("snow.jpg");
  elsa_walk=loadAnimation("elsa 1.png","elsa2.png");
}
function setup() {
  createCanvas(800,400);
  
  back=createSprite(400,200,200,30);
  back.addImage(bgImg);
  back.scale=0.3

  
  elsa=createSprite(400,300,200,30);
  elsa.addAnimation("walking",elsa_walk);
  elsa.scale=0.3; 

  
  
}

function draw() {
  background(0); 
  drawSprites();
  createSnowflake();
  back.velocityY=-2;
  if(back.y < 160 ){
    back.y = height/2;
  }

 

 

  
  
}

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,800), 0, 50, 50);
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;
  }
}