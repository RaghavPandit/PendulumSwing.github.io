let startX = 200;
let startY = 200;
let len = 160;
let angle = 0;
let aVelocity = 0;
let aAcc = 0;
let damping = 0.995;
let mass = 0.5;


function setup(){
    createCanvas(400,400);
    angle = PI/2 +PI/4;
    frameRate(60);
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

    aAcc = (-9.8*mass *  sin(angle)); 
    aVelocity += aAcc/60;
    angle +=aVelocity/60;

    aVelocity *=damping;

    print(aVelocity);
    if(abs(aVelocity) < 0.000008920655905097808){
        print('Stop');
        print(bobX,bobY);
        noLoop();
    }
}