
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var st = 0; 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600,600);
  monkey = createSprite(50,300);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(50,330,1500,5)


  
}



function draw() {
   background("white");
   text("SurvivalTime: " + st, 500,100);

  st = st + Math.round(getFrameRate()/60);
  
  monkey.collide(ground);
  
 
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
bananaSpawn();
  obstacleSpawn();
  drawSprites();
}

function bananaSpawn() {
  

    if (frameCount % 80 === 0) {
  banana = createSprite(550,100, 10, 10);
  banana.y = Math.round(random(120,200 ));
  banana.addImage(bananaImage);
  banana.velocityX = -3 
  banana.lifetime = 200;
  banana.scale = 0.1;
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
//FoodGroup.add(bananaSpawn);
  return banana;
  
    }
}
function obstacleSpawn() {
  

    if (frameCount % 300  === 0) {
  obstacle = createSprite(550,310, 10, 10);
 
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3 
  obstacle.lifetime = 200;
  obstacle.scale = 0.1;
  obstacle.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
//FoodGroup.add(bananaSpawn);
  return obstacle;
  
    }
}