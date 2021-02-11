var player ;        
var roller ;
var obstacle ;
var enemiesGroup,energyGroup;
var gs=0;
var box,bg,player,start,bonus1,bonus2,bonus3,bonus4,ob1,ob2,ob3;

function preload(){
  
  bg=loadImage("Assets/bg.png")
  box=loadAnimation("Assets/box.png","Assets/box_2.png","Assets/box.png")
  player=loadAnimation("Assets/p1.png","Assets/p2.png")

  start=loadImage("Assets/start.png")

  bonus1=loadImage("Assets/bonus1.png")
  bonus2=loadImage("Assets/bonus2.png")
  bonus3=loadImage("Assets/bonus3.png")
  bonus4=loadImage("Assets/bonus4.png")
  bonus5=loadImage("Assets/bonus5.png")
  bonus6=loadImage("Assets/bonus6.png")

  ob1=loadImage("Assets/ob1.png")
  ob2=loadImage("Assets/ob2.png")
  ob3=loadImage("Assets/ob3.png")

}



function setup() {
createCanvas(400,400);

bg = createSprite(200,200,50,50);
bg.addImage(bg)
bg.scale=3
bg.velocityY=2

roller = createSprite(200,366,100,20);
roller.addAnimation("box",box)
roller.scale=0.5



enemiesGroup = new Group()
energyGroup = new Group()


player = createSprite(200,350,50,50);
player.addAnimation("player",player)

var start=createSprite(200,200,50,50)
start.addImage("start",start)
start.scale=0.5

}

function draw() {
  
  background("black")

  if(bg.y==0){
    bg.y=bg.width/2
  }
  if(gs===0){

    player.visible=false;
    roller.visible=false;

    if(mousePressedOver(start)){
      gs=1
      start.visible=false;
    }

  }
  else if(gs==1){
    
	player.visible=true;
	roller.visible=true;
	
	
	if(keyDown("left")){
	player.x=player.x-5;
	}
	if(keyDown("right")){
	player.x=player.x+5;
	}
	if(keyDown("down")){
		player.y=player.y+5;
	}
		
	if(keyDown("up")){
	player.velocityY = -4;
	}
	
	
	roller.x = player.x;
	roller.y = player.y +20;
	
	
	camera.position.y = player.y;
	camera.position.x = player.x;
	
	
	enemies()
	energy()
  
	// if(enemiesGroup.collide(player)){
	// enemiesGroup.destroyEach()
	// }
	// if(energyGroup.collide(player)){
	// energyGroup.destroyEach()
	// }
  }
   drawSprites();
  
}

function enemies (){
	if(frameCount%90===0){

		var x = player.x + random(-200,+200)+70;
		var y = player.y - random(40,80)+80;
		obstacle = createSprite(x,y,100,30);

		var o=Math.round(random(1,3))
		switch(o){
			case 1:obstacle.addImage(ob1);break;
			case 2:obstacle.addImage(ob2);break;
			case 3:obstacle.addImage(ob3);break;
		}
		
		obstacle.scale=0.3
		enemiesGroup.add("ob",obstacle);
		obstacle.lifetime = 200;

	}
}
function energy(){

	if(frameCount%105===0){
		
		var x = random(10,1000)+40;
		var y = player.y-random(80,100)+40;
		var e = createSprite(x,y,50,30)
		var o=Math.round(random(1,6))
		switch(o){
			case 1:e.addImage(bonus1); break;
			case 2:e.addImage(bonus2); break;
			case 3:e.addImage(bonus3); break;
			case 4:e.addImage(bonus4); break;
			case 5:e.addImage(bonus5); break;
			case 6:e.addImage(bonus6); break;
		}
		
		e.scale=0.2

		energyGroup.add(e);
		e.lifetime = 100;
 
}

}


