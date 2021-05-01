var canvas1 = document.getElementById("c");
var ctx1 = canvas1.getContext("2d");
canvas1.width = 1920;
canvas1.height = 1080;
var canvas2 = document.getElementById("c2");
var ctx2 = canvas2.getContext("2d");
canvas2.width = 1920;
canvas2.height = 1080;

var bodies = JSON.parse(JSON.stringify([
	{
		x: 960+200*Math.cos(0*Math.PI/2.5),
		y: 540+200*Math.sin(0*Math.PI/2.5),
		m: 10,
		color: "#f7612f",
	}, {
		x: 960+200*Math.cos(1*Math.PI/2.5),
		y: 540+200*Math.sin(1*Math.PI/2.5),
		m: 10,
		color: "#f7e02f",
	}, {
		x: 960+200*Math.cos(2*Math.PI/2.5),
		y: 540+200*Math.sin(2*Math.PI/2.5),
		m: 10,
		color: "#2ff75a",
	}, {
		x: 960+200*Math.cos(3*Math.PI/2.5),
		y: 540+200*Math.sin(3*Math.PI/2.5),
		m: 10,
		color: "#2fc8f7",
	}, {
		x: 960+200*Math.cos(4*Math.PI/2.5),
		y: 540+200*Math.sin(4*Math.PI/2.5),
		m: 10,
		color: "#bb2ff7",
	}, {
		x: 960,
		y: 540,
		m: 2,
		color: "black",
	},
]));

canvas1.onmousemove = (e) => {
	//console.log(particle(960, 540, (e.clientX-960)/10000, (e.clientY-540)/10000, 80))
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	for (var i = 0; i < bodies.length; i++) {
		ctx2.fillStyle = bodies[i].color;
		ctx2.fillRect(bodies[i].x, bodies[i].y, bodies[i].m, bodies[i].m);
	}
	//particle(e.clientX, e.clientY, 0, 0, 5, 200, true, ctx2);
	particle(960, 540, (e.clientX-960)/20, (e.clientY-540)/20, 5, 200, true, ctx2);
}

f = 0;

function frame() {
	mapVelocity(0, 0, 5, 200, 10, ctx1, canvas1);
	bodies = JSON.parse(JSON.stringify([
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
			m: 10-f/6,
			color: "black",
		},
	]));
	f++;
	var a = document.createElement("a");
	a.href = canvas1.toDataURL();
	a.download = "gravitycentermass" + String(f).padStart(4,0) + ".png";
	a.click();
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

function mapPosition(x, y, m, steps, d, ctx, canvas) {
	for (var vx = 0; vx < canvas.width; vx+=d) {
		for (var vy = 0; vy < canvas.width; vy+=d) {
			var p = particle(x, y, (vx-960)/20, (vy-540)/20, m, steps);
			ctx.fillStyle = p[2];
			//ctx.fillStyle = ["#4287f5", "#f5e042", "#f5429e", "#42f554"][2*(p[1] > 0)+(p[0] > 0)];
			//ctx.fillStyle = "rgb(" + [255-255*Math.hypot(p[0], p[1])/5, 255-255*Math.hypot(p[0], p[1])/5, 255-255*Math.hypot(p[0], p[1])/5].join() + ")"
			ctx.fillRect(vx, vy, d, d);
		}
	}
}

mapToX = x => x*240+960
mapFromX = x => x/240-4
mapToY = y => y*240+540
mapFromY = y => y/240-2.25