
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	hexaImg=loadImage('hexagon.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
ground = new Ground(400,600,800,10);
ground1 = new Ground(500,470,300,10);
box1=new Box(500,450,50,50);
box2=new Box(550,450,50,50);
box3=new Box(450,450,50,50);
box4=new Box(475,400,50,50);
box5=new Box(525,400,50,50);
box6=new Box(500,350,50,50);


ball = Bodies.circle(50,200,20);
  World.add(world,ball);
//image(hexaImg,ball.position.x,ball.position.y,0,0)
//imageMode(CENTER)
  slingShot = new Slingshot(this.ball,{x:170,y:400});
ellipseMode(RADIUS)

//image(polygon.position.x,polygon.position.y,40,40)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ground1.display()
  box1.display()
  box3.display()
  box2.display()
  box4.display()
  box5.display()
  box6.display()
  slingShot.display()
  imageMode(CENTER)
  image(hexaImg ,ball.position.x,ball.position.y,40,40);
  drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball);
  }
  }