
function setup() {
  createCanvas(500,500);
  //textFont('Futura');
  angleMode(DEGREES);
  frameRate(1);

  
  // Create canvas, set angle mode, etc.
}



function draw() {
  translate(width/2, height/2-20);
  background(generateColour());
    
  fill(255,255,255,255);
  textSize(22);
  text(clockText(), -84, 232);
  
  fill(255,255,255,100);
  textSize(12);
  text(year() +" / " + month() + " / "+ day() + " \n", -40,250);

  push();
  rotate(270);
  fill(generateColour());
  noStroke();
  ellipse(0, 0,390);
  
  fill(255,255,255,100)
  textSize(9);
  for(var i = 1; i<13; i++) {
    rotate(30);
    text(i,180,0);
  }
  
  fill(255);

  scale(0.96);
  
  clockHand();
  //noLoop();

  pop();
    
  fill(255);
  textSize(22);
  text(generateColour(), -44, 20);
  
  textSize(10);
  text('     Press any key \n to change the color', -44, -22);
  
  fill(generateColour());
  push();
  fill(0);
  rotate(270);

  pop();
}

function keyPressed() {
  redraw(); 
}



function clockText() {

  var h = hour();
  var m2 = minute();
  var s = second();
  //var millisecond = millis();
  if(m2<10){
    m2 = "0"+minute();
  }else{
    m2=m2
  }
  
  if(s<10){
    s = "0"+second();
  }else{
    s=s
  }
  
  if (h> 12) {
      if(h>22){
       return (h-12)+" : "+m2+" : "+s+"   P.M.";
      }else{
       return "0"+ (h-12)+" : "+m2+" : "+s+"   P.M.";
      }
  
  }else{
    return h+" : "+m2+" : "+s+"   A.M.";
    
    
  }
}

function clockHand() {
  // Do parametric things

  var h = hour();
  var m2 = minute();
  var s = second();
  
  noFill();
  strokeWeight(10.0);
  stroke(255,255,255,100);
  strokeCap(ROUND);
  if(h>12){
    arc(0,0,320,320,0,(h-12)*30);
  }else{
   arc(0,0,320,320,0,(h-12)*30);
  }
  
  
  stroke(255,255,255,180);
  arc(0,0,260,260,0,(m2-12)*6);
  
  stroke(255,255,255,255);
  arc(0,0,200,200,0,(s-12)*6);

}


function generateColour() {
    var hex = '#';
    var range = 'ABCDEF0123456789';

    for (var i = 0; i < 6; i++ ) {
      hex += range.charAt(Math.floor(Math.random() * range.length));
    }
    
    
    return hex;
  }