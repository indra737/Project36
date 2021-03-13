var dog,sadDog,happyDog;
var feedButton
var foodButton
var foodObj
var database
var foodS=20
var getHour;
var getMin;
var getSec;
var milk
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk= loadImage('Images/Milk.png')
}

function setup() {
  createCanvas(1000,400);
  database= firebase.database()
  dog=createSprite(800,100,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  foodObj= new Food();
 foodButton= createButton("Add Food")
 foodButton.position(400,100)
 feedButton= createButton("Feed the Dog")
 feedButton.position(500,100)
 feedButton.mousePressed(feedDog)
 foodButton.mousePressed(updateFood)
}

function draw() {
  background(46,139,87);
  drawSprites();
  foodObj.display()
  textSize(20)
 fill(0)
 stroke(0)
  if(getHour !== undefined){
  if(getHour>=12){
    text('Last Fed:'+ getHour%12+':'+getMin + ':'+getSec + ' PM',100,100)
  }else if(getHour==0){
    text('Last Fed:12 AM',100,100)
  }else {
     text('Last Fed:'+ getHour +':'+getMin + ':'+getSec + + ' AM',100,100)
  }
}
}

function feedDog(){
  dog.addImage(happyDog)
 
if(foodS>0)
  foodS--;
  database.ref('/').update({
    Food:foodS
  })
  getHour=hour()
  getMin= minute()
  getSec= second()
 image(milk,720,720,70,70)
  dog.y=200
}

function updateFood(count){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
