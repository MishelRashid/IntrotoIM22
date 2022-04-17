const int Sensor_Pin = A0; //connect the sensor to pin A0

void setup() {
  Serial.begin(9600); 
}

void loop() {
  int inByte = Serial.read();
  int sensorValue = analogRead(A0); //reading analog input
}
