const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var batman;
var thunder, thunderImg1, thunderImg2, thunderImg3, thunderImg4;

var drops = [];
var thunderCreatedFrame = 0;
var maxDrops = 100;

function preload() {
    
    thunderImg1 = loadImage("images/1.png")
    thunderImg2 = loadImage("images/2.png")
    thunderImg3 = loadImage("images/3.png")
    thunderImg4 = loadImage("images/4.png")

}

function setup() {

    engine = Engine.create();
    world = engine.world;
   
    createCanvas(400, 700);
    
    batman = new Umbrella(200, 500);

    noFill();
    arc(50, 55, 60, 60, HALF_PI, PI);
    arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

    for(var i=0; i<maxDrops; i++) {
        drops.push(new Drop(random(0, 400), random(0, 400)))
    }

    Engine.run(engine);

}

function draw() {

    Engine.update(engine);
    background(rgb(43, 45, 47));
    
    spawnThunder();

    batman.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateYPos();
    }

    drawSprites();

}   

function spawnThunder() {

    if(frameCount % 80 === 0) {
        
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(100,300), random(10,30), 10, 10);

        var rand = Math.round(random(1,4));
        switch(rand) {
            case 1: thunder.addImage(thunderImg1);
            break;
            case 2: thunder.addImage(thunderImg2);
            break;
            case 3: thunder.addImage(thunderImg3);
            break;
            case 4: thunder.addImage(thunderImg4);
            break;
            default: break;
        }

        thunder.scale = random(0.3, 0.6);

    }

    if(thunderCreatedFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }
    
}