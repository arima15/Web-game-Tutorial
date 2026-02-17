class Background {
    constructor(game){
        this.game = game;
        this.image = document.getElementById('background-night');
        this.width = 2400;
        this.height = this.game.baseHeight;
        this.x;
    }

    update() {
        this.x -= 10;
        if (this.x <= -this.width) this.x = 0;
    }

    draw() {
        this.game.ctx.drawImage(this.image, this.x, 0);
    }

    resize() {
        this.x = 0;
    }
}