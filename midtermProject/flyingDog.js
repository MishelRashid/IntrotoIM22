//Mishel Rashid
//3/1/22
//Midterm Project: Flying Dog

let dogImg; //variable that will hold the image of the dog
let bgImg; //variable that will hold the background image
let widthDimension = 300; //width of the canvas
let heightDimension = 600; //height of the canvas
let clouds = []; //array that will hold objects of clouds
let numClouds = 2; //number of clouds we want in the frame at a time

function preload() {
  //loading the images
  dogImg = loadImage("/dog.png");
  cloudImg = loadImage("/cloud1.png");
}

class Cloud {
  constructor(x) {
    this.img = cloudImg;
    this.x = x; //x axis of image
    this.y = 0; //y axis of image, starts at the top.
  }

  update() {
    //this function updates the y-axis of the clouds so it appears as if they are going down (by increasing the y value)
    this.y += 1;
    if (this.y >= widthDimension) {
      //if the clouds have reached the bottom, add 2 more random clouds and erase the old ones from the array
      addClouds();
    }
  }

  display() {
    image(this.img, this.x, this.y); //displays the clouds on the screen
  }
}

function addClouds() {
  clouds = []; //resets the array so that the old clouds are removed
  for (let x = 0; x < numClouds; x++) {
    //adds number of clouds to the array
    xCoord = random(20, widthDimension - 20); //randomly pick x-coordinate so it isnt repetitive
    append(clouds, new Cloud(xCoord)); //add the new cloud to the array
  }
}

function setup() {
  //the dimensions of the canvas will be equal to the dimensions of the background
  createCanvas(heightDimension, widthDimension);
  addClouds(); //adds clouds at the start of the game
}

function draw() {
  background(153, 255, 255);

  //the following for loop displays the clouds
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].update(); //makes clouds go down, refer to the class method for more information
    clouds[i].display(); //displays the clouds
  }

  image(dogImg, width / 2 - 50, height - 150); //shows the dog
}
