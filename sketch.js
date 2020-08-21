//Create variables here
var dog,foodS,foodStock,happyDog,database;
var dogIMG,happydog;
function preload()
{
  //load images here
  dogIMG=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500,500);

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
 
  dog=createSprite(250,450,10,10);
 
}


function draw() {  
  background(46,139,87);
 
  dog.addImage(dogIMG);
  dog.scale=0.1;

  if(keyWentDown===UP_ARROW){
    writeStock(foodS);
    dog.addImage(happydog);
  }
  drawSprites();
  //add styles here
  textSize(25);
  fill ("red")
text("press up arrow key to feed ",20,50);
}

function writeStock(x){
  database.ref('/').update({
    food:x
})
}


function readStock(data){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  foodS=data.val();
}



