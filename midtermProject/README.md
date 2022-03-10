# Midterm Project
I started out this project with an initial idea of making "flappy dog", similar to "flappy bird". However, I pivoted from the original idea and made it Flying Dog, where the dog seems to be flying with the help of a balloon and the user needs to avoid obstacles to see how high they can get before losing. The idea was to make a fun and addictive game.

I figured out the complicated part of the project last week and uploaded it into the repository. After solving the complicated part, it was easy to make the rest of the game other than a few setbacks.
1- I added obstacles to the game. These include: needles, toxic chemicals and chocolate (because dogs cannot eat chocolate).
2- The user controls the dog using the right and left key on the keyboard. Handling these keystrokes proved to be hard because I could not access the games attributes outside the class scope. To solve this, I made use of additional methods in the classes that allowed me to move the dog to the left and right. I added additional checks to make sure that the dog does not leave the canvas.
3- After error-testing the code, I realized that the game ending upon hitting one obstacle was too short and hard. Therefore, I introduced another variable into the game: health. The user has 3 health points at the start and loses 1 point each time the dog hits an obstacle. This made the game more fun to play.
4- Added music to the game. This part was also tricky because sometimes the sound would glitch. I pinpointed the issue to be using ".play()" method inside the draw function, which restarted the sound everytime the draw function was called (60 times a second). To solve this, I used an if statement that made sure that the sound only replays after it has been played completely once.

```
//play main theme sound in a loop
if(!menu_sound.isPlaying()){
  menu_sound.play();
}
```
5- After the game was functional, I added a main menu and a game over menu that allows the user to restart the game.
6- The main menu was a bit tricky at first but with the use of global variables, I could track where the user was in the game: is the user in the main menu? Is the user viewing instructions? Is the game in progress? Has the game been lost and is the user in the "game over" message window.
7- Using these variables, I detected mouse clicks to allow for user-interface. 
8- After further testing of the game, I feel like it is finally complete.

# Notes
Using object oriented programming programming allowed me to make the program more "modular". By this, I mean that if I saw an error when test-playing the game, I knew exactly where in the code I had made a logical error. This made the debugging phase a lot easier. Secondly, the nature of the code I used allows me to add more objects to the game if I want to easily without much appending of the code itself. Lastly, the "reference" page on p5js was very helpful. I found methods like subset of an array that I needed in my game. I hope you enjoy playing the game and I open to any feedback to make improvements.

