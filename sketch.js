var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var lives = 0;
var database;

var form, player, game;
var batter1img, batter2img, baseballfield, ground;
var batter1, batter2;
function preload(){
  baseballfield = loadImage("images/field.png");
  batter1img = loadImage("images/batter1.jpg");
  batter2img = loadImage("images/batter2.jpg");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
