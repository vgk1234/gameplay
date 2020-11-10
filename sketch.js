'use strict';



let state = 'title';
let cnv;
let points = 0;

function setup() {
  cnv = createCanvas(600, 600);
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
 
 
function title() {
  background(100);
  textSize(80);
  stroke(255);
  text('MY GAME', 100, 100);

  textSize(30);
  text('Click anywhere to start', 100, 300);
}

function titleMouseClicked() {
    console.log('Canvas is clicked on title page');
    state = 'level 1';
}

function level1 () {
  background(150, 200, 250);
  text('Click for points', 0, height - 30);
}

function level1MouseClicked() {
  points ++;
  console.log('points =' + points);

  if (points >= 10) {
    state = 'you win';
  }
}

function youWin () {
  background(250, 150, 150);
  textSize(80);
  stroke(255);
  text('YOU WIN!!', 100, 100);

  textSize(30);
  text('Click anywhere to restart', 100, 300);
}

function youWinMouseClicked () {
  state = 'level 1';
  points = 0;
}