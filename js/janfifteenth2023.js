var xoff = 0;
var yoff = 10000;

let squash;

function setup(){
    createCanvas(750,750);
    background(0);
    colorMode(HSL, 360, 100, 100, 100);

    squash = loadImage('../assets/squillyash.png');
}

function draw(){
    var x = map(noise(xoff), 0, 1, 0, width);
    var y = map(noise(yoff), 0, 1, 0, width);
    xoff += 0.01;
    yoff -= 0.01;


    image(squash, x, y, squash.width / mouseX, squash.height / mouseY);

    // noStroke();
    // fill(random(360),100,50,20);
    // rect(x,y,50,50);
}
