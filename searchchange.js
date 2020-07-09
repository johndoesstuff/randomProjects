var search = document.getElementsByTagName("iframe")[0].contentWindow;
var validKeys = Object.keys(search);
var storedState = {};
for (var i = 0; i < validKeys.length; i++) {
	try {
		storedState[validKeys[i]] = JSON.stringify(search[validKeys[i]]);
	} catch(e) {
		validKeys.splice(i, 1);
	}
	if (typeof search[validKeys[i]] == "function") {
		validKeys.splice(i, 1);
	}
}
function searchChange() {
	for (var i = 0; i < validKeys.length; i++) {
		try {
			if (JSON.stringify(search[validKeys[i]]) === storedState[validKeys[i]]) {
				validKeys.splice(i, 1);
			}
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	for (var i = 0; i < validKeys.length; i++) {
		try {
			storedState[validKeys[i]] = JSON.stringify(search[validKeys[i]]);
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	if (validKeys.length < 50) console.log(validKeys);
	else console.log(JSON.stringify(validKeys));
}
function searchSame() {
	for (var i = 0; i < validKeys.length; i++) {
		try {
			if (JSON.stringify(search[validKeys[i]]) !== storedState[validKeys[i]]) {
				validKeys.splice(i, 1);
			}
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	for (var i = 0; i < validKeys.length; i++) {
		try {
			storedState[validKeys[i]] = JSON.stringify(search[validKeys[i]]);
		} catch(e) {
			validKeys.splice(i, 1);
		}
	}
	if (validKeys.length < 50) console.log(validKeys);
	else console.log(JSON.stringify(validKeys));
}