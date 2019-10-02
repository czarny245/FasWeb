var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");



let style_height3 = +getComputedStyle(canvas3).getPropertyValue("height").slice(0, -2);
let style_width3 = +getComputedStyle(canvas3).getPropertyValue("width").slice(0, -2);

canvas3.width = style_width3;
canvas3.height = style_height3;

var stars3 = [], // Array that contains the stars
    FPS = 60, // Frames per second
    num3 = 120, // Number of stars
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

for (var i = 0; i < num3; i++) {
  stars3.push({
    x: Math.random() * canvas3.width,
    y: Math.random() * canvas3.height,
    //radius: Math.random() * 1 + 1,
    radius: getRandomInt(7)+3,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
  });
}

// Draw the scene

function draw3() {
  ctx3.clearRect(0,0,canvas3.width,canvas3.height);

  ctx3.globalCompositeOperation = "lighter";

  for (var i = 0, x = stars3.length; i < x; i++) {
    var s = stars3[i];

    ctx3.fillStyle = rand;
    ctx3.beginPath();
    ctx3.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx3.fill();
    ctx3.fillStyle = 'black';
    ctx3.stroke();
  }

  ctx3.beginPath();
  for (var i = 0, x = stars3.length; i < x; i++) {
    var starI = stars3[i];
    ctx3.moveTo(starI.x,starI.y);
    for (var j = 0, x = stars3.length; j < x; j++) {
      var starII = stars3[j];
      if(distance(starI, starII) < 100) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx3.lineTo(starII.x,starII.y);
      }
    }
  }
  ctx3.lineWidth = 0.10;
  ctx3.strokeStyle = rand;
  ctx3.stroke();
}

function distance3( point1, point2 ){
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt( xs + ys );
}

// Update star locations

function update3() {
  for (var i = 0, x = stars3.length; i < x; i++) {
    var s = stars3[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas3.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas3.height) s.vy = -s.vy;
  }
}

canvas3.addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Update and draw

function tick3() {
  draw3();
  update3();
  requestAnimationFrame(tick3);
}

tick3();