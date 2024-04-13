const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ravens = [];
class Raven {
    constructor(totalWidth, totalHeight){
        this.totalWidth = totalWidth
        this.totalHeight = totalHeight
        this.spriteWidth = 371
        this.spriteHeight = 239
        this.width = this.spriteWidth / 4
        this.height = this.spriteHeight / 4
        this.x = this.totalWidth / 2.8
        this.y = this.totalHeight - this.height - 85
        this.image = missile
        this.speedX = 3
        this.speedY = 3
    }
    update() {
        this.x -= this.speedX;
        this.y -= this.speedY
    }
    draw() {
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

const raven = new Raven(canvas.width, canvas.height);

function animate(timestamp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raven.draw();
    raven.update();
    requestAnimationFrame(animate);
}
animate();