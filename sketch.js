const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball,ball2;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ball=Bodies.circle(200,100,15,{restitution:1});
  var propertie={isStatic:true};
  ball2=Bodies.rectangle(300,100,15,15,{restitution:1});
  ground=Bodies.rectangle(400,400,800,30,propertie);
  World.add(world,ball);
  World.add(world,ground);
  World.add(world,ball2);
  console.log(ball);
  console.log(ground.type);
}

function draw() {
  background("red");
  Engine.update(engine);
 ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30);
  rect(ball2.position.x,ball2.position.y,15,15);
}