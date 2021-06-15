
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var boy1, tree1, chain1;



function preload()
{
	boy= loadImage("images/boy.png");
	mango= loadImage("images/mango.png");
}

function setup() {
	var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700,height,1400,20);

	tree1= new Tree(900, 300, 300, 0);

	stone1=new Stone(135,450,30);

	mango1=new Mango(800,500,30);
	mango2=new Mango(1030,100,30);
	mango3=new Mango(1005,400,30);
	mango4=new Mango(900,350,30);
    mango5=new Mango(1000,300,30);
	mango6=new Mango(900,250,30);
	mango7=new Mango(800,230,40);
	mango8=new Mango(1070,200,40);
	mango9=new Mango(1100,150,40);
	mango10=new Mango(1100,100,40);

	chain1=new Chain(stone1.body,{x:135,y:450})
}


function draw() {
  rectMode(CENTER);
  background(255);

  text(mouseX+","+ mouseY, mouseX,mouseY);
imageMode (CENTER)
image (boy,200,500,200,200);
image (mango,350,420,200,200);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  tree1.display();

  ground.display();

  stone1.display();

  chain1.display();

  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	chain1.fly();

}

 

