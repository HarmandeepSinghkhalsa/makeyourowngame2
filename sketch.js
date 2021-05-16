var spaceship,spaceshipImg;
var bg,bgImg;
var BG, BGImge;
var edges;
var bullet,bulletGroup;
var TIE,TIEImg,TIEGroup;
var laser,laserImg,laserGroup;
var blast,blastImg;
var button;
var gameState = 0;
var gameOver,gameOverImg;
var Score=0;

function preload(){
  spaceshipImg=loadImage("X-WingFighter.png");
  BGImg=loadImage("BTS 5.jpg");
  bgImg=loadImage("BG.png");

  TIEImg=loadImage("TIEFighter.png");

  laserImg=loadImage("laser.png");

  blastImg=loadImage("Blast.png");

  gameOverImg=loadImage("GameOver.png");
}

function setup() {
  createCanvas(1300,650);

  bg=createSprite(200,200,10,10);
  bg.addImage("bg",bgImg);
  bg.scale=5;
  //BG=createSprite(200,200,10,10);
  //BG.addImage("BG",BGImg);
  //BG.scale=2;
  
  spaceship=createSprite(675,550,10,10);
  spaceship.addImage("spaceship",spaceshipImg);
  spaceship.scale=0.4;
  spaceship.visible=false;

  button=createButton("Play");
  button.style('width','10%');
  button.style('height','5%');
  button.style('fonSize','x-large');
  button.position(500,550);

  gameOver=createSprite(600,325);
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.visible=false;

  edges=createEdgeSprites();

  TIEGroup= new Group();
  laserGroup= new Group();
  bulletGroup= new Group();

  spaceship.setCollider("circle",0,0,70);
  //spaceship.debug=true;
}

function draw() {
  
background("bg");

  button.mousePressed(function(){
    gameState=1;
  })

if (gameState === 1){

  button.hide();
  spaceship.visible=true;
  spaceship.bounceOff(edges);
  enemy();

  bg.velocityY= 8;

if(bg.y>200){
  bg.y=50;
}

if(keyDown("RIGHT_ARROW")){
  spaceship.x += 6;
}

if(keyDown("LEFT_ARROW")){
  spaceship.x -= 6;
}


}



drawSprites();

if(gameState === 0){
  //background(BGImg);
  fill("white");
  textSize(25);
  text("SPACE INVADERS",470,20)
  text("Press 'SPACE' to shoot",450,50);
  text("Use 'RIGHT & LEFT' arrow keys to move right and left",280,80);
 text("From a place far far away from your planet Lothal, there are some evils planning to destroy your sweet home… ",20,140);
 text("You being the head of a very big space organisation on Lothal, had noticed that there are ",20,170);
 text("some unknown ships found at the end of heliosphere",20,200)
 text("After doing some research, your team has found out that they are aliens from an other planet Exegol ",20,230);
 text("heading towards Lothal to destroy the living life here and then capture the planet",20,260);
 text("You and your team have to destroy them so that you can save your planet",20,290);
text("Are you ready for this ??",20,320);
  bg.velocityY=0;
}




}

function enemy(){
if(gamstate=1 && frameCount %100 === 0){
  TIE=createSprite(random(spaceship.x,1000),random(20,spaceship.y-200));
  TIE.addImage("TIE",TIEImg);
  TIE.depth=bg.depth+1;
  TIE.scale=0.5;
  TIE.lifeTime=200;
  TIEGroup.add(TIE);

  laser=createSprite(TIE.x,TIE.y,10,10);
  laser.addImage("laser",laserImg);
  laser.velocityX=random(-20,-4);
  laser.velocityY=18;
  laser.scale=1.5;
  laser.lifeTime=200;
  laserGroup.add(laser);
}
}