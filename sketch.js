var canvasWidth=640;
var canvasHeight=480;

var player = 0;
var playerx = 300;
var playery = 100;
var sprWidth = 64;
var sprHeight = 64;
var speed = 4;
function preload(){
    playerImg = loadImage("images/player.png");
}

function setup(){
    createCanvas(canvasWidth,canvasHeight);
    player = createSprite(playerx, playery, sprWidth, sprHeight);
    player.addImage(playerImg, "images/player.png");
}

function playerControls(){
    if (keyIsDown(RIGHT_ARROW)) {
        if (player.position.x < 640 - sprWidth/2){
            player.position.x += speed;
        }
    }
    
    if (keyIsDown(LEFT_ARROW)) {
        if (player.position.x > 0 + sprWidth/2) {
            player.position.x -= speed; 
        }
    }
    
    if (keyIsDown(UP_ARROW)) {
        if (player.position.y > 0 + sprHeight/2) {
            player.position.y -= speed;
        }
    }
    
    if (keyIsDown(DOWN_ARROW)) {
        if (player.position.y < 480 - sprHeight/2) {
            player.position.y += speed;
        }
    }
}

function draw(){
    background("beige");
    playerControls();
    drawSprites();
}

setInterval(draw, 10);
