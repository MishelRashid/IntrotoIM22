//Mishel and Ayesha 
//Intro to Interactive Media - Weekly Assignment
//TASK 2 - Control the brightness of a LED using p5js.

//Credits: Some of the code was taken from Jack's example from class.

let serial;
let latestData = "waiting for data";

function setup() {
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 
 // replace below string with your Arduino's port
 serial.open('/dev/tty.usbmodem1021');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
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

function keyTyped() {
    let outByte = parseInt(key);
    console.log("Sending " + outByte);
    serial.write(outByte); // Send as a string/char/ascii value
}

function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);

}
