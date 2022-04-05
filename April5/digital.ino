const int dimButton = A3;
const int brightButton = A2;
const int LED_PIN = 11; 
int brightness = 0;

void setup() {
  Serial.begin(9600);
  pinMode(dimButton, INPUT);
  pinMode(brightButton, INPUT);
  pinMode(LED_PIN,OUTPUT);
}

void loop() {
  if(digitalRead(dimButton) == HIGH){
    //dim button pressed
    if(brightness>0){
      brightness = brightness - 1;
    }
  }

  if (digitalRead(brightButton) == HIGH ){
    if(brightness<255){
      brightness = brightness + 1;
    }
  }
  analogWrite(LED_PIN, brightness);
  Serial.println(brightness);
  delay(10);
}
