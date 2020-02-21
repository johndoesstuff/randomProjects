var menu = JSON.parse('[{"id":"3","type":"expression","latex":"\\\\left(0,\\\\ 3\\\\right)","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"NONE","label":"Select Gamemode (Arrows + Enter)","showLabel":true,"labelSize":"large","labelOrientation":"below","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"4","type":"expression","latex":"x=-4\\\\left\\\\{\\\\frac{\\\\cos\\\\left(a\\\\right)}{2}-0.5<y<\\\\frac{\\\\cos\\\\left(a\\\\right)}{2}+0.5\\\\right\\\\}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"6","type":"expression","latex":"x=-2\\\\left\\\\{\\\\frac{\\\\cos\\\\left(a-\\\\pi\\\\right)}{2}-0.5<y<\\\\frac{\\\\cos\\\\left(a-\\\\pi\\\\right)}{2}+0.5\\\\right\\\\}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"7","type":"expression","latex":"r=1","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"8","type":"expression","latex":"r=0\\\\theta+1","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"\\\\frac{\\\\pi}{2}\\\\cos\\\\left(a\\\\right)","max":"\\\\frac{\\\\pi}{2}\\\\cos\\\\left(a\\\\right)+1"},"domain":{"min":"0","max":"1"}},{"id":"10","type":"expression","latex":"x=4\\\\left\\\\{\\\\frac{\\\\cos\\\\left(a-\\\\pi\\\\right)}{2}-0.5<y<\\\\frac{\\\\cos\\\\left(a-\\\\pi\\\\right)}{2}+0.5\\\\right\\\\}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"11","type":"expression","latex":"x=2\\\\left\\\\{-1<y<1\\\\right\\\\}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"12","type":"expression","latex":"\\\\left(-3,\\\\ -1.5\\\\right)","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"2 Player","showLabel":true,"labelSize":"medium","labelOrientation":"below","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"14","type":"expression","latex":"\\\\left(0,\\\\ -1.5\\\\right)","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"Circular","showLabel":true,"labelSize":"medium","labelOrientation":"below","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"13","type":"expression","latex":"\\\\left(3,\\\\ -1.5\\\\right)","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"1 Player","showLabel":true,"labelSize":"medium","labelOrientation":"below","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"5","type":"expression","latex":"a=0","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"},"sliderBounds":{"min":"0","max":"2\\\\pi"}}]');
var circular = JSON.parse('[{"id":"2","type":"expression","latex":"r=4","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"3","type":"expression","latex":"p=0","color":"#388c46","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"4","type":"expression","latex":"r=0\\\\theta+4","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"p-0.225","max":"p+0.225"},"domain":{"min":"0","max":"1"}},{"id":"5","type":"expression","latex":"\\\\left(x-4b_{x}\\\\right)^{2}+\\\\left(y-4b_{y}\\\\right)^{2}=0.1^{2}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"6","type":"expression","latex":"b_{x}=0","color":"#c74440","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"7","type":"expression","latex":"b_{y}=0","color":"#2d70b3","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}}]');
var twoPlayer = JSON.parse('[{"id":"1","type":"expression","latex":"p_{1}=0","color":"#c74440","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"2","type":"expression","latex":"p_{2}=0","color":"#2d70b3","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"3","type":"expression","latex":"x=-4\\\\left\\\\{p_{1}-1<y<p_{1}+1\\\\right\\\\}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"4","type":"expression","latex":"x=4\\\\left\\\\{p_{2}-1<y<p_{2}+1\\\\right\\\\}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"5","type":"expression","latex":"x=-5\\\\left\\\\{-4<y<4\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"6","type":"expression","latex":"x=5\\\\left\\\\{-4<y<4\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"7","type":"expression","latex":"y=4\\\\left\\\\{-5<x<5\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"8","type":"expression","latex":"y=-4\\\\left\\\\{-5<x<5\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"9","type":"expression","latex":"b_{x}=0","color":"#6042a6","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"10","type":"expression","latex":"b_{y}=0","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"11","type":"expression","latex":"\\\\left(x-b_{x}\\\\right)^{2}+\\\\left(y-b_{y}\\\\right)^{2}=0.1^{2}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}}]');
var onePlayer = JSON.parse('[{"id":"1","type":"expression","latex":"p_{1}=0","color":"#c74440","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"3","type":"expression","latex":"x=4\\\\left\\\\{p_{1}-1<y<p_{1}+1\\\\right\\\\}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"5","type":"expression","latex":"x=-4\\\\left\\\\{-4<y<4\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"6","type":"expression","latex":"x=5\\\\left\\\\{-4<y<4\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"7","type":"expression","latex":"y=4\\\\left\\\\{-4<x<5\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"8","type":"expression","latex":"y=-4\\\\left\\\\{-4<x<5\\\\right\\\\}","color":"#fa7e19","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"9","type":"expression","latex":"b_{x}=0","color":"#6042a6","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"10","type":"expression","latex":"b_{y}=0","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}},{"id":"11","type":"expression","latex":"\\\\left(x-b_{x}\\\\right)^{2}+\\\\left(y-b_{y}\\\\right)^{2}=0.1^{2}","color":"#000000","lineStyle":"SOLID","pointStyle":"POINT","hidden":false,"secret":false,"dragMode":"AUTO","label":"","showLabel":false,"labelSize":"medium","labelOrientation":"default","verticalLabel":false,"interactiveLabel":false,"parametricDomain":{"min":"","max":""},"polarDomain":{"min":"","max":""},"domain":{"min":"0","max":"1"}}]');
var aspect = Calc.graphpaperBounds.mathCoordinates.width/Calc.graphpaperBounds.mathCoordinates.height;
aspect = aspect**-1;
Calc.setExpressions(menu);
var inMenu = true;
var animation = 0;
var cameraAnimator = 0;
var menuSelection = 0;
var circularDirection = 0;
var circularPosition = {x: 0, y: 0};
var circularChar = {p: 0, vel: 0};
var keyboard = {r: false, l: false};
var inGame = false;
var gameIn = 0;
var gameSpeed = 1;
var player1 = 0;
var player2 = 0;
var ball = {x:0, y:0, xvel: 0, yvel: 0};
var menuAnimation = setInterval(function(){
	if (inMenu) {
		animation+=0.03;
		Calc.setExpression({id: "5", latex: "a=" + Math.round(animation*1000)/1000});
		cameraAnimator += 0.01;
		Calc.setMathBounds({left: -6+Math.sin(cameraAnimator)/3, right: 6+Math.sin(cameraAnimator)/3, bottom: (-6+Math.sin(cameraAnimator*Math.SQRT1_2)/3)*aspect, top: (6+Math.sin(cameraAnimator*Math.SQRT1_2)/3)*aspect});
		Calc.setExpression({id: ["12","14","13"][menuSelection], color: Calc.colors.ORANGE});
		Calc.setExpression({id: ["12","14","13"][(menuSelection+1)%3], color: Calc.colors.BLACK});
		Calc.setExpression({id: ["12","14","13"][(menuSelection+2)%3], color: Calc.colors.BLACK});
	}
}, 1000/60);
var circularInterval = setInterval(function(){
	if (inGame && gameIn == 1) {
		circularChar.vel += keyboard.r - keyboard.l;
		circularChar.vel /= 1.1;
		circularChar.p += circularChar.vel/75;
		Calc.setExpression({id: "3", latex: "p=" + circularChar.p});
		Calc.setMathBounds({left: -6+Math.cos(circularChar.p)/2, right: 6+Math.cos(circularChar.p)/2, bottom: -6*aspect+Math.sin(circularChar.p)/2, top: 6*aspect+Math.sin(circularChar.p)/2});
		circularPosition.x += Math.cos(circularDirection)/(100-gameSpeed);
		circularPosition.y += Math.sin(circularDirection)/(100-gameSpeed);
		if (circularPosition.x**2 + circularPosition.y**2 > 0.95) {
			if (Math.abs((Math.atan2(circularPosition.y, circularPosition.x)+2*Math.PI)%(2*Math.PI)-((circularChar.p%(2*Math.PI))+2*Math.PI)%(2*Math.PI)) > 0.225 && Math.abs((Math.atan2(circularPosition.y, circularPosition.x)+2*Math.PI)%(2*Math.PI)-((circularChar.p%(2*Math.PI))+2*Math.PI)%(2*Math.PI)) < 2*Math.PI-0.225) gotoMenu();
			circularDirection = Math.atan2(circularPosition.y, circularPosition.x)+Math.PI+Math.random()-0.5;
			while (circularPosition.x**2 + circularPosition.y**2 > 0.95) {
				circularPosition.x += Math.cos(circularDirection)/(100-gameSpeed);
				circularPosition.y += Math.sin(circularDirection)/(100-gameSpeed);
			}
		}
		if (inGame) Calc.setExpression({id: "6", latex: "b_{x}=" + circularPosition.x});
		if (inGame) Calc.setExpression({id: "7", latex: "b_{y}=" + circularPosition.y});
		gameSpeed += 0.01;
	}
}, 1000/60);
var oneInterval = setInterval(function(){
	if (inGame && gameIn == 2) {	
		Calc.setExpression({id: "1", latex: "p_{1}="+Math.round(player1*1000)/1000});
		Calc.setExpression({id: "9", latex: "b_{x}="+Math.round(ball.x*1000)/1000});
		Calc.setExpression({id: "10", latex: "b_{y}="+Math.round(ball.y*1000)/1000});
		ball.x += 3*ball.xvel/(100-gameSpeed);
		ball.y += 3*ball.yvel/(100-gameSpeed);
		if (ball.x > 4) {
			if (Math.abs(ball.y-player1) > 1) gotoMenu();
			ball.xvel = -1;
			ball.yvel = 3*Math.random()-1.5;
		};
		if (ball.y > 4 || ball.y < -4) ball.yvel *= -1;
		if (ball.x < -4) ball.xvel = 1;
		if (keyboard.u) player1 += 0.1;
		if (keyboard.d) player1 -= 0.1;
		if (player1 > 3) player1 = 3;
		if (player1 < -3) player1 = -3;
		cameraAnimator += 0.01;
		Calc.setMathBounds({left: -6+Math.sin(cameraAnimator)/3, right: 6+Math.sin(cameraAnimator)/3, bottom: (-6+Math.sin(cameraAnimator*Math.SQRT1_2)/3)*aspect, top: (6+Math.sin(cameraAnimator*Math.SQRT1_2)/3)*aspect});
	}
});
var twoInterval = setInterval(function(){
	if (inGame && gameIn == 0) {
		Calc.setExpression({id: "1", latex: "p_{1}="+Math.round(player1*1000)/1000});
		Calc.setExpression({id: "2", latex: "p_{2}="+Math.round(player2*1000)/1000});
		Calc.setExpression({id: "9", latex: "b_{x}="+Math.round(ball.x*1000)/1000});
		Calc.setExpression({id: "10", latex: "b_{y}="+Math.round(ball.y*1000)/1000});
		ball.x += 3*ball.xvel/(100-gameSpeed);
		ball.y += 3*ball.yvel/(100-gameSpeed);
		if (ball.x > 4) {
			if (Math.abs(ball.y-player2) > 1) gotoMenu();
			ball.xvel = -1;
			ball.yvel = 3*Math.random()-1.5;
		};
		if (ball.x < -4) {
			if (Math.abs(ball.y-player1) > 1) gotoMenu();
			ball.xvel = 1;
			ball.yvel = 3*Math.random()-1.5;
		};
		if (ball.y > 4 || ball.y < -4) ball.yvel *= -1;
		if (keyboard.u) player2 += 0.1;
		if (keyboard.d) player2 -= 0.1;
		if (player2 > 3) player2 = 3;
		if (player2 < -3) player2 = -3;
		if (keyboard.w) player1 += 0.1;
		if (keyboard.s) player1 -= 0.1;
		if (player1 > 3) player1 = 3;
		if (player1 < -3) player1 = -3;
		cameraAnimator += 0.01;
		gameSpeed += 0.01;
		Calc.setMathBounds({left: -6+Math.sin(cameraAnimator)/3, right: 6+Math.sin(cameraAnimator)/3, bottom: (-6+Math.sin(cameraAnimator*Math.SQRT1_2)/3)*aspect, top: (6+Math.sin(cameraAnimator*Math.SQRT1_2)/3)*aspect});
	}
});
document.addEventListener("keydown", function(e) {
	if (e.key == "ArrowRight") {
		keyboard.r = true;
		menuSelection++
	};
	if (e.key == "ArrowLeft") {
		keyboard.l = true;
		menuSelection--
	};
	if (e.key == "ArrowUp") {
		keyboard.u = true;
	};
	if (e.key == "ArrowDown") {
		keyboard.d = true;
	}
	if (e.key == "w") {
		keyboard.w = true;
	};
	if (e.key == "s") {
		keyboard.s = true;
	}
	if (e.key == "Enter" && inMenu) selectGamemode(menuSelection);
	menuSelection+=3;
	menuSelection%=3;
});
document.addEventListener("keyup", function(e) {
	if (e.key == "ArrowRight") {
		keyboard.r = false;
	}
	if (e.key == "ArrowLeft") {
		keyboard.l = false;
	}
	if (e.key == "ArrowUp") {
		keyboard.u = false;
	}
	if (e.key == "ArrowDown") {
		keyboard.d = false;
	}
	if (e.key == "w") {
		keyboard.w = false;
	};
	if (e.key == "s") {
		keyboard.s = false;
	}
})
function selectGamemode(e) {
	inMenu = false;
	for (var i = 0; i < menu.length; i++) {
		Calc.removeExpression(menu[i]);
	}
	if (e==1) {
		Calc.setExpressions(circular);
		circularPosition = {x: 0, y: 0};
		circularChar = {p: 0, vel: 0};
		circularDirection = 0;
		inGame = true;
		gameIn = 1;
		var gameSpeed = 0;
	}
	if (e==0) {
		Calc.setExpressions(twoPlayer);
		ball = {x:0, y:0, xvel: 1, yvel: 0};
		inGame = true;
		gameIn = 0;
		var gameSpeed = 0;
		player1 = 0;
		player2 = 0;
	}
	if (e==2) {
		Calc.setExpressions(onePlayer);
		ball = {x:0, y:0, xvel: 1, yvel: 0};
		inGame = true;
		gameIn = 2;
		var gameSpeed = 0;
		player1 = 0;
	}
}
function gotoMenu() {
	menuSelection = 0;
	inMenu = true;
	inGame = false;
	for (var i = 0; i < Calc.getExpressions().length; i++) {
		Calc.removeExpression(Calc.getExpressions()[i]);
	}
	Calc.setExpressions(menu);
}