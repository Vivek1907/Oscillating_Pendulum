const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,bob,constraint,pivot;

function setup(){
    createCanvas(1300,670);
    engine = Engine.create();
    world = engine.world;
    bob = new Bob(600,200,30);
    rectMode(CENTER);
    ground = new Platform(width/2,640,width,60);
    pivot = new Platform(width/2,50,200,40);
    constraint = new Thread(bob.body,{x:650, y:50});
}

function draw(){
   Engine.update(engine);
   background(0);
   bob.display("green");
   ground.display("brown");
   pivot.display("red");
   constraint.display();
   text("MOVE THE BOB BY DRAGGING THE MOUSE. RELEASE THE MOUSE TO OSCILLATE THE BOB.",400,15);
}

function mouseDragged(){
    constraint.thread.bodyA.position.x = mouseX;
    constraint.thread.bodyA.position.y = mouseY;
}