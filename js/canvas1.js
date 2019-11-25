var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");



let style_height1 = +getComputedStyle(canvas1).getPropertyValue("height").slice(0, -2);
let style_width1 = +getComputedStyle(canvas1).getPropertyValue("width").slice(0, -2);

//canvas.setAttribute('height', style_height);
//canvas.setAttribute('width', style_width);

canvas1.width = style_width1;
canvas1.height = style_height1;

var num1
if (innerWidth < 600) {num1 = 7} else {num1 = 25}

// getLineDistance = function() {
//   var line_distance
//   if (innerWidth < 700) {line_distance = 50}
//   if (innerWidth < 1000) {line_distance = 80}
//   else {line_distance = 120}
//   return line_distance
// }

var yellow_stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    num1 = num1, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var colors = ['#324FAA', '#D0D0D0', '#99B0E1', '#3A7CF9']

var rand = colors[Math.floor(Math.random() * colors.length)];


// Push stars to array

for (var i = 0; i < num1; i++) {
  yellow_stars.push({
    x: Math.random() * canvas1.width,
    y: Math.random() * canvas1.height,
    //radius: Math.random() * 1 + 1,
    radius: getRandomInt(5)+3,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw1() {
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);

  ctx1.globalCompositeOperation = "lighter";

  for (var i = 0, x = yellow_stars.length; i < x; i++) {
    var s = yellow_stars[i];

    ctx1.fillStyle = 'gold';
    ctx1.beginPath();
    ctx1.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx1.fill();
    ctx1.stroke();
  }

  ctx1.beginPath();
  for (var i = 0, x = yellow_stars.length; i < x; i++) {
    var starI = yellow_stars[i];
    ctx1.moveTo(starI.x,starI.y);
    if(distance(mouse, starI) < getLineDistance()) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = yellow_stars.length; j < x; j++) {
      var starII = yellow_stars[j];
      // if(distance(starI, starII) < 100) {
      //   //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
      //   ctx1.lineTo(starII.x,starII.y);
      // }
    }
  }
  ctx1.lineWidth = 0.50;
  ctx1.strokeStyle = 'gold';
  ctx1.stroke();
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

function update1() {
  for (var i = 0, x = yellow_stars.length; i < x; i++) {
    var s = yellow_stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas1.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas1.height) s.vy = -s.vy;
  }
}

canvas1.addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick1() {
  draw1();
  update1();
  requestAnimationFrame(tick1);
}

tick1();