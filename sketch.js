var Rob
var King
var canvas
var kingMessageImg
var exitDoor
var gameState = 0
var backgroundImage;
var wizard1Img;
var wizard2msg;
var wizard3msg;
var wizard4msg;




function preload() {
 kingMessageImg = loadImage("Image/KingMessage.png")
 kingImg = loadImage("Image/kingImage.png")
 tutorialImage = loadImage("Image/tutorial1.png")
 backgroundImage = loadImage("Image/background0.png")
 wizard1msg = loadImage("Image/wizard1msg.png")
 robImg = loadImage("Image/Rob.png")
 wizard1Img = loadImage("Image/wizard1.png")
 wizard2msg = loadImage("Image/wizard2msg.png")
 wizard3msg = loadImage("Image/wizard3msg.png")
 wizard4msg = loadImage("Image/wizard4msg.png")
 exitDoor = loadImage("Image/door.png")
}

function setup() {
canvas = createCanvas(1000, 600)
Rob = createSprite(400, 300, 50, 50)
Rob.addImage("rob", robImg)
King = createSprite(500, 300, 50, 50)
King.addImage("king", kingImg)
exitDoor = createSprite(950, 300, 70, 100)
wizard1 = createSprite(950, 60, 50, 50)
wizard2 = createSprite(100, 60, 50, 50)
wizard3 = createSprite(100, 540, 50, 50)
wizard4 = createSprite(950, 540, 50 , 50)
tutorialMan = createSprite(500, 300, 50, 50)
Rob.scale = 0.5
wizard1.addImage("wizard",wizard1Img)
wizard2.addImage("wizard",wizard1Img)
wizard3.addImage("wizard",wizard1Img)
wizard4.addImage("wizard",wizard1Img)
wizard1.scale = 0.4
wizard2.scale = 0.4
wizard3.scale = 0.4
wizard4.scale = 0.4

}

function draw() {

 background(backgroundImage);

 

if(keyDown(UP_ARROW)){
  Rob.y = Rob.y - 5
}

if(keyDown(DOWN_ARROW)){
  Rob.y = Rob.y + 5
}

if(keyDown(LEFT_ARROW)){
  Rob.x = Rob.x - 5
}

if(keyDown(RIGHT_ARROW)){
  Rob.x = Rob.x + 5
}

if(Rob.x >= 550 && gameState === 0){
  image(kingMessageImg,450,100)
}

if(Rob.isTouching(exitDoor)){
  gameState = 1
  //background will change
}

if(gameState === 0){
  wizard1.visible = false
  wizard2.visible = false
  wizard3.visible = false
  wizard4.visible = false
  tutorialMan.visible = false
}

if(gameState === 1){
  King.remove()
  wizard1.visible = true
  wizard2.visible = true
  wizard3.visible = true
  wizard4.visible = true
  tutorialMan.visible = true
  image(tutorialImage, 450, 100)
}

if(Rob.isTouching(wizard1)){
  image(wizard1msg, 830, 120)
}

if(Rob.isTouching(wizard2)){
  image(wizard2msg, 50, 50)
  console.log(Rob.x)
  console.log(Rob.y)
}

if(Rob.isTouching(wizard3)){
  image(wizard3msg, 50, 590)
}

if(Rob.x >= 930 && Rob.y >= 80){
  image(wizard4msg, 830, 90)
}

drawSprites()
}



