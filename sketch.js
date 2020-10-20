//Create variables here
var database, dog, dog1,dogImg,dog1Img,foodStock,dat;
function preload()
{
  //load images here
  dogImg = loadImage("images/dog.png");
  dog1Img = loadImage("images/dog1.png");
}

function setup() {
  
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  dog = createSprite(250, 250, 50, 50);
  dog.addImage(dogImg);
  dog.scale = 0.3;
}


function draw() {  
  background(46,139,87);
  // dog = createSprite(250, 250, 50, 50);
  // dog.addImage(dogImg);
  // dog.scale = 0.3;

  if (keyWentDown(UP_ARROW)) {
    writeStock(dat);
    dog.addImage(dog1Img);
  }
  
  drawSprites();
  //add styles here

}

function readStock(data) {
  dat = data.val();
  
}

function writeStock(n) {
  if (n<= 0) {
    n=0
  }
  else {
    n = n - 1;
  }
  console.log(n);
  database.ref("/").update(
    {
      food:n
    }
    
  )
}




