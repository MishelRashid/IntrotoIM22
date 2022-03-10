//Mishel Rashid
//10 March 2022
//Flying Dpg

let dogImg; //variable that will hold the image of the dog
let bgImg; //variable that will hold the background image
let cloudImg; //variable that will hold the image of the cloud

let cloudWidth = 150; //width of the cloud
let cloudHeight = 100; //height of the cloud

let dogWidth = 80; //width of the dog image
let dogHeight = 100; //height of the dog image

let obstacleWidth = 50; //width of the obstacles
let obstacleHeight = 50; //height of the obstacles

let health = 3; //maximum health

let objects = []; //this array will hold the images of the objects that fall down

let menu_sound; //main menu sound
let game_lost_sound; //game lost sound
let obstacle_hit_sound; //obstacle hit sound


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
  
  //loading the sounds
  menu_sound = loadSound("/start_menu.mp3");
  game_lost_sound = loadSound("/game_lost.mp3");
  obstacle_hit_sound = loadSound("/obstacle_hit.wav");
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
      if(this.objects[i]!=null){
        this.objects[i].update();
        //if the object has left the canvas, nullify it
        if(this.objects[i].Y()>=this.dog.Y()+dogHeight){
          this.objects[i] = null;
        }
      }
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
    let left = [];
    let right =[];
    for(let i =0; i<this.objects.length;i++){
      if(this.objects[i]!=null){
        let objectX = this.objects[i].X();
        let objectY = this.objects[i].Y();

        //Check for collision
        if(objectX >= dogX){
          if(objectX <= dogX + dogWidth){
            if(objectY + obstacleHeight >= dogY){
              //collision detected
              //nullify the current object
              this.objects[i] = null;
              //play sound for obstacle hit
              obstacle_hit_sound.play();
              return true;
            }
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
      if(this.objects[i]!=null)
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


gameInProgress = false; //is the game running?
main_menu = true; //are we in the main menu right now?
rules_menu = false //are we in the rules menu right now?
Game = new game(); //the game
Game.addClouds(50);

function setup() {
  //the dimensions of the canvas will be equal to the dimensions of the background
  createCanvas(widthDimension, heightDimension);

}

function draw() {
  if(gameInProgress && !main_menu && !rules_menu){
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
        //game lost
        //play game lost sound
        game_lost_sound.play();
        gameInProgress = false;
      }
    }
  }
  else if(!gameInProgress && !rules_menu && !main_menu){
    //game lost
    image(bgImg,0,0,widthDimension, heightDimension);
    push();
    textSize(45);
    fill(255,0,0);
    text("GAME OVER", widthDimension/2 - 120,heightDimension/2);
    textSize(20);
    fill(0,0,255);
    text("Click anywhere to go back to main menu", widthDimension/2 - 150, heightDimension/1.25);
    pop();
  }
  if(main_menu){
    //show the main menu
    image(bgImg,0,0,widthDimension,heightDimension);
    push();
    textSize(20);
    //displaying the text in the middle of the screen
    fill(0,0,255);
    text("Start Game", widthDimension/2,heightDimension/2);
    fill(255,0,0);
    text("Instructions",widthDimension/2 - textWidth("Start Game")- 50,heightDimension/2);
    pop();
    
    //play main menu sound in a loop
    if(!menu_sound.isPlaying()){
      menu_sound.play();
    }
  }
  if(rules_menu){
    //show the instructions
    image(bgImg,0,0,widthDimension,heightDimension);
    push();
    textSize(20);
    fill(0,0,255);
    let rules = "Move the dog by using the left and right arrow keys.\nYour objective is to make it as long as you can without hitting\nan obstacle (needles, chemicals, barrels, chocolate)\n. Have Fun!";
    text(rules,widthDimension/2 - 250, heightDimension/2);
    fill(255,0,0);
    text("Go Back", widthDimension/2-50,heightDimension/1.25);
    pop();
  }
    //play main theme sound in a loop
    if(!menu_sound.isPlaying()){
      menu_sound.play();
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
  if(!gameInProgress && !rules_menu && !main_menu){
    Game = new game(); //restart the game
    Game.addClouds(50); //add a cloud to start it off
    health=3; //reset the health
    main_menu = true;
  }
  if(!gameInProgress && main_menu){
    //we are in the start menu
    if(mouseX>=150 && mouseX<=250){
      //within x-axis range
      if(mouseY>=180 && mouseY <=200){
        //instructions button clicked
        rules_menu = true;
        main_menu = false;
      }
    }
    else if(mouseX>=300 && mouseX<=400){
      if(mouseY>=180 && mouseY<=200){
        //start game button clicked
        gameInProgress = true;
        main_menu = false;
      }
    }
  }
  if(!gameInProgress && rules_menu){
    //we are in the instructions menu
    //detect click on "go back" button
    if(mouseX>=250 && mouseX <= 330){
      if(mouseY>=305 && mouseY<=320){
        //button clicked
        rules_menu = false;
        main_menu = true;
      }
    }
  }
}
