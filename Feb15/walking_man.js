class Person{
  
  constructor(x,y,d){
    this.headX = x;
    this.headY = y;
    this.headDiameter = d;
    this.right=true;
    
    this.armsX = [x-25, x+25]; //x-axis of left hand, x-axis of right hand
    this.armsY = [y+50, y+50+25]; // y-axis of arms
    
    this.legX = [x-25, x+25];
    
    this.legY = [this.armsY[0] + 75, this.armsY[0] + 75 + 25];
    
  }
  
  drawPerson(){
    //head of person
    strokeWeight(3)
    circle(this.headX,this.headY,this.headDiameter);
    if(this.right === true){
      circle(this.headX+15,this.headY-5,2)
      arc(this.headX-5+this.headDiameter/2, this.headY+5,5,3,0,PI,CHORD)
    }
    else{
      circle(this.headX-15, this.headY-5, 2)
      arc(this.headX+5-this.headDiameter/2, this.headY+5,5,3,PI/7,0,CHORD)
    }
    
    //body
    line(this.headX, this.headY+this.headDiameter / 2, this.headX, this.legY[0]);
    
    //left arm
    // print(this.armsX)
    line(this.headX,this.armsY[0],this.armsX[0],this.armsY[1]);
    
    //right arm
    line(this.headX, this.armsY[0], this.armsX[1], this.armsY[1]);
    
    //left leg
    line(this.headX, this.legY[0], this.legX[0], this.legY[1]);
    
    //right leg
    line(this.headX, this.legY[0], this.legX[1], this.legY[1]);
    
    //floor
    push();
    fill(0,255,0);
    noStroke();
    rect(-1,this.legY[1],width+5,height+5)
    pop();
  }
  
  moveRight(){
    //moving the arms
    this.right = true;
    
    if(this.armsX[0] >= (this.headX + (this.headDiameter/2))){
      let temp = this.armsX[1];
      this.armsX[1] = this.armsX[0];
      this.armsX[0] = temp;
    }
    this.armsX[0] +=15;
    this.armsX[1] -=5;
    
    //moving the legs
    if(this.legX[0] >= (this.headX + (this.headDiameter/2))){
      let temp = this.legX[1];
      this.legX[1] = this.legX[0];
      this.legX[0] = temp;
    }
    this.legX[0] +=15;
    this.legX[1] -=5;
    
    //moving the entire body
    
    this.headX +=5;
  }
  
  moveLeft(){
    this.right = false;
    //moving the arms
    
    if(this.armsX[0] >= this.headX+this.headDiameter/2){
      let temp = this.armsX[1];
      this.armsX[1] = this.armsX[0];
      this.armsX[0] = temp;
    }
    this.armsX[1] -= 15;
    this.armsX[0] +=5;
    
    //moving the legs
    if(this.legX[0] >= this.headX+this.headDiameter/2){
      let temp = this.legX[1];
      this.legX[1] = this.legX[0];
      this.legX[0] = temp;
    }
    this.legX[1] -= 15;
    this.legX[0] +=5;
    
    this.headX -=5;
  }
  
  getX(){
    return this.headX;
  }
}

let right = true;
let headDiameter = 50;
function setup() {
  createCanvas(600, 400);
  frameRate(30)
}
let person = new Person(300,200,headDiameter);
function draw() {
  background(255);
  
  //the sky
  fill(51, 204, 255);
  push();
  noStroke();
  rect(-2,-2,width + 50,100)
  pop();
  
  //the sun
  push();
  fill(255,255,0)
  noStroke();
  circle(width,0,100)
  pop();
  
  
  
  noFill();
  
  person.drawPerson();
  
  if(right === true && (person.getX() + headDiameter/2) >= width){
    right = false;
  }
  
  if(right === false && (person.getX() - headDiameter/2)<=0){
    right = true;
  }
  if(right === true){
    person.moveRight();
  }else{
    person.moveLeft();
  }
}
