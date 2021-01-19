var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
var box=createSprite(400,500,50,50);
box.shapeColor="white"
var rec1=createSprite(150,100,60,10)
rec1.shapeColor="blue"
var rec2=createSprite(300,100,60,10)
rec2.shapeColor="yellow"
var rec3=createSprite(450,100,60,10)
rec3.shapeColor="pink"
var rec4=createSprite(600,100,60,10)
rec4.shapeColor="green"
var rec5=createSprite(750,100,60,10)
rec5.shapeColor="red"
}

function draw() {
    background(rgb(169,169,169));
    
box.x = World.mouseX;
box.y = World.mouseY;

if(isTouching(box,rec1)){
    box.shapeColor = "blue";
}
   else{
    box.shapeColor = "white";
     }
   if(isTouching(box,rec2)){
    box.shapeColor = "yellow";
  }
   else{
    
   }
   if(isTouching(box,rec3)){
    box.shapeColor = "pink";
  
   }
   else{
  box .shapeColor = "white";
   }
   if(isTouching(box,rec4)){
    box.shapeColor = "green";
  
   }
   else{
  box .shapeColor = "white";
   }
   if(isTouching(box,rec5)){
    box.shapeColor = "red";
  
   }
   else{
  box .shapeColor = "white";
   }

   
 drawSprites()

}
