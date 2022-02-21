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
To change between the differnet types of wine, I created a variable called "CircleDiameter" and I use this to switch between the different wine ingredients. Moving on, I formatted
the different ingredients in a column and last but not least, ended each element with its average (the array which I had made earlier) which brings an end to my code. I have always
been interested in different ingredients that made a particular type of wine different than others - perhaps its consistency or the ingredients that go into it, so using this dataset
provided me with information about the quality and the difference in ingredients to understand wine quality. 
