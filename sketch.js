//Create variables here
var dog,foodS,foodStock,happyDog,database;
var dogIMG,happydog;
function preload()
{
  //load images here
  dogIMG=loadImage("Dog.png");
  happydog=loadImage("happydog.png");
  
}

function setup() {
  createCanvas(500,500);

  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
 
  dog=createSprite(250,450,10,10);
  dog.addImage(dogIMG);
  dog.scale=0.3;
 
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }
  drawSprites();
  //add styles here
  textSize(25);
  fill ("red")
text("press up arrow key to feed ",20,50);
}

function readStock(data){
  foodS=data.val();
}


function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



