var canvas1 = document.getElementById("c");
var ctx1 = canvas1.getContext("2d");
canvas1.width = 1920;
canvas1.height = 1080;
var canvas2 = document.getElementById("c2");
var ctx2 = canvas2.getContext("2d");
canvas2.width = 1920;
canvas2.height = 1080;

//mapPosition(960, 540, 400, 4, ctx1, canvas1)

var sigmoidDerivative = (x) => Math.E**(x-3)
var sigmoidSecondDerivative = (x) => Math.E**(x-3)

renderBoard = (ctx, canvas) => {
	ctx.beginPath();
	ctx.moveTo(0, mapToY(sigmoidDerivative(mapFromX(0))))
	for (var i = 0; i < canvas.width; i++) {
		ctx.lineTo(i, mapToY(sigmoidDerivative(mapFromX(i))));
	}
	ctx.stroke();
	ctx.moveTo(0, mapToY(-sigmoidDerivative(mapFromX(0))))
	for (var i = 0; i < canvas.width; i++) {
		ctx.lineTo(i, mapToY(-2));
	}
	ctx.stroke();
	mapFromX()
}

f = 0;

function frame() {
	mapPosition(960, 540, 400, 4, ctx1, canvas1)
	sigmoidDerivative = (x) => (1-f/120/2)*Math.sqrt(16-x**2)+1.1*f/120
	sigmoidSecondDerivative = (x) => -(1-f/120/2)*x/Math.sqrt(16-x**2)
	f++;
	var a = document.createElement("a");
	a.href = canvas1.toDataURL();
	a.download = "circframedist" + String(f).padStart(4,0) + ".png";
	a.click();
}

particle = (x, y, vx, vy, steps, draw, ctx) => {
	//debugger;
	x = mapFromX(x);
	y = mapFromY(y);
	if (draw) ctx.beginPath();
	if (draw) ctx.moveTo(mapToX(x), mapToY(y));
	for (var i = 0; i < steps; i++) {
		if (draw) ctx.lineTo(mapToX(x), mapToY(y));
		x += vx;
		y += vy;
		if (x > 4) vx = -vx;
		if (x < -4) vx = -vx;
		if (y > sigmoidDerivative(x)) {
			var m = Math.hypot(vx, vy);
			var a = Math.atan2(vy, vx);
			vx = Math.cos(2*Math.atan(sigmoidSecondDerivative(x)) - a) * m
			vy = Math.sin(2*Math.atan(sigmoidSecondDerivative(x)) - a) * m
			//x += vx;
			//y += vy;
		}
		if (y < -2) {
			/*var m = Math.hypot(vx, vy);
			var a = Math.atan2(vy, vx);
			vx = Math.cos(2*Math.atan(-0) - a) * m
			vy = Math.sin(2*Math.atan(-0) - a) * m*/
			vy=-vy
			//x += vx;
			//y += vy;
		}
	}
	if (draw) ctx.stroke();
	return [x,y];
}

function drawVector(vx, vy, ctx) {
	for (var i = 0; i < 80; i++) {
		ctx.fillRect(mapToX(particle(960, 540, vx, vy, i)[0]), mapToY(particle(960, 540, vx, vy, i)[1]), 5, 5);
	}
}

function mapField(vx, vy, steps, d, ctx, canvas) {
	for (var x = 0; x < canvas.width; x+=d) {
		for (var y = 0; y < canvas.width; y+=d) {
			if (mapFromY(y) < sigmoidDerivative(mapFromX(x)) && mapFromY(y) > -2) {
				ctx.fillStyle = particle(x, y, vx, vy, steps)[0] > 0 ? "red" : "green";
				ctx.fillRect(x, y, d, d);
			}
		}
	}
}

function mapPosition(x, y, steps, d, ctx, canvas) {
	for (var vx = 0; vx < canvas.width; vx+=d) {
		for (var vy = 0; vy < canvas.width; vy+=d) {
			var p = particle(x, y, (vx-960)/50000, (vy-540)/50000, steps);
			//ctx.fillStyle = ["#4287f5", "#f5e042", "#f5429e", "#42f554"][2*(p[1] > 0)+(p[0] > 0)];
			ctx.fillStyle = "rgb(" + [255-255*Math.hypot(p[0], p[1])/5, 255-255*Math.hypot(p[0], p[1])/5, 255-255*Math.hypot(p[0], p[1])/5].join() + ")"
			ctx.fillRect(vx, vy, d, d);
		}
	}
}

canvas1.onmousemove = (e) => {
	//console.log(particle(960, 540, (e.clientX-960)/10000, (e.clientY-540)/10000, 80))
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	renderBoard(ctx2, canvas2);
	particle(960, 540, (e.clientX-960)/10000, (e.clientY-540)/10000, 800, true, ctx2);
}

mapToX = x => x*240+960
mapFromX = x => x/240-4
mapToY = y => y*240+540
mapFromY = y => y/240-2.25