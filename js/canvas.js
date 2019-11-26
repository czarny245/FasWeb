var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

let style_height123 = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
let style_width123 = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

canvas.width = style_width123
canvas.height = style_height123

var SCREEN_WIDTH = $(window).width();
var SCREEN_HEIGHT = $(window).height();

var mouseX = (window.innerWidth - SCREEN_WIDTH);
var mouseY = (window.innerHeight - SCREEN_HEIGHT);

var x
if (innerWidth < 600) {x = 35} else {x = 150}


getLineDistance = function() {
  var line_distance
  if (innerWidth < 700) {line_distance = 50}
  if (innerWidth < 1000) {line_distance = 80}
  else {line_distance = 120}
  return line_distance
}


var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = x, // Number of stars
    mouse = {
      x: mouseX,
      y: mouseY

//      x: 0,
//      y: 0
    };  // mouse location


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var colors = ['#324FAA', '#D0D0D0', '#99B0E1', '#3A7CF9']

var rand = colors[Math.round(Math.random() * colors.length)];


// Push stars to array

for (var i = 0; i < x; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    //radius: Math.random() * 1 + 1,
    radius: getRandomInt(2)+3,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25,
    // color: colors[Math.round(Math.random() * colors.length)],
    color: '#001c70'
  });
}

// Draw the scene

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = s.color;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  ctx.beginPath();
  for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x,starI.y);
    if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if(distance(starI, starII) < getLineDistance()) {
//        ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x,starII.y);
      }
    }
  }
  ctx.lineWidth = 0.10;
  // ctx.strokeStyle = rand;
  ctx.strokeStyle = '#001c70';
  ctx.stroke();
}

function distance( point1, point2 ){
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt( xs + ys );
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

//canvas.addEventListener('mousemove', function(e){
//  mouse.x = e.clientX;
//  mouse.y = e.clientY;
//});


document.addEventListener('mousemove', documentMouseMoveHandler, false);
document.addEventListener('mousedown', documentMouseDownHandler, false);
document.addEventListener('mouseup', documentMouseUpHandler, false);
canvas.addEventListener('touchstart', canvasTouchStartHandler, false);
canvas.addEventListener('touchmove', canvasTouchMoveHandler, false);
window.addEventListener('resize', windowResizeHandler, false);





// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}

tick();

///////////////////////////////////////


function documentMouseMoveHandler(event) {
	mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * .5;
	mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * .5;
}

function documentMouseDownHandler(event) {
	mouseIsDown = true;
}

function documentMouseUpHandler(event) {
	mouseIsDown = false;
}
function canvasTouchStartHandler(event) {
if(event.touches.length == 1) {
		event.preventDefault();
		mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;
		mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
	}
}

function canvasTouchMoveHandler(event) {
	if(event.touches.length == 1) {
		event.preventDefault();
		mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;
		mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
	}
}

function windowResizeHandler() {
	//SCREEN_WIDTH = window.innerWidth;
	//SCREEN_HEIGHT = window.innerHeight;

	canvas.width = SCREEN_WIDTH;
	canvas.height = SCREEN_HEIGHT;

	canvas.style.position = 'absolute';
	canvas.style.left = (window.innerWidth - SCREEN_WIDTH) * .5 + 'px';
	canvas.style.top = (window.innerHeight - SCREEN_HEIGHT) * .5 + 'px';
}