const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let fps = 60; 
const scale = 25;

setInterval(() => {
    requestAnimationFrame(draw);
}, 1000/fps)

class Ball {
    constructor(height, radius, color) {
        this.x = canvas.width/2;
        this.height = height;
        this.r = radius;
        this.color = color;

        this.vel = 0;
        this.acc = -386.0885; // gravity in In/s^2
        this.bounceCount = 0;
    }

    display() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, canvas.height - this.r*scale -this.height*scale , this.r*scale, 0, 2 * Math.PI);
        context.fill();
    }

    update() {
        this.vel += this.acc/fps;
        this.height =Math.max(this.height + this.vel/fps, 0);
    }

    collidesWithFloor() {
        return this.height <= 0;
    }

    set nextMaxHeight(expectedHeight) {
        this.vel = Math.sqrt(-initialHeight*this.acc*2)*Math.sqrt(expectedHeight/initialHeight);
    }
}

const initialHeight = 10; // In
const ballRadius = 0.5; // In
const ball = new Ball(initialHeight, ballRadius,'blue');

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log(ball.height);
    if(ball.collidesWithFloor()) {
        ball.height = 0.00001;
        ball.bounceCount += 1;
        ball.nextMaxHeight = Math.max(0, initialHeight-ball.bounceCount);
    }

    if(ball.bounceCount < 11) {
        ball.update();
    }
    ball.display();
}
