function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(202,83,154);
  strokeWeight(6)
  line(140,400,138,328)
  line(233,400, 233,328)
  line(99,287,138,328)
  line(99,287,99,221 )
  line(99,221,80,210)
  line(80,210,99,197)
  noFill()
  curve(82,151,99,197,83,137,110,118) 
  curve(100,236,233,328,240,128,50,138)
  
  strokeWeight(2)
  
  fill(255,0,0)
  triangle(128,132,135,114,145,131)
  
  fill(0,255,0)
  triangle(209,73,228,89, 200,89)
  
  fill(0,0,255)
  triangle(103,63,80,64,95,80)
  
  fill(255,255,0)
  circle(203,130,10)
  
  fill(0,255,255)
  circle(108,154,20)
  
  fill(255,0,255)
  circle(175,60,15)
  
  fill(90,255,0)
  quad(38,31,86,20,69,63,30,76)
  
  fill(230,97,23)
  quad(213,43,234,37,241,57,223,57)
  
  fill(256,32,90)
  quad(130,24,129,40,142,40,146,25)
  
  fill(167,0,0)
  rect(272,45, 30, 30, 20, 15, 10, 5)
  
  fill(255,255,0)  
  square(218,152,20)
  
  fill(182,230,34)
  square(67,100,20)
  
  fill(90,74,156)
  ellipse(40,128,15,10)
  
  fill(255,200,196)
  ellipse(190,30,20,15)
  
  fill(146,20,98)
  ellipse(138,84,25,15)

 
  print(mouseX, mouseY)
  
}
