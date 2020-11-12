'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let coinImg;

function preload() {
  playerImg = loadImage('Assets/emoji-player.jpg');
  coinImg = loadImage('Assets/coin.jpg');
}

function setup() {

  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

  // coins[0] = new Coin();
  coins.push(new Coin());

}

function draw() {

  switch (state) {

    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;

    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;

    default:
      break;

  }

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down';
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function title() {

  background(0);

  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w / 2, h / 5);

  textSize(30);
  text('Click anywhere to start', w / 2, h / 2);

}

function titleMouseClicked() {

  console.log('Canvas is clicked on title page');
  state = 'level 1';

}

function level1() {

  background(100, 100, 150);

  if(random(1) <= 0.01) {
    coins.push(new Coin());
  }

  // fill(0);
  // text('Click for points', w/2, h - 30);

  player.display();
  player.move();


  for(let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  // coins.forEach(function(coin) {
  //   coin.display();
  //   coin.move();
  // })
  
  // for (let coin of coins) {
  //      coin.display();
  //      coin.move();
  // }

  for (let i = coins.length - 1; i >= 0; i--) {
    if(dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      console.log(points);
      coins.splice(i, 1);
    } else if(coins[i].y > h) {
      coins.splice(i, 1);
      console.log('Coin is out of town');
    }
  }

  text(`points: ${points}`, w / 4, h - 30);

}

function level1MouseClicked() {

  points++;
  console.log('points =' + points);

  if (points >= 10) {
    state = 'you win';
  }

}

function youWin() {

  background(250, 150, 150);

  textSize(80);
  fill(0);
  text('YOU WIN!!', w / 2, h / 2);

  textSize(30);
  text('Click anywhere to restart', w / 2, h * 3 / 4);

}

function youWinMouseClicked() {

  state = 'level 1';
  points = 0;

}