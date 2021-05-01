var canvas1 = document.getElementById("c");
var ctx1 = canvas1.getContext("2d");
canvas1.width = 1920;
canvas1.height = 1080;
var canvas2 = document.getElementById("c2");
var ctx2 = canvas2.getContext("2d");
canvas2.width = 1920;
canvas2.height = 1080;

var bodies = [
	{
		x: 960+200*Math.cos(0*Math.PI/1.5),
		y: 540+200*Math.sin(0*Math.PI/1.5),
		m: 10,
		color: "yellow",
	}, {
		x: 960+200*Math.cos(1*Math.PI/1.5),
		y: 540+200*Math.sin(1*Math.PI/3),
		m: 10,
		color: "red",
	}, {
		x: 960+200*Math.cos(2*Math.PI/1.5),
		y: 540+200*Math.sin(2*Math.PI/1.5),
		m: 10,
		color: "blue",
	}, {
		x: 960,
		y: 540,
		m: 5,
		color: "black",
	},
];

canvas1.onmousemove = (e) => {
	//console.log(particle(960, 540, (e.clientX-960)/10000, (e.clientY-540)/10000, 80))
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	for (var i = 0; i < bodies.length; i++) {
		ctx2.fillStyle = bodies[i].color;
		ctx2.fillRect(bodies[i].x, bodies[i].y, bodies[i].m, bodies[i].m);
	}
	particle(e.clientX, e.clientY, 0, 0, 5, 800, true, ctx2);
}

particle = (x, y, vx, vy, m, steps, draw, ctx) => {
	//debugger;
	if (draw) ctx.beginPath();
	if (draw) ctx.moveTo(x, y);
	for (var k = 0; k < steps; k++) {
		var G = 5;
		if (draw) ctx.lineTo(x, y);
		x += vx;
		y += vy;
		for (var i = 0; i < bodies.length; i++) {
			fg = G*m*bodies[i].m/Math.max(Math.hypot(x-bodies[i].x, y-bodies[i].y), 25);
			vx -= fg * (x-bodies[i].x)/Math.max(Math.hypot(x-bodies[i].x, y-bodies[i].y), 25);
			vy -= fg * (y-bodies[i].y)/Math.max(Math.hypot(x-bodies[i].x, y-bodies[i].y), 25);
		}
		vx /= 1.02;
		vy /= 1.02;
	}
	if (draw) ctx.stroke();
	return [x,y, bodies.sort((a,b) => Math.hypot(a.x-x, a.y-y)-Math.hypot(b.x-x, b.y-y))[0].color];
}

function mapVelocity(vx, vy, m, steps, d, ctx, canvas) {
	for (var x = 0; x < canvas.width; x+=d) {
		for (var y = 0; y < canvas.width; y+=d) {
			var p = particle(x, y, vx, vy, m, steps);
			ctx.fillStyle = p[2];
			//ctx.fillStyle = ["#4287f5", "#f5e042", "#f5429e", "#42f554"][2*(p[1] > 0)+(p[0] > 0)];
			//ctx.fillStyle = "rgb(" + [255-255*Math.hypot(p[0], p[1])/5, 255-255*Math.hypot(p[0], p[1])/5, 255-255*Math.hypot(p[0], p[1])/5].join() + ")"
			ctx.fillRect(x, y, d, d);
		}
	}
}

mapToX = x => x*240+960
mapFromX = x => x/240-4
mapToY = y => y*240+540
mapFromY = y => y/240-2.25