/* Get cookie helper function from John S from Stack Overflow*/
function getCookie(name) {
	function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
	var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
	return match ? match[1] : null;
}

/* Run on window load */
function load() {
	document.getElementById("js-enabled").innerText = "true";

	const cookie = getCookie("pvisitor");
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
		loadStart: p.loadEventStart,
		loadEnd: p.loadEventEnd,
		totalLoad: p.loadEventEnd - p.loadEventStart
	};

	post(staticData, "static");
	put(staticData, "static");

	post(performanceData, "performance");
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
const activityData = {
	id: getCookie('pvisitor'),
	error: 'N/A',
	mouseCoords: 'N/A',
	clickCoords: 'N/A',
	clickButton: 'N/A',
	scrollCoords: 'N/A',
	keyUp: 'N/A',
	idleEnd: 'N/A',
	idleDuration: 0,
	enteredPage: 'N/A',
	lastPageURI: 'N/A',
	leftPage: 'N/A'
}

/* On error */
window.addEventListener("error", (event) => {
	activityData['error'] = `${event.type}: ${event.message}`;

	post(activityData, "activity");
	put(activityData, "activity");
});

/* Mouse activity */
window.addEventListener("mousemove", (event) => {
	activityData['mouseCoords'] = `X: ${event.offsetX}, Y: ${event.offsetY}`;

	post(activityData, "activity");
	put(activityData, "activity");
});

window.addEventListener("click", (event) => {
	activityData['clickCoords'] = `X: ${event.offsetX}, Y: ${event.offsetY}`;
	activityData['clickButton'] = event.button;

	post(activityData, "activity");
	put(activityData, "activity");
});

window.addEventListener("scroll", (event) => {
	activityData['scrollCoords'] = `X: ${window.scrollX}, Y: ${window.scrollY}`;

	post(activityData, "activity");
	put(activityData, "activity");
});

/* Keyboard activity */
window.addEventListener("keyup", (event) => {
	activityData['keyUp'] = event.code;

	post(activityData, "activity");
	put(activityData, "activity");
});

/* Idle time */
var idleStart = new Date();
function idleTime() {
	var time;
	window.onload = resetTimer;
	document.onmousemove = resetTimer;
	document.onkeydown = resetTimer;

	function send() {
		const currTime = new Date();

		activityData['idleEnd'] = currTime.toString();
		activityData['idleDuration'] = Math.abs(currTime - idleStart);

		post(activityData, "activity");
		put(activityData, "activity");
	}

	function resetTimer() {
		clearTimeout(time);
		idleStart = new Date();
		time = setTimeout(send, 2000);
	}
}

/* When user enters page */
function enterPage() {
	activityData['enteredPage'] = new Date().toString();
	activityData['lastPageURI'] = document.referrer;

	post(activityData, "activity");
	put(activityData, "activity");
}

/* When user leaves page */
window.addEventListener("beforeunload", (event) => {
	activityData['leftPage'] = new Date().toString();

	post(activityData, "activity");
	put(activityData, "activity");
});