
class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/inseto.png';
    }
    update(dt) {
        this.x += this.speed * dt;
        if (this.x > 510) {
            this.x = -50;
            this.speed = 117 + Math.floor(Math.random() * 333);
        }
        ;
        if (player.x < this.x + 80 &&
            player.x + 80 > this.x &&
            player.y < this.y + 90 &&
            90 + player.y > this.y) {
            player.x = 202;
            player.y = 405;
        }
        ;
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}



class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.player = 'images/personagem-garoto.png';
    }
    update(dt) {}
    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
    }
    handleInput(keyPress) {
        
        if (keyPress == 'left' && this.x > 0) {
            this.x -= 100;
        }
        ;
        if (keyPress == 'right' && this.x < 405) {
            this.x += 100;
        }
        ;
        if (keyPress == 'up' && this.y > 0) {
            this.y -= 80;
        }
        ;
        if (keyPress == 'down' && this.y < 405) {
            this.y += 80;
        }
        ;
        if (this.y < -15) {
                        
             this.x = 202;
             this.y = 405;

        }
        
    };
}




var allEnemies = [];

var enemyLocation = [63, 147, 229];

enemyLocation.forEach(function (y) {
    enemy = new Enemy(0, y, 287);
    allEnemies.push(enemy);
});

var player = new Player(202, 405);

document.addEventListener('keydown', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});