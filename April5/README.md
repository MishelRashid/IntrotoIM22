# Plan / Process
- For the analog switch, I used a photoresistor to control a LED. 
- When the sensor detects that it is dark, the LED is turned on automatically. Likewise, when there is enough light, the light is turned off.
- Here's the schematics:
![analog_schematics](https://user-images.githubusercontent.com/98512494/161666932-7c30601e-888b-401b-a34a-150229e2dda5.jpeg)

- Picture of the setup: 
![light_sensor picture](https://user-images.githubusercontent.com/98512494/161666962-a29b7318-502c-45da-80bd-31c2e49ae3ca.jpeg)

- Demo Video: 

https://user-images.githubusercontent.com/98512494/161666979-fcd92a89-0627-4408-84fb-fbb1828750ae.mp4

- For the digital switch, I used two different buttons to control a LED.
- One of the buttons makes the LED more brigther, the other makes it more dim. 
- Added conditions -> make sure that it does not get brighter than "255" or less than "0". 
````
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
  
````
- Schematics: 
![digital_schematics](https://user-images.githubusercontent.com/98512494/161667216-6199a3d7-2f29-49b3-85a0-c5d4a3d25059.jpeg)

- Picture of the setup: 
![bright_dim picture](https://user-images.githubusercontent.com/98512494/161667267-12bfb870-daa9-47cc-94fa-1adaa62f36c8.jpeg)

- Video of the setup:



https://user-images.githubusercontent.com/98512494/161667307-6d3d4744-b8bc-4eac-abe1-f5a09c3b3a1e.mp4




