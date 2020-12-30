var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey = createSprite(80,315,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1300,10);
  ground.velocityX = -4;
  console.log(ground.x);

} 

function draw() {
background("white");
 
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
 monkey.velocityY = monkey.velocityY+0.8; 
  
  
   if(frameCount%80 === 0){
  banana = createSprite(600,600,10,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 210;
  } 
  
 if(frameCount%300 === 0){ 
  obstacle = createSprite(600,315,10,10);
  obstacle.addImage(obstacleImage);    
  obstacle.scale = 0.2;
  obstacle.velocityX = -3;
  obstacle.lifetime = 210;
}
text("SurvivalTime:"+SurvivalTime,100,50);  
SurvivalTime = Math.ceil(frameCount/frameRate());
fill("black");
textSize(20);
  
  monkey.collide(ground);  
  drawSprites();
}

