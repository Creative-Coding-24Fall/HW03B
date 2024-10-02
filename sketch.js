function setup() {
  createCanvas(windowWidth, windowHeight);


  for(var x = 0; x <= width; x += 35) {
    for(var y = 0; y <= height; y += 30) {

       fill(0,0,0);
       ellipse(x,y,30,20);
       fill(250,0,200);
       ellipse(x,y,15)
       fill(30,49,36);
       ellipse(x+5,y+5,10);
       ellipse(x+17.5,y+15,15,8);
       fill(233,233,233);
       ellipse(x+17.5,y+15,5)
    }
  }


}
  

function draw() {
}
