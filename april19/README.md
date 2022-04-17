# Description
A short description: worked with Ayesha to complete 3 in-class exercises. 
<ol>
  <li>Control an ellipse on the x-axis using an analog sensor</li>
  <li>Control the brightness of an LED on arduino using p5js </li>
  <li>Editing the wind example to:
    <ul>
      <li>Wind changes according to analog sensor input.</li>
      <li>Light blinks when ball touches the ground.</li>
    </ul
  </li>
</ol>
    
# First Task
Using an analog sensor (potentiometer), we change the ellipse on the horizontal axis.
-Used Jack's code from class to make edits to it.
-Instead of two analog sensors (potentiometer and LDR), we just used one: potentiometer.
-The analog readings are read in p5js, mapped between 0 and the width of the canvas, and then these values were used as the x axis of the ellipse (center of ellipse).
-Refer to the code for mapping process mentioned above.
    
# Second Task
No sensors used here. We just needed an LED on the arduino and used input from the user to control the brightness.
-There are 4 levels of brightness: off, dim, medium, and high.
-As the user presses keys (between 0 and 3), these changes are made.
    
    
# Third Task
Making the LED turn on when the ball bounces, and controlling the wind from an analog sensor
-This was a combination of the previous two tasks
-Edited both jack's and Aaran Sherwood's example to make this work
-Took reading from the analog sensor (potentiometer), mapped it between -1 and 1, and adjusted wind according to this value
-There was already a condition in the example that checked whether the ball was touching the ground or not.
-We just added an additional statement in this block of code to send a value of "1" to the arduino if it was touching the ground and "0" otherwise.
-The arduino code handled these values of 1 and 0 to control the LED.
-If the value received from p5js was 1, the LED turns on. 
-If 0, turn the LED off.

````
       if(inByte==1){
         //turn LED on 
         digitalWrite(LED,HIGH);
       }
       else if(inByte == 0){
         //turn LED off
         digitalWrite(LED,LOW);
       }
````
    
# Video of task 3:
    

https://user-images.githubusercontent.com/98512494/163730242-99bc4853-f53a-4c21-8043-a241082af617.mp4


