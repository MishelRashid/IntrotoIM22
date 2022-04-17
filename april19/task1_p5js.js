//Mishel and Ayesha 
//Intro to Interactive Media - Weekly Assignment
//TASK 1 - make the ellipse move on the horizontal axis from an analog sensor input

//Credits: Some of the code was taken from Jack's example from class.

//start serial input/output
let serial;

//latest Data taken from the sensor
let latestData = "waiting for data";

function setup() {
 createCanvas(windowWidth, windowHeight); //create a canvas

 serial = new p5.SerialPort(); //start serial input/output

 serial.list();
 
 //IMPORTANT
  // make sure to replace below string with your Arduino's port
 serial.open('/dev/tty.usbmodem1021');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
}

function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
  //printing the list of available usb ports
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
  //this function gets data from the sensor
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString; //Reading from analog sensor
}


function draw() {
 background(255,255,255);
 fill(255,0,0); //red ellipse
  //x-axis of the ellipse will be the analog reading we got.
  let xCoord = int(latestData);
  //map the values between the canvas
  //lowest value from sensor = 0, highest value = 1023
  //lowest value we need = 0, highest value = width
  //we do this to make sure that the ellipse doesn't leave the canvas
  xCoord = map(xCoord,0,1023,0,width);
 ellipse(xCoord,height/2,20,10);
  //ellipse of width 20 and height 10 is drawn on the canvas at the middle height, and x axis is determined by the analog input.

}
