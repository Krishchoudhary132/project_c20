var garden
var jerryone
var jerrytwo
var jerrythree
var jerryfour
var tomonne
var tomtwo
var tomthree
var tomfour
function preload() {
    //load the images here
gardenimage = loadImage("images/garden.png")
jerryoneimage = loadImage("images/jerryOne.png")
jerrytwoimage = loadImage("images/jerryTwo.png")
jerrythreeimage = loadImage("images/jerryThree.png")
jerryfourimage = loadImage("images/jerryFour.png")
tomoneimage = loadImage("images/tomOne.png")
tomtwoimage = loadImage("images/tomTwo.png")
tomthreeimage = loadImage("images/tomThree.png")
tomfourimage = loadImage("images/tomFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  garden = createSprite(400,250)
  garden.addImage(gardenimage)
  tomone = createSprite(500,450)
  tomone.addImage(tomoneimage)
  tomone.scale = 0.1
  jerrytwo = createSprite(150,450)
  jerrytwo.addImage(jerrytwoimage)
  jerrytwo.scale = 0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tomone.velocityX = -5
    tomone.addAnimation("tomRunning",tomtwoimage);
    tomone.changeAnimation("tomRunning");
}
}
