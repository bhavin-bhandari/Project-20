var cat , mouse;
var catImage , mouseImage;
var back , backImage; 
var catImage2 ,catImage3 ;
var cat1 , mouseImage2;
var mouseImage3;

function preload() {
    //load the images here
    catImage= loadImage("images/cat1.png");
    catImage2=loadImage("images/cat2.png");
    catImage3=loadImage("images/cat4.png");
    mouseImage=loadImage("images/mouse1.png");
    mouseImage2=loadImage("images/mouse4.png");
    mouseImage3=loadImage("images/mouse3.png");
    backImage=loadImage("images/garden.png");
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back=createSprite(400,400,10,10);
    back.addImage(backImage , 'background')
    back.scale=1;

    cat=createSprite(700,600,10,10);
    cat.addImage(catImage , 'tom');
    cat.addImage("catRunning",  catImage2);
    cat.addImage("catteasing",  catImage3);
    cat.scale=0.1;


    mouse=createSprite(200,600,10,10);
    mouse.addImage(mouseImage , 'jerry');
    mouse.addImage( "mouse2",mouseImage2 );
    mouse.addImage( "mouse3",mouseImage3)
    mouse.scale=0.1;
    







}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown("left")){
      cat.x= cat.x-2 ;
      mouse.changeAnimation( "mouse3",mouseImage3) ; 
      }

     if( cat.isTouching(mouse)) {
     cat.changeAnimation("catteasing",  catImage3) ; 
     mouse.changeAnimation( "mouse2",mouseImage2) ;    
        }
      
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
  cat.x= cat.x-2 ;
  cat.changeAnimation("catRunning",  catImage2);
}
  


}
