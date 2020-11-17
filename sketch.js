
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var edges;
var survivalTime = 0;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
 ground=createSprite(400,350,900,10);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
  
}


function draw() {
background("white");
  
  if(keyDown("space")){
     monkey.velocityY=-15;
   }
 
    monkey.velocityY=monkey.velocityY + 0.75;
  monkey.collide(ground);
  
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
   if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
     score = score+1;
   }
  
  if(monkey.isTouching(obstacleGroup)){
     obstacleGroup.destroyEach();
     score = score-2;
   }
  if(score<0){
    
    text("you lose",250,225);
    
    FoodGroup.destroyEach();
    FoodGroup.visible=false;
    
    obstacleGroup.destroyEach();
    obstacleGroup.visible=false;
    
    monkey.destroy();
    
    survivalTime = 0;
  }
  
  if(score>19){
    text("you win",250,225);
    
    FoodGroup.destroyEach();
    FoodGroup.visible=false;
    
    obstacleGroup.destroyEach();
    obstacleGroup.visible=false;
    
    monkey.destroy();
    survivalTime = 0;
  }
  
  createBanana();
  createObstacle();
  
  drawSprites();
  
   text("score: "+ score , 450,50);
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime , 100,50);
}

function createBanana(){
  if (frameCount % 80 === 0) { 
    
    banana = createSprite(600,250,40,10); 
    banana.y = random(100,180);
    banana.addImage(bananaImage);
    banana.scale=0.2;
    banana.velocityX=-6.5;
    
    FoodGroup.add(banana);
    FoodGroup.lifetimeEach=92;
  }
  
}
function createObstacle(){
  if (frameCount % 300 === 0) { 
    
    obstacle = createSprite(600,250,40,10); 
    obstacle.y = random(280,330);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-6.5;
    
    obstacleGroup.add(obstacle);
    obstacleGroup.lifetimeEach=92;
  }
}



