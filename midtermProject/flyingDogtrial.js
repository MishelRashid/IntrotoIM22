let dogImg; //variable that will hold the image of the dog
let bgImg; //variable that will hold the background image
let cloudImg; //variable that will hold the image of the cloud

let cloudWidth = 150; //width of the cloud
let cloudHeight = 100; //height of the cloud

let dogWidth = 80; //width of the dog image
let dogHeight = 100; //height of the dog image

let obstacleWidth = 50;
let obstacleHeight = 50;

let health = 3; //maximum health

let objects = []; //this array will hold the images of the objects that fall down

// let chocolateImg; //variable that will hold the chocolate image
// let chemicalImg; //variable that will hold the chemical image
// let toxicImg; //variable that will hold the toxic image
// let needleImg; //variable that will hold the needle image


let widthDimension = 600; //width of the canvas
let heightDimension = 400; //height of the canvas

function preload() {
  //loading the images
  dogImg = loadImage("/dog.png");
  cloudImg = loadImage("/cloud.png");
  bgImg = loadImage("/bg.jpeg");
  
  //loading the object images
  objects.push(loadImage("/chemical.png"));
  objects.push(loadImage("/toxic.png"));
  objects.push(loadImage("/needles.png"));
  objects.push(loadImage("/chocolate.png"));
}

class Cloud {
  constructor(x) {
    this.x = x; //x axis of image
    this.y = -10; //y axis of image, starts at the top.
  }

  update() {
    //this function updates the y-axis of the clouds so it appears as if they are going down (by increasing the y value)
    this.y += 1;
  }
  
  Y(){
    //returns the y location of the cloud
    return this.y;
  }

  display() {
    image(cloudImg, this.x, this.y, cloudWidth, cloudHeight); //displays the clouds on the screen
  }
}

class Dog{
  //class of the dog
  constructor(){
    this.x = widthDimension / 2;
    this.y = heightDimension - dogHeight - 10;
  }
  
  X(){
    //returns x position of the dog
    return this.x;
  }
  
  Y(){
    //returns y position of the dog
    return this.y;
  }
  
  moveRight(){
    //move the dog to the right
    if(this.x <= widthDimension - dogWidth){
      //this if statement makes sure that the dog doesn't leave the canvas from the right side
      this.x += 5;
    }
  }
  
  moveLeft(){
    //move the dog to the left
    if(this.x >= dogWidth - 100 ){
      //this if statement makes sure that the dog doesn't leave the canvas from the left side
      this.x -= 5;
    }
  }
  
  display(){
    //displays the dog image
    image(dogImg, this.x, this.y, dogWidth, dogHeight);
  }
}

class Obstacle{
  //class for obstacles
  constructor(choice, xCoord){
    //the image is chosen based off of the parameter sent
    this.img = objects[choice];
    this.x = xCoord; //x coordinate sent as a parameter
    this.y = -10;
  }
  
  update(){
    //move the obstacle down
    //increase y value
    this.y +=1;
  }
  
  X(){
    //returns the x value
    return this.x;
  }
  
  Y(){
    //returns the y value
    return this.y;
  }
  
  display(){
    //displays the obstacle
    image(this.img,this.x,this.y,obstacleWidth,obstacleHeight);
  }
}
  
  
class game{
  //class of the game itself
  constructor(){
    this.clouds = []; //this variable will hold objects of cloud
    this.dog = new Dog();
    this.objects = []; //this variable will hold the objects of the objects that the user must avoid
    this.score = 0; //initial score is zero
    this.moveRight = false; //is the right key pressed?
    this.moveLeft = false;
  }
  
  addClouds(xCoordinate){
    //this will add more clouds to the top of the screen
    this.clouds.push(new Cloud(xCoordinate));
  }
  
  addObstacle(value, xCoordinate){
    this.objects.push(new Obstacle(value, xCoordinate));
  }
  
  updateRight(value){
    print(1);
    this.moveRight = value;
  }
  
  updateLeft(value){
    this.moveLeft = value;
  }
  
  update(){
    //updates the current frame.
    
    //move the clouds down
    for(let i =0; i<this.clouds.length; i++){
      this.clouds[i].update();
    }
    
    //check if a cloud has left the canvas height or not
    if(this.clouds[0].Y() >= heightDimension){
      //remove the cloud if it has left the canvas
      subset(this.clouds,1,this.clouds.length);
    }
    
    //move the objects down
    for(let i = 0;i<this.objects.length;i++){
      this.objects[i].update();
    }
    
    //move the dog if keypressed is invoked
    if(this.moveRight){
      this.dog.moveRight();
    }
    if(this.moveLeft){
      this.dog.moveLeft();
    }
  }
  
  updateScore(){
    this.score+=1;
  }
  
  checkCollision(){
    //check if the dog hit any obstacle
    let dogX = this.dog.X();
    let dogY = this.dog.Y();
    for(let i =0; i<this.objects.length;i++){
      let objectX = this.objects[i].X();
      let objectY = this.objects[i].Y();
      
      //Check for collision
      if(objectX >= dogX){
        if(objectX + obstacleWidth <= dogX + dogWidth){
          if(objectY + obstacleHeight>= dogY){
            //collision detected
            return true;
          }
        }
      }
    }
    return false;
  }
  
  display(){
    //display the frame
    //display the background 
    //background of color blue for now, change to image later
    // background(153,255,255);
    image(bgImg,0,0,widthDimension, heightDimension);
    
    //display the clouds
    for(let i =0; i<this.clouds.length;i++){
      this.clouds[i].display();
    }
    
    //display the obstacles
    for(let i =0; i<this.objects.length;i++){
      this.objects[i].display();
    }
    //display the dog
    this.dog.display();
    
    //display the score
    push();
    stroke(15);
    fill(255,0,0);
    text("Score = " + this.score, widthDimension-75,30);
    text("Health = " + health, widthDimension-75,50)
    pop();
  }
}


gameInProgress = true; //is the game running?
start = false;
Game = new game(); //the game
Game.addClouds(50);

function setup() {
  //the dimensions of the canvas will be equal to the dimensions of the background
  createCanvas(widthDimension, heightDimension);

}

function draw() {
  if(gameInProgress){
    if(frameCount%120 === 0){
      //add a cloud to the game at a random x location
      let xCoordinate = random(0,widthDimension-cloudWidth)
      Game.addClouds(xCoordinate);
    }
    if(frameCount%60 === 0){
      //add an obstacle to the game at a random x location
      let xCoordinate = random(0,widthDimension-obstacleWidth);
      let value = round(random(0,objects.length-1));
      Game.addObstacle(value,xCoordinate);
      Game.updateScore();
    }
    Game.update();

    Game.display();
    if(Game.checkCollision()){
      health--;
      if(health<=0){
        gameInProgress = false;
        start = false;
      }
    }
  }
  else if(!gameInProgress && !start){
    //game lost
    image(bgImg,0,0,widthDimension, heightDimension);
    push();
    textSize(20);
    text("GAME OVER", widthDimension/2 - 90,heightDimension/2);
    text("Click anywhere to play again", widthDimension/2 - 90, heightDimension/1.75);
    pop();
  }
}

function keyPressed(){
  //is the game running?
  if(gameInProgress){
    if(keyCode === RIGHT_ARROW){
      Game.updateRight(true);
    }
    if(keyCode === LEFT_ARROW){
      Game.updateLeft(true);
    }
  }
}

function keyReleased(){
  //is the game running?
  if(gameInProgress){
    if(keyCode === RIGHT_ARROW){
      Game.updateRight(false);
    }
    if(keyCode === LEFT_ARROW){
      Game.updateLeft(false);
    }
  }
}

function mouseClicked(){
  if(!gameInProgress){
    Game = new game();
    Game.addClouds(50);
    gameInProgress = true;
  }
}
