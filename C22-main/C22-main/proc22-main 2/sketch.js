const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  
    ground = Bodies.rectangle(200,380,400,10,{isStatic:true})
    World.add(world,ground);

    ball = Bodies.circle(200, 200, 40,{restitution:1.5})
    World.add(world,ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);

    ellipseMode(RADIUS);
    fill("green")
    ellipse(ball.position.x,ball.position.y,40,40)

    
}