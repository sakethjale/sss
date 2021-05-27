var starImg,bgImg,ferimg;
var star, starBody;
var fer,farBody;
var fs;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	ferimg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fs=loadSound("sound/joyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fer=createSprite(200,470);
	fer.addAnimation("f",ferimg)
	fer.scale=0.3

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
    fs.loop();

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x ;
  star.y= starBody.position.y ;

  console.log(star.y);

  if(star.y>430 && starBody.position.y>430){
	Matter.Body.setStatic(starBody,true); 
  }

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
     if(keyCode===RIGHT_ARROW){
		 fer.x=fer.x+20
	 }
	 if(keyCode===LEFT_ARROW){
		fer.x=fer.x-20
	}

    

	//writw code to move fairy left and right
	
}
