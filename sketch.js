let startX = 200;
let startY = 50;
let len = 160;
let angle = 0;
let aVelocity = 0;
let aAcc = 0;


function setup(){
    createCanvas(400,400);
    angle = PI/4;
}

function draw(){
    background(125);
    translate(startX,startY);
    let bobX = len * sin(angle);
    let bobY = len * cos(angle);

    line(0,0,bobX , bobY);
    circle(bobX,bobY , 20);
    stroke(255);
    strokeWeight(2);

    aAcc = -.008*  sin(angle); 
    angle +=aVelocity;
    aVelocity += aAcc;

    aVelocity *=.991;
    print(aAcc);
}