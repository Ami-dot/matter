const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var canvas;
var ground;
var ball;

function setup() {
  canvas = createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);

  var ball_options = {
    restitution:1
  }
  ball = Bodies.circle(300,50,20,ball_options);
  World.add(world,ball);

  object = Bodies.rectangle(200,200,50,50);
  World.add(world,object);
  console.log(object);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50,50);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}