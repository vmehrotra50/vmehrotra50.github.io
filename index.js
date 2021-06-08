var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var balls = [];

let ww = window.innerWidth;
let wh = window.innerHeight;


for(int i=0; i<10; i++) {
    balls.push({
        x: parseInt(Math.random() * ww, 10),
        y: parseInt(Math.random() * wh, 10),
        vx: 5,
        vy: 2,
        radius: 9,
        color: 'white',
        draw: function() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      });
}

balls.forEach(function(ball) {
    function draw() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;
        raf = window.requestAnimationFrame(draw);
      }
      
      canvas.addEventListener('mouseover', function(e) {
        raf = window.requestAnimationFrame(draw);
      });
      
      canvas.addEventListener('mouseout', function(e) {
        window.cancelAnimationFrame(raf);
      });
      
      ball.draw();
});