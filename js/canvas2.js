var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");



let style_height2 = +getComputedStyle(canvas2).getPropertyValue("height").slice(0, -2);
let style_width2 = +getComputedStyle(canvas2).getPropertyValue("width").slice(0, -2);

canvas2.width = style_width2;
canvas2.height = style_height2;

var num2
if (innerWidth < 600) {num2 = 35} else {num2 = 150}

var stars2 = [], // Array that contains the stars
    FPS = 60, // Frames per second
    num2 = num2, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var colors = ['#5fa6d9', '#5fbbd9', '#cadfe6', '#489bfa']

var rand = colors[Math.floor(Math.random() * colors.length)];


// Push stars to array

for (var i = 0; i < num2; i++) {
  stars2.push({
    x: Math.random() * canvas2.width,
    y: Math.random() * canvas2.height,
    //radius: Math.random() * 1 + 1,
    radius: getRandomInt(5)+3,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw2() {
  ctx2.clearRect(0,0,canvas2.width,canvas2.height);

  ctx2.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars2.length; i < x; i++) {
    var s = stars2[i];

    ctx2.fillStyle = rand;
    ctx2.beginPath();
    ctx2.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx2.fill();
    ctx2.fillStyle = 'black';
    ctx2.stroke();
  }

  ctx2.beginPath();
  for (var i = 0, x = stars2.length; i < x; i++) {
    var starI = stars2[i];
    ctx2.moveTo(starI.x,starI.y);
    for (var j = 0, x = stars2.length; j < x; j++) {
      var starII = stars2[j];
      if(distance(starI, starII) < 100) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx2.lineTo(starII.x,starII.y);
      }
    }
  }
  ctx2.lineWidth = 0.10;
  ctx2.strokeStyle = rand;
  ctx2.stroke();
}

function distance2( point1, point2 ){
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt( xs + ys );
}

// Update star locations

function update2() {
  for (var i = 0, x = stars2.length; i < x; i++) {
    var s = stars2[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas2.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas2.height) s.vy = -s.vy;
  }
}

canvas2.addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick2() {
  draw2();
  update2();
  requestAnimationFrame(tick2);
}

tick2();