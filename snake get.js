canvas = document.getElementsByClassName("cer0Bd")[0];
ctx = canvas.getContext("2d");

width = canvas.width;
height = canvas.height;
tile = Math.round(32/600*width);
marginX = Math.round(28/600*width);
marginY = Math.round(25/530*height);

data = ctx.getImageData(marginX, marginY, width-2*marginX, height-2*marginY).data;
getRGB = function(x, y) {
	return [data[4*y*(width-2*marginX)+4*x], data[4*y*(width-2*marginX)+4*x+1], data[4*y*(width-2*marginX)+4*x+2]];
}
updates = 0;
lastTime = (new Date).getTime();
j = JSON.stringify;
setInterval(function() {
	highestBlue = 0;
	headPos = [];
	data = ctx.getImageData(marginX, marginY, width-2*marginX, height-2*marginY).data;
	for (var y = 0; y < 15; y++) {
		for (var x = 0; x < 17; x++) {
			type = 0;
			r = getRGB(x*tile+tile/2, y*tile+tile/2);
			if (j(r) == j([162, 209, 73]) || j(r) == j([170, 215, 81])) type = 1;
			if (j(r) == j([231, 71, 29])) type = 2;
			if (type == 0 && r[2] > r[1] && r[2] > r[0] && r[1] > r[0]) type = 3;
			if (type == 3 && r[2] > highestBlue) {
				highestBlue = r[2]
				headPos = [x, y];
			}
			ctx.fillStyle = ["black", "red", "green", "blue"][type];
			ctx.fillRect(x*tile+tile/2+marginX+1, y*tile+tile/2+marginY+1, 10, 10);
		}
	}
	var c = 5;
	ctx.fillStyle = "yellow";
	ctx.fillRect(headPos[0]*tile+tile/2+marginX+1, headPos[1]*tile+tile/2+marginY+1, 10, 10);
	dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
	for (var i = 0; i < dirs.length; i++) {
		r = getRGB((headPos[0]+dirs[i][0]/3)*tile+tile/2, (headPos[1]+dirs[i][1]/3)*tile+tile/2);
		if (j(r) == j([20, 70, 157])) {
			headPos[0] += dirs[i][0];
			headPos[1] += dirs[i][1];
		}
	}
	updates++;
	if ((new Date).getTime()-lastTime > 1000) {
		lastTime = (new Date).getTime();
		console.log(updates);
		updates = 0;
	}
}, false);