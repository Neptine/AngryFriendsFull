const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,gameState="onSling";
var giant;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Chuck(810, 350);
    log1 = new Log(810,260,90, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Chuck(810, 220);

    log3 =  new Log(810,180,90, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,90, PI/7);
    log5 = new Log(870,120,90, -PI/7);

    bird = new Bird(200,50);
    box6 = new Box(700,310,70,70);
    box7= new Box(920,320,70,70);
    pig4 = new Chuck(810, 350);
    log6 = new Log(810,360,90, PI/2);

    box8 = new Box(700,360,70,70);
    box9 = new Box(920,340,70,70);
    pig5 = new Chuck(810, 350);

    log7 =  new Log(810,390,90, PI/2);

    box10 = new Box(810,380,70,70);
    log8 = new Log(760,380,90, PI/7);
    log9 = new Log(870,380,90, -PI/7);


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    box6.display();
    box7.display();
    
    pig4.display();
    log6.display();

    box8.display();
    box9.display();
    pig5.display();
    log7.display();

    box10.display();
    log8.display();
    log9.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();   
}

function mouseDragged(){
// if(gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
// }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}