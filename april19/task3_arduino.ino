 const int LED = 3; //connect LED to pin 3
 const int SENSOR = A0; //connect sensor to pin A0 (potentiometer)
 void setup() {
   Serial.begin(9600);
   pinMode(LED, OUTPUT);
   pinMode(SENSOR,INPUT);
   while (Serial.available() <= 0) {
     delay(300);              // wait 1/3 second
   }
 }

 void loop() {
   while (Serial.available() > 0) {
     // read the incoming byte:
     int inByte = Serial.read();
       if(inByte==1){
         //turn LED on 
         digitalWrite(LED,HIGH);
       }
       else if(inByte == 0){
         //turn LED off
         digitalWrite(LED,LOW);
       }
     int sensorValue = analogRead(SENSOR); //read value from sensor
   }
}
