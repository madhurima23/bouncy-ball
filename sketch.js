const Engine = Matter.Engine;
const  World = Matter.World
const Bodies = Matter.Bodies;   
var e;
var w ;
var b ;
var ball;
function setup() {
  createCanvas(800,400);
  e =Engine.create();
  w = e.world;
  var option={
    isStatic:true
  } 
  var boptions={
    restitution:1,
    friction:3,
  }
    b= Bodies.rectangle(400,390,800,20,option);
World.add(w,b);
console.log(b);
ball =Bodies.circle(200,250,20,boptions);
World.add(w,ball);
}

function draw() {
  background(255,175,210);  
  Engine.update(e);
 rectMode(CENTER);
  rect(b.position.x , b.position.y,800,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20);
}