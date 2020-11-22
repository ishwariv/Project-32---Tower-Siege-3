//Physics Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

//Global Variables
var ground,polygon1;
var stand1;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var sling;
var engine,world;
var score=0;
var backgroundImg;
var bg;

//loading Images
function preload(){
  polygonImg=loadImage("sprites/polygon.png");
  getBackgroundImg();
}

function setup(){
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //ground
  ground = new Ground(450,380,900,30);

  //bars on which the blocks stand
  stand1 = new Ground(450,270,260,10);

  //1st Level
  b1 = new Block(360,245,30,40);
  b2 = new Block(390,245,30,40);
  b3 = new Block(420,245,30,40);
  b4 = new Block(450,245,30,40);
  b5 = new Block(480,245,30,40);
  b6 = new Block(510,245,30,40);
  b7 = new Block(540,245,30,40);

  //2nd Level
  b8 = new Block(390,205,30,40);
  b9 = new Block(420,205,30,40);
  b10 = new Block(450,205,30,40);
  b11 = new Block(480,205,30,40);
  b12 = new Block(510,205,30,40);

  //3rd Level
  b13 = new Block(420,165,30,40);
  b14 = new Block(450,165,30,40);
  b15 = new Block(480,165,30,40);

  //4th Level
  b16 = new Block(450,115,30,40);

  //Hexagon Ball
  polygon1 = Bodies.circle(100,250,25);
  World.add(world,polygon1);

  //Slingshot to drag and hit the blocks
  sling = new SlingShot(this.polygon1,{x:100,y:250});


  //Engine.run(engine);
}

function draw(){
  background(0);
  if(backgroundImg){
    background(backgroundImg);
  }
  Engine.update(engine);
  
  fill('purple');
  b16.display();
  //Instructions
  textSize(20);
  textFont('Georgia');
  fill("white");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",120,50);
  text("Press Space for a second chance.",310,350);
  //Score
  text("Score: "+score,800,50);

  ground.display();
  stand1.display();
  
  //Conditional Statement to only allow a particular color for particular blocks.
  fill(173,216,230);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill(173,156,250);
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill(133,156,250);
  b13.display();
  b14.display();
  b15.display();
  

  //Polygon Image
  imageMode(CENTER);
  image(polygonImg ,polygon1.position.x,polygon1.position.y,40,40);
  
  sling.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
}

//Function to drag the Mouse and hit
function mouseDragged(){
  Matter.Body.setPosition(this.polygon1,{x:mouseX,y:mouseY});
}

//Function to release the Mouse
function mouseReleased(){
  sling.fly();
}

//Reset
function keyPressed(){
  if(keyCode === 32){
    sling.attach(this.polygon1);
    }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "sprites/light.jpg";
  } 
  else {
    bg = "sprites/dark.jpg";
  }

  backgroundImg = loadImage(bg);
  //background(bg);
  console.log(bg);
}