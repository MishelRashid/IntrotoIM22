const int LED_PIN = 6; // LED connected to pin 6 on ardruino.
const int SENSOR_PIN = A0; //sensor sends data to pin A0.
int analogValue; //used to capture the analog value given by the photoresistor.

void setup() {
  // put your setup code here, to run once:

  pinMode(LED_PIN, OUTPUT); //we will ouput to the led light, to turn it off or on

}

void loop() {
  // put your main code here, to run repeatedly:
  analogValue = analogRead(SENSOR_PIN); //read the sensor value
  if(analogValue < 50){ //if its below a threshold value, turn the led on
    digitalWrite(LED_PIN,HIGH);
  }
  else{
    digitalWrite(LED_PIN,LOW); //turn it back off once enough light is restored
  }
}
