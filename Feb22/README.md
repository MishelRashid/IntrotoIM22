General comments: 


For this assignment, I used the dataset that was made available to me through "kaddle" - in which I found the dataset related to wine quality and it's ingredients. I found it really
interesting 

I started of by 
using the arrays "data" in which the data will be stored and "averages" in which the averages of each field will be stored which was seen later on in my program.
```
let data = [] //data will be stored in this array
let averages =[] //global array - will hold the average of each field. We will need this later
```


I then made individual arrays for each element and best quality in the dataset (there being a total of 10 elements)
```
let bestQuality;
let bestFixedAcidity = [];
let bestVolatileAcidity = [];
let bestCitricAcidity = [];
let bestResidualSugar = [];
let bestChlorides = [];
let bestFreeSulfur = [];
let bestTotalSulfurDioxide = [];
let bestDensity = [];
let bestPH = [];
let bestSulphates = [];
let bestAlcohol = [];
```
To change between the differnet types of wine, I created a variable called "CurrentChoice" and I use this to switch between the different wine ingredients. Moving on, I formatted
the different ingredients in a column and last but not least, ended each element with its average (the array which I had made earlier) which brings an end to my code.
However, one problem I faced was repeating the names of each variable name (the arrays mentioned above) again and again. To tackle this, I did make a couple of functions that would take care of some stuff that I had to repeatedly do. But when displaying text on the screen for the visualization, I had to write them all individually and could not come up with a better way to do so. Therefore, there was a lot of repetition in the code (like in the average function where I had to calculate the average of each ingredient separately). Lastly, I also got familiar with text fonts. I downloaded a font I liked from the web and uploaded it on the p5js web server in order to use it in my program.



I have always
been interested in different ingredients that made a particular type of wine different than others - perhaps its consistency or the ingredients that go into it, so using this dataset
provided me with information about the quality and the difference in ingredients to understand wine quality. 
