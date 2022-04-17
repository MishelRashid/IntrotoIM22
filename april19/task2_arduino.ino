const int LED = 3; //connect LED to pin 3
 void setup() {
   Serial.begin(9600);
   pinMode(LED, OUTPUT);
   while (Serial.available() <= 0) {
     delay(300);              // wait 1/3 second
   }
 }

 void loop() {
   while (Serial.available() > 0) {
     // read the incoming byte:
     int inByte = Serial.read();
     //changing brightness according to key pressed in p5js
       if(inByte == 0){
         //turn LED off 
         analogWrite(LED,0);
       }
       else if(inByte == 1){
         //dim light
         analogWrite(LED,50);
       }
       else if(inByte == 2){
         //medium light
         analogWrite(LED,125);
       }
       else if(inByte == 3){
         //maximum light
         analogWrite(LED,255);
       }
   }
}
