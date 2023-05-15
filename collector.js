/* Get cookie helper function from John S from Stack Overflow*/
function getCookie(name) {
	function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
	var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
	return match ? match[1] : null;
}

/* Run on window load */
function load() {
	document.getElementById("js-enabled").innerText = "true";

	const cookie = getCookie("pvisitor")
	const staticData = {
		id: cookie,
		userAgent: navigator.userAgent,
		userLanguage: navigator.language,
		cookieEnabled: navigator.cookieEnabled,
		jsEnabled: document.getElementById("js-enabled").innerText == "true",
		imgEnabled: false,
		cssEnabled: document.getElementById("time").style.backgroundColor == "lightgray",
		windowWidth: screen.width,
		windowHeight: screen.height,
		netType: navigator.connection.type
	};

	if ((document.getElementById("flag").offsetWidth == 1 && document.getElementById("flag").readyState == "complete") ||
		(document.getElementById("flag").offsetWidth == 1 && document.getElementById("flag").readyState == undefined)) {
		staticData["imgEnabled"] = true;
	}

	/* Record performance data */
	const perfEntries = performance.getEntriesByType("navigation");
	const [p] = perfEntries;
	const performanceData = {
		id: cookie,
		timing: JSON.stringify(p),
		loadStart: p.loadEventStart,
		loadEnd: p.loadEventEnd,
		totalLoad: p.loadEventEnd - p.loadEventStart
	};

	put(staticData, "static");
	put(performanceData, "performance");
}

/* Check if data exists */
async function check(data, type) {
	const url = `https://kjl135.site/mysql/${type}/${data['id']}`;
	const res = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	}).then(response => {
		put(data, type);
	}).catch(error => {
		post(data, type);
	})
}

/* Post to URL */
async function post(data, type) {
	const url = `https://kjl135.site/mysql/${type}`;
	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(response => {
		
	}).catch(error => {
		console.log(error);
	});
}

async function put(data, type) {
	const url = `https://kjl135.site/mysql/${type}/${data['id']}`;
	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(response => {

	}).catch(error => {
		console.log(error);
	});
}

window.onload = function () {
	setTimeout(load, 0);
	idleTime();
	enterPage();
};

/* Activity data */

/* On error */
window.addEventListener("error", (event) => {
	const error = {
		error: `${event.type}: ${event.message}`,
	};

	post(error, "activity");
});

/* Mouse activity */
window.addEventListener("mousemove", (event) => {
	const mouse = {
		mouseCoordinates: `X: ${event.offsetX}, Y: ${event.offsetY}`,
	};

	post(mouse, "activity");
});

window.addEventListener("click", (event) => {
	const click = {
		mouseCoordinates: `X: ${event.offsetX}, Y: ${event.offsetY}`,
		button: event.button,
	};

	post(click, "activty");
});

window.addEventListener("scroll", (event) => {
	const scroll = {
		scrollCoordinates: `X: ${window.scrollX}, Y: ${window.scrollY}`,
	};

	post(scroll, "activity");
});

/* Keyboard activity */
window.addEventListener("keyup", (event) => {
	const data = {
		keyUp: event.code,
	};

	post(data, "activity");
});

/* Idle time */
const idleData = {
	idleEnd: new Date(),
	idleDuration: 0
}
var idleStart = new Date();
function idleTime() {
	var time;
	window.onload = resetTimer;
	document.onmousemove = resetTimer;
	document.onkeydown = resetTimer;

	function send() {
		idleData["idleEnd"] = new Date();
		idleData["idleDuration"] = Math.abs(idleData["idleEnd"] - idleStart);
		post(idleData, "activity");
	}

	function resetTimer() {
		clearTimeout(time);
		idleStart = new Date();
		time = setTimeout(send, 2000);
	}
}

/* When user enters page */
function enterPage() {
	const data = {
		enteredPage: new Date(),
		lastPageURI: document.referrer
	}

	post(data, "activity");
}

/* When user leaves page */
window.addEventListener("beforeunload", (event) => {
	const data = {
		leftPage: new Date()
	}

	post(data, "activity");
});