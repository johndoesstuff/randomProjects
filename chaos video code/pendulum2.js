var canvas1 = document.getElementById("c");
var ctx1 = canvas1.getContext("2d");
canvas1.width = 1920;
canvas1.height = 1080;
var canvas2 = document.getElementById("c2");
var ctx2 = canvas2.getContext("2d");
canvas2.width = 1920;
canvas2.height = 1080;

var ginit = {
	l1: 200,
	l2: 200,
	m1: 5,
	m2: 5,
	vel1: 0,
	vel2: 0,
	theta1: Math.PI/2,
	theta2: Math.PI/2,
};

function frame() {
	mapAngles(f, 1, ctx1, canvas1)
	f++;
	var a = document.createElement("a");
	a.href = canvas1.toDataURL();
	a.download = "pendulumanglesstep" + String(f).padStart(4,0) + ".png";
	a.click();
}

var clone = (e) => JSON.parse(JSON.stringify(e))

canvas1.onmousemove = (e) => {
	//console.log(particle(960, 540, (e.clientX-960)/10000, (e.clientY-540)/10000, 80))
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	/*for (var i = 0; i < bodies.length; i++) {
		ctx2.fillStyle = bodies[i].color;
		ctx2.fillRect(bodies[i].x, bodies[i].y, bodies[i].m, bodies[i].m);
	}*/
	ginit.vel1 = (e.clientX-960)*Math.PI/(960/1)/10
	ginit.vel2 = (e.clientY-540)*Math.PI/(540/1)/10;
	pendulum(clone(ginit), 100, true, ctx2);
}

pendulum = (init, steps, draw, ctx) => {
	g=0.2;
	for (var k = 0; k < steps; k++) {
		//acc1 = (-g*(2*init.m1+init.m2)*Math.sin(init.theta1)-init.m2*g*Math.sin(init.theta1-2*init.theta2)-2*Math.sin(init.theta1-init.theta2)*init.m2*(init.vel2**2*init.l2+init.vel1**2*init.l1*Math.cos(init.theta1-init.theta2)))/(init.l1*(2*init.m1+init.m2-init.m2*Math.cos(2*init.theta1-2*init.theta2)))
		//acc2 = (2*Math.sin(init.theta1-init.theta2)*(init.vel1**2*init.l1*(init.m1+init.m2)+g*(init.m1+init.m2)*Math.cos(init.theta1)+init.vel2**2*init.l2*init.m2*Math.cos(init.theta1-init.theta2)))/(init.l2*(2*init.m1+init.m2-init.m2*Math.cos(2*init.theta1-2*init.theta2)))
		var num1 = -g * (2 * init.m1 + init.m2) * Math.sin(init.theta1);
		var num2 = -init.m2 * g * Math.sin(init.theta1 - 2 * init.theta2);
		var num3 = -2 * Math.sin(init.theta1 - init.theta2) * init.m2;
		var num4 = init.vel2 * init.vel2 * init.l2 + init.vel1 * init.vel1 * init.l2 * Math.cos(init.theta1 - init.theta2);
		var den = init.l1 * (2 * init.m1 + init.m2 - init.m2 * Math.cos(2 * init.theta1 - 2 * init.theta2));
		var acc1 = (num1 + num2 + num3 * num4) / den;

		num1 = 2 * Math.sin(init.theta1 - init.theta2);
		num2 = init.vel1 * init.vel1 * init.l1 * (init.m1 + init.m2);
		num3 = g * (init.m1 + init.m2) * Math.cos(init.theta1);
		num4 = init.vel2 * init.vel2 * init.l2 * init.m2 * Math.cos(init.theta1 - init.theta2);
		den = init.l2 * (2 * init.m1 + init.m2 - init.m2 * Math.cos(2 * init.theta1 - 2 * init.theta2));
		var acc2 = (num1 * (num2 + num3 + num4)) / den;
		init.vel1 += acc1/1;
		init.vel2 += acc2/1;
		init.theta1 += init.vel1;
		init.theta2 += init.vel2;
	}
	if (draw) {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillRect(init.l1*Math.sin(init.theta1)+init.l2*Math.sin(init.theta2)+960, init.l1*Math.cos(init.theta1)+init.l2*Math.cos(init.theta2)+540, 15, 15)
		ctx.fillRect(init.l1*Math.sin(init.theta1)+960, init.l1*Math.cos(init.theta1)+540, 15, 15)
	}
	return [init.l1*Math.cos(init.theta1)+init.l2*Math.cos(init.theta2), init.l1*Math.sin(init.theta1)+init.l2*Math.sin(init.theta2)];
}

f=0;

function mapLengths(steps, d, ctx, canvas) {
	for (var x = 0; x < canvas.width; x+=d) {
		for (var y = 0; y < canvas.width; y+=d) {
			ginit.l1 = x/3;
			ginit.l2 = y/3;
			var p = pendulum(clone(ginit), steps);
			//ctx.fillStyle = p[2];
			//ctx.fillStyle = ["#4287f5", "#f5e042", "#f5429e", "#42f554"][2*(p[1] > 0)+(p[0] > 0)];
			ctx.fillStyle = "rgb(" + [255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2)].join() + ")"
			ctx.fillRect(x, y, d, d);
		}
	}
}

function mapAngles(steps, d, ctx, canvas) {
	for (var x = 0; x < canvas.width; x+=d) {
		for (var y = 0; y < canvas.width; y+=d) {
			ginit.theta1 = (x-960)*Math.PI/(960/1);
			ginit.theta2 = (y-540)*Math.PI/(540/1);
			var p = pendulum(clone(ginit), steps);
			//ctx.fillStyle = p[2];
			ctx.fillStyle = ["#4287f5", "#f5e042", "#f5429e", "#42f554"][2*(p[1] > 0)+(p[0] > 0)];
			//ctx.fillStyle = "rgb(" + [255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2)].join() + ")"
			ctx.fillRect(x, y, d, d);
		}
	}
}

function mapVelocities(steps, d, ctx, canvas) {
	for (var x = 0; x < canvas.width; x+=d) {
		for (var y = 0; y < canvas.width; y+=d) {
			ginit.theta1 = 0;
			ginit.theta2 = 0;
			ginit.vel1 = (x-960)*Math.PI/(960/1)/10;
			ginit.vel2 = (y-540)*Math.PI/(540/1)/10;
			var p = pendulum(clone(ginit), steps);
			//ctx.fillStyle = p[2];
			//ctx.fillStyle = ["#4287f5", "#f5e042", "#f5429e", "#42f554"][2*(p[1] > 0)+(p[0] > 0)];
			ctx.fillStyle = "rgb(" + [255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2)].join() + ")"
			ctx.fillRect(x, y, d, d);
		}
	}
}

function mapMasses(steps, d, ctx, canvas) {
	for (var x = 0; x < canvas.width; x+=d) {
		for (var y = 0; y < canvas.width; y+=d) {
			ginit.m1 = x/100;
			ginit.m2 = y/100;
			var p = pendulum(clone(ginit), steps);
			//ctx.fillStyle = p[2];
			//ctx.fillStyle = ["#4287f5", "#f5e042", "#f5429e", "#42f554"][2*(p[1] > 0)+(p[0] > 0)];
			ctx.fillStyle = "rgb(" + [255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2), 255-255*Math.hypot(p[0], p[1])/(ginit.l1 + ginit.l2)].join() + ")"
			ctx.fillRect(x, y, d, d);
		}
	}
}

mapToX = x => x*240+960
mapFromX = x => x/240-4
mapToY = y => y*240+540
mapFromY = y => y/240-2.25