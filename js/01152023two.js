var xoff = 0;
var yoff = 10000;

// let squash;
let aarya;
let tibo;

function setup(){
    createCanvas(750,750);
    // background(0);
    colorMode(HSL, 360, 100, 100, 100);
    imageMode(CENTER);
    max_distance = dist(0, 0, width, height);

    squilly = loadImage('../assets/squillyash.png');
    aarya = loadImage('../assets/squaashrya.png');
    tibo = loadImage('../assets/tisquashbo.png');
}

function draw(){
    background(0);
    var x = map(noise(xoff), 0, 1, 0, width);
    var y = map(noise(yoff), 0, 1, 0, width);
    xoff += 0.01;
    yoff -= 0.01;


    
    for(var i = 0; i <= width; i += 10) {
        for(var j = 0; j <= height; j += 10) {
          var size = dist(mouseX, mouseY, i, j);
          size = size/max_distance * 50;
          image(squilly, i, j, size, size);
      }
    }
    // image(aarya, x, y, aarya.width / mouseX, aarya.height / mouseY);
    // image(tibo, x, y, tibo.width / mouseX, tibo.height / mouseY);



    // noStroke();
    // fill(random(360),100,50,20);
    // rect(x,y,50,50);
}
