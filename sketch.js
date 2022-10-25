var aeroplane;
var border;
var lightning,birds;
var backgroundImg,lightningImg,birdImg,aeroplaneImg;
var birdsGrp,  lightningGrp;



function preload() {

  aeroplaneImg = loadImage("image/airplane.png");

  backgroundImg = loadImage("image/bg.jpg");

  lightningImg = loadImage("image/lightning.png");

  birdImg = loadImage("image/bird.png");
 
}
function setup() {
  background("lightblue")
  createCanvas(windowWidth, windowHeight);
  
  background = createSprite(windowWidth/2, 0, windowWidth, displayHeight*2);
  background.addImage(backgroundImg);
  background.scale = 1.5;
  //background.x = width/2;
  //background.velocityX = -2;  

  ground = createSprite(windowWidth/2, windowHeight-50, windowWidth, 20);
  ground.visible = false ;
  
  border = createSprite(windowWidth/2, 20, windowWidth, 40);
  border.visible = false ;

  aeroplane = createSprite(100, windowHeight-65, 100, 30); 
  aeroplane.addImage(aeroplaneImg);
  aeroplane.scale =  0.6;
 
   
}

function draw() {

 /* if (background.x < 0) {
    background.x = width; 
  }  */

  // to move the aeroplane by the up arrow
  if (keyDown("UP") ) {  
    aeroplane.velocityY -= 2;
  }
  aeroplane.velocityY += 1; //gravity
  if (keyWentDown("RIGHT")) {
    aeroplane.velocityX = 2;
  }

  if (keyWentUp("RIGHT")) {
    aeroplane.velocityX = 0;
  }
  
  aeroplane.bounceOff(border);
  aeroplane.collide(ground);  //collision

  console.log(background.x);

  Lightning();
  drawSprites()
}

function Lightning() {

  if(World.frameCount % 100 == 0) 
  {
    lightning = createSprite(windowWidth, 30, 20, 20 );
    lightning.addImage(lightningImg);
    lightning.velocityX = -5;
    lightning.lifetime = 100;
    lightning.scale = 1;
  }
}

  function Birds() {
    if(World.frameCount % 100 == 0)
    {
    birds = createSprite(windowWidth, 30, 20, 20 );
    birds.addImage(birdImg);
    birds.velocityX = -5;
    birds.lifetime = 100; 
    birds.addImage(birdImg);
    }
   
  }


