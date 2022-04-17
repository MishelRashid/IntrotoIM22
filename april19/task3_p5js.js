//Mishel and Ayesha 
//Intro to Interactive Media - Weekly Assignment
//TASK 3 - Using wind example with arduino

//Credits: Some of the code was taken from Jack's example from class.
//Also used code from Aaron Sherwood's wind example.
let serial;
let latestData = "waiting for data";

//variables for the wind example
let velocity;
let gravity;
let position;
let acceleration;
let wind;
let drag = 0.99;
let mass = 50;
let hDampening;

function setup() {
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 
 // replace below string with your Arduino's port
 serial.open('/dev/tty.usbmodem21101');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
  
  //wind example code
  noFill();
  position = createVector(width/2, 0);
  velocity = createVector(0,0);
  acceleration = createVector(0,0);
  gravity = createVector(0, 0.5*mass);
  wind = createVector(0,0);
  hDampening=map(mass,15,80,.98,.96);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString;
}


function draw() {
  background(255,255,255);
  fill(0,0,0);

  //wind example code
  //changing the wind according to the reading from an analog sensor
  let sensor_data = int(latestData);
  //map the data
  //minimum value from sensor = 0, highest value = 1023
  //minimum value we need = -1, highest value = 1
  //-1 represents wind to left, +1 represents wind to right
  wind.x = map(sensor_data,0,1023,-1,1);
  velocity.x*=hDampening;
 
  applyForce(wind);
  applyForce(gravity);
  velocity.add(acceleration);
  velocity.mult(drag);
  position.add(velocity);
  acceleration.mult(0);
  ellipse(position.x,position.y,mass,mass);
  if (position.y > height-mass/2) {
      velocity.y *= -0.9;  // A little dampening when hitting the bottom
      position.y = height-mass/2;
      //this conditions checks if y of ball is greater than the y of floor, which means it is bouncing
    //send a value to arduino to represent that the ball is touching the ground, I will send 1 to represent hitting the floor
      serial.write(1);
    }
  else{
    //this checks if ball has bounced. I will send 0 in this case to show that the ball has left the floor.
    serial.write(0);
  }
}

//code from wind example
function applyForce(force){
  // Newton's 2nd law: F = M * A
  // or A = F / M
  let f = p5.Vector.div(force, mass);
  acceleration.add(f);
}
