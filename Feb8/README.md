Code:


```
function setup() {
  createCanvas(400, 500);
  frameRate(10)
}

function draw() {
  
  background(218,199,215);
  
  for(let x = 0; x<=400; x += 15){
    for(let y = 0; y<=500; y+=20){
      stroke(random(0,255),random(0,255), random(0,255))
      line(x,40,40,y)
    }
  }
  
  for(let x = 400; x > 0; x-=15){
    for(let y = 500; y>0; y-=20){
      line(x,460,460,y)
    }
  }
  fill(255,0,0)
  
  fill(random(0,255),random(0,255), random(0,255))
  
  //draw 5 random rectangles
  for(let x = 1; x<=5; x+=1){
    rect(random(0,400), random(0,500),15,10)
  }
  
  //draw 5 random circles
  for(let x = 1; x<=5; x+=1){
    circle(random(0,400), random(0,500), 20)
  }
  
  
  //draw a random triangle
  for(let x = 1; x<=2; x+=1){
    triangle(random(0,400), random(0,400), random(0,400),random(0,400), random(0,400), random(0,400))
  }
  
  print(mouseX, mouseY)
}
```

