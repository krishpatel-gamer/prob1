
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	box1 = new box(500,383,140,17);
	box2 = new box(578,322,17,140);
	box3 = new box(430,322,17,140);
	paper1 = new paper(100,320,10,10);
  
}


function draw() {
  
  background("blue");
  
  Engine.update(engine);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {

Matter.Body.applyForce(paper1.body,paper1.body.position ,{x:11.5,y:-14});
	}
}

