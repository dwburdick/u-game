// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x + this.speed);
    if (this.x > 505) {
        this.x = -101;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = playerSprite;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(playerSprite), this.x, this.y);
};
Player.prototype.update = function(dt) {
    if (this.y <= 10) {
        restartGame();
    }
};
Player.prototype.handleInput = function(go) {
    if (go == 'left') {
        if ((this.x - 50) >= 0) {
            this.x = this.x - 50;
        } else {
            return false;
        }
    } else if (go == 'right') {
        if ((this.x + 50) <= 425) {
            this.x = this.x + 50;
        } else {
            return false;
        }
    } else if (go == 'up') {
        this.y = this.y - 50;
    } else if (go == 'down') {
        if ((this.y + 50) <= 455) {
            this.y = this.y + 50;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

// Now instantiate your objects.
var e1 = new Enemy(0, 51, 1);
var e2 = new Enemy(-202, 51, 1);
var e3 = new Enemy(-1501, 51, 2.25);
var f1 = new Enemy(0, 136, 1);
var f2 = new Enemy(-505, 136, 1.75);
var g1 = new Enemy(0, 221, 1.5);
var h1 = new Enemy(101, 306, 1.5);
var h2 = new Enemy(-101, 306, 1.5);

// Place all enemy objects in an array called allEnemies
var allEnemies = [e1, e2, e3, f1, f2, g1, h1, h2];
// Place the player object in a variable called player
var player = new Player(202, 455);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
function controlsOn() {
    document.addEventListener('keyup', function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
        };

        player.handleInput(allowedKeys[e.keyCode]);
    });
}


function checkCollisions()  {
    for (var i in allEnemies) {
        if (Math.abs((allEnemies[i].x + 28) - player.x) <= 50 && Math.abs(allEnemies[i].y - player.y) <= 50) {
            restartGame();
         }
    }
}

function restartGame() {
    document.location.href = "";
}

var playerSprite = 'images/char-cat-girl.png';
var p0 = "images/char-cat-girl.png";
var p1 = "images/char-boy.png";
var p2 = "images/char-horn-girl.png";
var p3 = "images/char-pink-girl.png";
var p4 = "images/char-princess-girl.png";

var playerOptions = [p0, p1, p2, p3, p4];
var playerIndex = 0;