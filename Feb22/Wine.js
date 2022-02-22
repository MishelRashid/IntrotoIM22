//I renamed the csv file to wine so it is easy to write later on.
//Please note that the original file was called "winequality-red.csv"
//credits for dataset: kaggle

//visualization made by Mishel Rashid

let data = [] //data will be stored in this array
let averages =[] //global array - will hold the average of each field. We will need this later.

//the following arrays will save the best quality and elements for the best wine 
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

function preload(){
  //this function makes sure that everything is loaded before the setup function.
  //Loading the dataset
  data = loadStrings("/wine.csv");
  
  font = loadFont("/england.ttf");
  
  //Loaded the data here to ensure it is done before we use it in the actual program. This makes sure that no errors occur later on.
}


let circleX; //x-axis of the center of button
let circleY; //y-axis of the center of button

function setup() {
  createCanvas(400, 400);
  circleX = width/2;
  circleY = height-40;
  
  //the following line checks if the dataset was successfully loaded into the program or not
  if(data === null){
    print("Failed to Load Data. Exiting...")
    
    //the following loop does nothing. I added this so that nothing else in the program runs as the data was not successfully loaded.
    while(true){
      //do nothing
      //infinite loop
    }
  }
  
  else{
    //Data was successfully loaded
    
    //the following line prints the number of lines loaded using the length function on the array which returns the total number of elements in that array
    print("Data Sucessfully Loaded! Number of Lines:",data.length);
  }
  
  findBestQuality(); //this function finds the wines with the best qualities to show their ingredients
  
}

function findBestQuality(){
  //this function will go through the dataset and find the record with the best quality (highest quality). 
  //The best quality record will be saved in the global arrays defined in the start of the program
  
  let singleRow = []; //this will hold one single record at a time in the following for loop
  
  for(let i = 1; i<data.length; i = i + 1){
    //this for loop goes over all the strings in the data array that was filled earlier in the preload function
    //Note that the variable i starts from 1 and not 0 because the first line is the heading of the fields which we will not need in this program.
    
    singleRow = split(data[i], ",");
    
    let quality = float(singleRow[11]);
    
    if(i === 1){
      bestQuality = quality;
      updateArrays(singleRow); //updates all other arrays
    }
    else{
      if(!isNaN(quality)){
        if(quality > bestQuality){ 
          bestQuality = quality;
          clearArrays(); //clears all other arrays
        }

        if(quality === bestQuality){
          //quality is same as the best quality, need to update all the fields
          updateArrays(singleRow);

        }
      }
    } 
  }
  //end of for loop
  
}

function clearArrays(){
  //clears all the arrays that are defined
  bestFixedAcidity = [];
  bestVolatileAcidity = [];
  bestCitricAcidity = [];
  bestResidualSugar = [];
  bestChlorides = [];
  bestFreeSulfur = [];
  bestTotalSulfurDioxide = [];
  bestDensity = [];
  bestPH = [];
  bestSulphates = [];
  bestAlcohol = [];
}

function updateArrays(record){
  //this function updates all the global arrays to include the new data that we have found
  
  //we also need to convert everything to float so it can be used for calculations later
  //The float function converts the string to a float (decimal numbers)
  bestFixedAcidity.push(float(record[0]));
  bestVolatileAcidity.push(float(record[1]));
  bestCitricAcidity.push(float(record[2]));
  bestResidualSugar.push(float(record[3]));
  bestChlorides.push(float(record[4]));
  bestFreeSulfur.push(float(record[5]));
  bestTotalSulfurDioxide.push(float(record[6]));
  bestDensity.push(float(record[7]));
  bestPH.push(float(record[8]));
  bestSulphates.push(float(record[9]));
  bestAlcohol.push(float(record[10]));
}

let currentChoice = 0; //this variable is used so the user can switch between different wines and ingredients
let circleDiameter = 50; //diameter of the circle button at the bottom of the screen

let end = false; //have we gone through all the entries?

function draw() {
  
    textFont("Comic Sans MS")
  
  if(end===false){
    background(255,153,153);
    fill(153,0,0)
    //button on bottom to change ingredients
    circle(width/2,height-40,circleDiameter);
    
    if(currentChoice!=bestFixedAcidity.length-1){
      text("Click me to move to next wine ingredients.",width/2.5-100,height-75);
    }
    else{
      text("Show Summary", width/2-50,height-75);
    }

    //title of the page
    push();
    textFont(font, 25)
    text("Ingredients of Best Wine", width/2 - 105,20);
    pop();
    
    
    textSize(15);
    //showing individual information
    text("Quality = " + bestQuality, 30,50);
    text("Fixed Acidity = " + bestFixedAcidity[currentChoice], 30, 70);
    text("Volatile Acidity = " + bestVolatileAcidity[currentChoice],30,90);
    text("Citric Acid = " + bestCitricAcidity[currentChoice], 30, 110);
    text("Residual Sugar = " + bestResidualSugar[currentChoice], 30, 130);
    text("Chlorides = " + bestChlorides[currentChoice],30,150);
    text("Free Sulfur Dioxide = " + bestFreeSulfur[currentChoice],30,170);
    text("Total Sulfur Dioxide = " + bestTotalSulfurDioxide[currentChoice],30,190);
    text("Density = " + bestDensity[currentChoice],30,210);
    text("pH level = " + bestPH[currentChoice],30,230);
    text("Sulphates = " + bestSulphates[currentChoice],30,250);
    text("Alcohol = " + bestAlcohol[currentChoice],30,270);
  }
  else{
    //gone through every item, showing summarized information
    background(220);
    getAverages();
    
    //title of page
    text("Summarized Information (Average of each ingredient)",width/2 - 180, 20);
    
    //showing info as text
    text("Fixed Acidity = " + round(averages[0],2), 30, 70);
    text("Volatile Acidity = " + round(averages[1],2),30,90);
    text("Citric Acid = " + round(averages[2],2), 30, 110);
    text("Residual Sugar = " + round(averages[3],2), 30, 130);
    text("Chlorides = " + round(averages[4],2),30,150);
    text("Free Sulfur Dioxide = " + round(averages[5],2),30,170);
    text("Total Sulfur Dioxide = " + round(averages[6],2),30,190);
    text("Density = " + round(averages[7],2),30,210);
    text("pH level = " + round(averages[8],2),30,230);
    text("Sulphates = " + round(averages[9],2),30,250);
    text("Alcohol = " + round(averages[10],2),30,270);
    
    //the draw function does not need to be called again as we are done with everything now
    noLoop();
  }
}

function mouseClicked(){
  let d = dist(mouseX, mouseY, circleX, circleY);
  if(d<=circleDiameter/2){
    //change the current choice, show next ingredient
    if(currentChoice === bestFixedAcidity.length - 1){
      //end reached
      end = true;
    }
    else{
      //increase choice by 1
      currentChoice ++;
    }
  }
}

function getAverages(){
  //returns an array of all averages of each field
  
  let sum = 0; //variable to hold sum
  for(let i = 0; i<bestFixedAcidity.length; i++){
    sum += bestFixedAcidity[i]; //adding each entry to the sum
  }
  
  averages.push(sum/bestFixedAcidity.length); 
  
  //pushing the average to the global array by dividing the sum to the number of entries there are
  
  
  //same code is repeated
  //this is because the variable names of arrays are different, therefore, I could not use a loop for this purpose.
  //Although I could get the names of the different arrays by placing the strings in another array, i cannot use the strings to access a variable.

  sum = 0;
  for(let i = 0; i<bestVolatileAcidity.length; i++){
    sum += bestVolatileAcidity[i];
  }
  
  averages.push(sum/bestVolatileAcidity.length);
  
  sum = 0;
  for(let i = 0; i<bestCitricAcidity.length; i++){
    sum += bestCitricAcidity[i];
  }
  
  averages.push(sum/bestCitricAcidity.length);
  
  sum = 0;
  for(let i = 0; i<bestResidualSugar.length; i++){
    sum += bestResidualSugar[i];
  }
  
  averages.push(sum/bestResidualSugar.length);
  
  sum = 0;
  for(let i = 0; i<bestChlorides.length; i++){
    sum += bestChlorides[i];
  }
  
  averages.push(sum/bestChlorides.length);
  
  sum = 0;
  for(let i = 0; i<bestFreeSulfur.length; i++){
    sum += bestFreeSulfur[i];
  }
  
  averages.push(sum/bestFreeSulfur.length);
  
  sum = 0;
  for(let i = 0; i<bestTotalSulfurDioxide.length; i++){
    sum += bestTotalSulfurDioxide[i];
  }
  
  averages.push(sum/bestTotalSulfurDioxide.length);
  
  sum = 0;
  for(let i = 0; i<bestDensity.length; i++){
    sum += bestDensity[i];
  }
  
  averages.push(sum/bestDensity.length);
  
  sum = 0;
  for(let i = 0; i<bestPH.length; i++){
    sum += bestPH[i];
  }
  
  averages.push(sum/bestPH.length);
  
  sum = 0;
  for(let i = 0; i<bestSulphates.length; i++){
    sum += bestSulphates[i];
  }
  
  averages.push(sum/bestSulphates.length);
  
  sum = 0;
  for(let i = 0; i<bestAlcohol.length; i++){
    sum += bestAlcohol[i];
  }
  
  averages.push(sum/bestAlcohol.length);
  
}
